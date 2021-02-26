<template>
    <div class="uk-form-horizontal">
        <div v-if="!data.isSmtp" class="uk-alert-danger" uk-alert>
            <h3 class="uk-h5"><i uk-icon="info" class="uk-margin-small-right"></i>{{ 'Smtp Bilgileriniz Girilmemiş' | trans}}</h3>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'Post Type' | trans}}</label>
            <div class="uk-form-controls">
                <select class="uk-select uk-form-width-medium" v-model="form.send_type">
                    <option v-for="(type, id) in data.types" :key="id" :value="id">{{type}}</option>
                </select>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'From Address' | trans}}</label>
            <div class="uk-form-controls">
                <div class="uk-inline">
                    <span class="uk-form-icon" :uk-icon="`icon:${getTypeIcon}`"></span>
                    <input type="text" class="uk-input uk-form-width-large" v-model="form.from_address">
                </div>
                <span class="uk-display-block uk-text-small uk-margin-small">{{ 'Address to send the reply' | trans }}</span>
            </div>
        </div>

        <div v-if="getType == 'url'" class="uk-margin">
            <div class="uk-margin">

            </div>
            <label class="uk-form-label">{{ 'Form Address Header' | trans }}</label>
            <div class="uk-form-controls">
                <div class="uk-margin uk-flex">
                    <input type="input" :placeholder="'Name' | trans" class="uk-input uk-width-expand uk-margin-small-right">
                    <input type="input" :placeholder="'Value' | trans" class="uk-input uk-width-expand">
                    <div class="uk-flex uk-flex-middle uk-flex-center">
                        <a class="uk-margin-small-left" uk-icon="icon:trash;ratio:1.2" :uk-tooltip="'Delete Item' | trans"></a>
                    </div>
                </div>

            </div>
        </div>

        <div class="uk-margin">
            <h4 class="uk-heading-divider">{{ 'Messages' | trans }}</h4>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'If the post was successful' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input uk-form-width-large" v-model="form.data.messages.success_send" required>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'If sending fails' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input uk-form-width-large" v-model="form.data.messages.error_send" required>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'If it does not enter correct data' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input uk-form-width-large" v-model="form.data.messages.error_invalid" required>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{ 'If mandatory fields are left blank' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input uk-form-width-large" v-model="form.data.messages.error_validation" required>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:['form', 'data'],

    section:{
        label: 'Settings',
        priority: 10
    },

    watch:{
        'form.send_type':{
            handler(value){
                if(value == 1){
                    this.form.data = _.merge({
                        headers: []
                    }, this.form.data)
                }
            },
            deep:true
        }
    },

    computed:{
        getType(){
            /**
             * @todo 19'uncu satırda type değeri hatalı
             * Form::TYPE_MAIL = 0
             * Form::TYPE_HTTP = 1
             */
            if(this.form.send_type == 0){
                return 'mail';
            }
            return 'url'
        },

        getTypeIcon(){
            /**
             * @todo 19'uncu satırda type değeri hatalı
             * Form::TYPE_MAIL = 0
             * Form::TYPE_HTTP = 1
             */
            if(this.form.send_type == 0){
                return 'mail';
            }
            return 'link'
        }
    }
}
</script>