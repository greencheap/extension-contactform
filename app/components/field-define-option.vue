<template>
    <div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Label (Title)' | trans}}*</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.title" class="uk-input" required>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Name' | trans}}*</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.data.name" class="uk-input" required>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Placeholder' | trans}}</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.data.placeholder" class="uk-input">
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Custom Id' | trans}}</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.data.customId" class="uk-input">
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Class' | trans}}</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.data.class" class="uk-input">
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Required' | trans}}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <input type="checkbox" v-model="field.data.required" class="uk-checkbox">
            </div>
        </div>
    </div>
</template>

<script>
/**
 class:"uk-input"
     customId:""
     name:"merhaba"
     placeholder:"Firstname & Surname"
     required:false

 */
export default {
    props:['field']
}
</script>
