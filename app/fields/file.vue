<template>
    <div class="uk-form-horizontal">
        <defineoption :field.sync="field"></defineoption>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Allowed Types' | trans}}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <p class="uk-display-block uk-margin-small" v-for="(type, id) in typesList">
                    <label><input type="checkbox" v-model="field.data.allowedTypes" :value="type.value" class="uk-margin-right uk-checkbox"> {{type.label}}</label>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FieldDefineOption from '../components/field-define-option.vue'

export default {
    props:['field'],

    field:{
        label: 'File',
        default:{
            type:'file',
            customId: '',
            required: false,
            name: '',
            placeholder: '',
            value: '',
            multiFile: false,
            allowedTypes: ['officedocument.wordprocessingml.document', 'application/pdf'],
            class: ''
        }
    },

    computed:{
        typesList(){
            return [
                {
                    label: 'Pdf',
                    value: 'application/pdf'
                },
                {
                    label: 'Docs',
                    value: 'officedocument.wordprocessingml.document'
                },
                {
                    label: 'Svg',
                    value: 'image/svg+xml'
                },
                {
                    label: 'Png',
                    value: 'image/png'
                },
                {
                    label: 'Jpg',
                    value: 'image/jpeg'
                },
                {
                    label: 'Mp4',
                    value: 'video/mp4'
                },
                {
                    label: 'Zip',
                    value: 'application/zip'
                },
                {
                    label: 'Rar',
                    value: 'application/x-rar-compressed'
                }
            ]
        }
    },

    components:{
        defineoption: FieldDefineOption
    }
}
</script>
