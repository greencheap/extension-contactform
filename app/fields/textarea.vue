<template>
    <div class="uk-form-horizontal">
        <defineoption :field.sync="field"></defineoption>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Value' | trans}}</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.data.value" class="uk-input">
            </div>
        </div>
    </div>
</template>

<script>
import FieldDefineOption from '../components/field-define-option.vue'

export default {
    props:['field'],

    field:{
        label: 'Textarea',
        default:{
            type:'textarea',
            customId: '',
            required: false,
            name: '',
            placeholder: '',
            value: '',
            class: 'uk-textarea'
        }
    },

    components:{
        defineoption: FieldDefineOption
    }
}
</script>
