<template>
    <div class="uk-form-horizontal">
        <defineoption :field.sync="field"></defineoption>
        <div class="uk-margin">
            <label>{{'Values' | trans}} <a @click.prevent="setValue()" class="uk-margin-left">{{'Add Value' | trans}}</a></label>
            <ul class="uk-list uk-list-striped">
                <li v-for="(value, id) in field.data.values" :key="id" class="uk-padding">
                    <div class="uk-margin">
                        <label class="uk-form-label">{{'Label' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" v-model="value.label" class="uk-input uk-form-small" required>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label">{{'Value' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" v-model="value.value" class="uk-input uk-form-small" required>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <button @click.prevent="removeValue(id)" class="uk-button uk-button-danger uk-button-small">{{'Remove' | trans}}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import FieldDefineOption from '../components/field-define-option.vue'

export default {
    props:['field'],

    field:{
        label: 'Checkbox',
        default:{
            type:'checkbox',
            customId: '',
            required: false,
            name: '',
            values:[],
            placeholder: '',
            class: 'uk-checkbox'
        }
    },

    methods:{
        setValue(){
            this.field.data.values.push({
                value:'',
                label:''
            })
        },

        removeValue(id){
            this.field.data.values.splice(id, 1)
        }
    },

    components:{
        defineoption: FieldDefineOption
    }
}
</script>
