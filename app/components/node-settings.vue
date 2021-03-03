<template>
    <div uk-grid>
        <div class="uk-form-horizontal uk-width-expand@m">
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Name" | trans
                }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="user"></span>
                        <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.name"
                            required
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Email" | trans
                }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="mail"></span>
                        <input
                            type="email"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.email"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Phone" | trans
                }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="phone"></span>
                        <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.phone"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{ "Company Fax" | trans }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="print"></span>
                        <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.fax"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Tax Number" | trans
                }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="file-text"></span>
                        <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.taxNumber"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Tax Office" | trans
                }}</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="lifesaver"></span>
                        <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            v-model="node.data.contact.main.taxOffice"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{ "Company Map" | trans }}</label>
                <div class="uk-form-controls">
                    <textarea
                        :placeholder="'Embed Link' | trans"
                        class="uk-textarea uk-form-width-large uk-height-small"
                        v-model="node.data.contact.main.iframeMap"
                    >
                    </textarea>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Company Address" | trans
                }}</label>
                <div class="uk-form-controls">
                    <textarea
                        class="uk-textarea uk-form-width-large uk-height-small"
                        v-model="node.data.contact.main.address"
                    ></textarea>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">{{
                    "Contact Form Select" | trans
                }}</label>
                <div class="uk-form-controls">
                    <select
                        class="uk-select uk-form-width-large"
                        v-model="node.data.contact.contactFormID"
                    >
                        <option value="">{{ "Blank" | trans }}</option>
                        <option
                            v-for="form in contactformlist"
                            :key="form.id"
                            :value="form.id"
                            >{{ form.title }}</option
                        >
                    </select>
                </div>
            </div>
        </div>
        <div class="uk-width-medium@m">
            <component :is="'template-settings'" :node="node" :roles="roles" />
        </div>
    </div>
</template>

<script>
const ContactFormPage = {
    props: ["node", "roles"],

    section: {
        label: "Settings",
        priority: 0
    },

    inject: ["$components"],

    data() {
        return {
            page: {
                data: { title: true }
            },
            contactformlist: window.$contactform
        };
    },

    created() {
        _.extend(this.$options.components, this.$components);

        if (!this.node.data["contact"]) {
            this.node.data = _.merge(
                {
                    contact: {
                        main: {
                            name: "",
                            email: "",
                            phone: "",
                            fax: "",
                            taxNumber: "",
                            taxOffice: "",
                            address: "",
                            iframeMap: ""
                        },
                        contactFormID: ""
                    }
                },
                this.node.data
            );
        }
    },

    mounted() {
        if (!this.node.id) this.node.status = 1;
    },

    events: {
        "save:node": function(event, data) {
            data.page = this.page;

            if (!this.node.title) {
                this.node.title = this.page.title;
            }
        }
    },

    watch: {
        "node.data.defaults.id": {
            handler(id) {
                if (id) {
                    this.$http
                        .get("api/site/page{/id}", {
                            params: { id }
                        })
                        .then(function(res) {
                            this.$set(this, "page", res.data);
                        });
                }
            },

            immediate: true
        }
    }
};
export default ContactFormPage;
window.Site.components["contact.settings"] = ContactFormPage;
</script>
