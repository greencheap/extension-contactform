<template>
    <div>
        <div class="uk-margin">
            <label class="uk-form-label">{{'Label (Title)' | trans}}*</label>
            <div class="uk-form-controls">
                <input type="text" v-model="field.title" class="uk-input" required>
            </div>
        </div>
        <div class="uk-margin">
            <button @click.prevent="setBtn" class="uk-button uk-button-primary uk-button-small">{{'Add Button' | trans}}</button>
        </div>
        <div class="uk-margin">
            <ul class="uk-list uk-list-striped">
                <li v-for="(btn, id) in field.data.buttons" :key="id" class="uk-padding">
                    <div class="uk-margin">
                        <label class="uk-form-label">{{'Select Type' | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" v-model="btn.type">
                                <option value="submit">{{'Submit' | trans}}</option>
                                <option value="reset">{{'Reset' | trans}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label">{{'Text' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" v-model="btn.text" class="uk-input" required>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label">{{'Class' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" v-model="btn.class" class="uk-input" required>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <button @click.prevent="removeBtn(id)" class="uk-button uk-button-danger uk-button-small">{{'Remove' | trans}}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['field'],

    field:{
        label: 'Buttons',
        default:{
            buttons:[
                {
                    type:'submit',
                    text: 'Submit',
                    class: 'uk-button uk-button-primary'
                }
            ]
        }
    },

    methods:{
        setBtn(){
            this.field.data.buttons.push({
                type:'submit',
                text: 'Submit',
                class: 'uk-button uk-button-primary'
            })
        },

        removeBtn(id){
            this.field.data.buttons.splice(id, 1)
        }
    }
}
</script>

<style scoped>

</style>
