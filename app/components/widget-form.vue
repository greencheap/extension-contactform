<template>
    <div class="pk-grid-large pk-width-sidebar-large" uk-grid>
        <div class="pk-width-content">
            <div class="uk-margin">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <v-input id="form-title" type="text" name="title" placeholder="Enter Title" view="class: uk-width-expand uk-form-large uk-input" rules="required" v-model="widget.title" message="Title cannot be blank."/>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Forms' | trans }}</label>
                <select class="uk-select" v-model="widget.data.formType">
                    <option v-for="fm in contactForms" :key="fm.id" :value="fm.id">{{fm.title}}</option>
                </select>
            </div>
        </div>
        <div class="pk-width-sidebar">
            <component :is="'template-settings'" :widget.sync="widget" :config.sync="config" :form="form" />
            <div class="uk-margin">
                <div class="uk-form-controls uk-form-controls-text">
                    <p class="uk-margin-small">
                        <label><input type="checkbox" class="uk-checkbox" v-model="widget.data.markdown" number><span class="uk-margin-small-left">{{ 'Markdown' | trans }}</span></label>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    section: {
        label: 'Settings'
    },

    props: ['widget', 'config', 'form'],

    data(){
        return {
            contactForms: window.$contact_forms
        }
    },

    inject: ['$components'],

    replace: false,

    created(){
        _.extend(this.$options.components, this.$components);
    },

    mounted(){
        if(!this.widget.data['formType']){
            this.widget.data = _.merge({
                formType:this.contactForms[0].id
            } , this.widget.data);
        }
    }
}

window.Widgets.components['contactform-form.settings'] = module.exports
</script>