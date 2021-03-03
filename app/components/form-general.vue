<template>
    <div uk-grid>
        <div class="uk-width-expand@m">
            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input type="text" v-model="form.title" class="uk-input uk-form-large uk-width-expand" :placeholder="'Enter title' | trans" required>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{'Your Fields' | trans}}</label>
                <draggable :list="form.data.fields" handle=".handle">
                    <div v-for="(field, id) in form.data.fields" :key="id" class="uk-margin">
                        <div class="uk-card uk-card-default uk-card-body uk-card-small">
                            <span><a uk-icon="more-vertical" class="handle uk-margin-small-right"></a>{{field.title}}<span class="uk-margin-small-left uk-text-meta">{{field.label}}</span></span>
                            <div class="uk-align-right">
                                <ul class="uk-iconnav" >
                                    <li><a uk-icon="arrow-down" :uk-toggle="`target: #field-content${id}; animation: uk-animation-fade`"></a></li>
                                    <li><a v-confirm="'Delete Field?'" @click="removeField(id)" uk-icon="trash"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div :id="`field-content${id}`" class="tm-placeholder-fields" hidden>
                            <component :is="field.component" :field.sync="field"></component>
                        </div>
                    </div>
                </draggable>
                <div v-if="!form.data.fields.length" class="uk-height-large uk-flex uk-flex-middle uk-flex-center">
                    <h3>{{'Add a new field' | trans}}</h3>
                </div>
            </div>
        </div>
        <div class="uk-width-medium@m">
            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Fields' | trans }}</label>
                <ul class="uk-list">
                    <li v-for="(field, id) in fields" :key="id">
                        <div class="uk-card uk-card-default uk-card-body uk-card-small">
                            <span>{{field.label}}</span>
                            <a @click.prevent="setField(field)" class="uk-align-right" uk-icon="icon:plus;ratio:1.3" :uk-tooltip="'Add Field' | trans"></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// Types
import InputType from '../fields/input.vue'
import EmailType from '../fields/email.vue'
import TextareaType from '../fields/textarea.vue'
import PhoneType from '../fields/phone.vue'
import RadioType from '../fields/radio.vue'
import CheckboxType from '../fields/checkbox.vue'
/**
 * @deprecated
 * import FileType from '../fields/file.vue'
 */
import Buttons from '../fields/buttons.vue'

// Modules
import Draggable from "vuedraggable";

function convertName(str) {
    var re = /[^a-z0-9]+/gi;
    var re2 = /^-*|-*$/g;
    str = str.replace(re, '-');
    return str.replace(re2, '').toLowerCase();
}

export default {
    props:['form'],

    section:{
        label: 'General',
        priority: 0
    },

    data(){
      return {
          fields:[]
      }
    },

    created() {
        const fields = [];
        _.forIn(this.$options.components, (component, name) => {
            if (component.field) {
                fields.push(_.extend({ name, priority: 0 }, component.field));
            }
        });
        this.$set(this, 'fields', _.sortBy(fields, 'priority'));
    },

    methods:{
        setField(field){
            const self = this;
            UIkit.modal.prompt('Field Title:', '').then((name) => {
                if(name){
                    field.default.name = convertName(name)
                    self.form.data.fields.push({
                        data:field.default,
                        label: field.label,
                        component: field.name,
                        title: name
                    })
                }
            });
        },

        removeField(id){
            this.form.data.fields.splice(id, 1)
        }
    },

    components:{
        InputType,
        EmailType,
        TextareaType,
        PhoneType,
        RadioType,
        CheckboxType,
        /**
         * @deprecated
         * FileType,
         */
        Buttons,
        Draggable
    }
}
</script>

<style>
.tm-placeholder-fields{
    margin-top:10px;
    border:1px solid #e8e8e8;
    padding:40px 30px;
}
.tm-darkmode .tm-placeholder-fields{
    border:1px solid #182c26;
}
.handle{
    cursor: move;
}
</style>

