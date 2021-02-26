<?php $view->script('form-index', 'contactform:app/bundle/form-index.js', ['vue']) ?>

<section id="app">

    <div class="uk-margin uk-flex uk-flex-between uk-flex-wrap">
        <div class="uk-flex uk-flex-middle uk-flex-wrap">

            <h2 class="uk-h3 uk-margin-remove" v-if="!selected.length">{{ '{0} %count% Forms|{1} %count% Form|]1,Inf[ %count% Forms' | transChoice(count, {count:count}) }}</h2>

            <template v-else>
                <h2 class="uk-h3 uk-margin-remove">{{ '{1} %count% Form selected|]1,Inf[ %count% Forms selected' | transChoice(selected.length, {count:selected.length}) }}</h2>

                <div class="uk-margin-left" >
                    <ul class="uk-iconnav">
                        <li><a uk-icon="icon:copy;ratio:1" :uk-tooltip="'Copy' | trans" @click="copy"></a></li>
                        <li><a uk-icon="icon:trash;ratio:1" :uk-tooltip="'Delete' | trans" @click="remove" v-confirm="'Delete Posts?'"></a></li>
                    </ul>
                </div>
            </template>

            <div class="uk-search uk-search-default pk-search">
                <span uk-search-icon></span>
                <input class="uk-search-input" type="search" v-model="config.filter.search" debounce="300">
            </div>

        </div>
        <div>
            <a class="uk-button uk-button-primary" :href="$url.route('admin/contactform/edit')">{{ 'Add Form' | trans }}</a>
        </div>
    </div>
    <div class="uk-overflow-auto">
        <table class="uk-table uk-table-hover uk-table-middle">
            <thead>
                <tr>
                    <th class="pk-table-width-minimum"><input type="checkbox" v-check-all:selected="{ selector: 'input[name=id]' }" class="uk-checkbox" number></th>
                    <th class="pk-table-min-width-200" v-order:title="config.filter.order">{{ 'Title' | trans }}</th>
                    <th class="pk-table-width-100 uk-text-center">{{ 'Send Type' | trans }}</th>
                    <th class="pk-table-min-width-200">{{ 'From Address' | trans }}</th>
                    <th class="pk-table-width-100" v-order:date="config.filter.order">{{ 'Date' | trans }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(form, id) in forms" :key="id" :class="{'uk-active': active(form)}">
                    <td><input type="checkbox" class="uk-checkbox" name="id" :value="form.id"></td>
                    <td><a :href="$url.route('admin/contactform/edit' , {id:form.id})">{{form.title}}</a></td>
                    <td class="uk-text-center">{{getType(form.send_type)}}</td>
                    <td>{{form.from_address}}</td>
                    <td>{{form.date | date}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="uk-h2 uk-text-muted uk-text-center" v-show="forms && !forms.length">{{ 'No forms found.' | trans }}</h3>

    <v-pagination :pages="pages" v-model="config.page" v-show="pages > 1 || config.page > 0"></v-pagination>

</section>