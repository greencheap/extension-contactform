const Index = {
    el: '#app',

    name: 'FormIndex',

    data(){
        return _.merge({
            forms: [],
            config:{
                filter: this.$session.get('form.filter', {limit: 10, order: 'date desc'})
            },
            pages: 0,
            count: '',
            selected: [],
        }, window.$data)
    },

    mounted() {
        this.resource = this.$resource('admin/api/contactform{/id}');
        this.$watch('config.page', this.load, { immediate: true });
    },

    watch: {
        'config.filter': {
            handler(filter) {
                if (this.config.page) {
                    this.config.page = 0;
                } else {
                    this.load();
                }
                this.$session.set('form.filter', filter);
            },
            deep: true,
        }
    },

    methods:{
        load(){
            this.resource.query({ filter: this.config.filter, page: this.config.page }).then( (res) => {
                const { data } = res;
                this.$set(this, 'forms', data.forms);
                this.$set(this, 'pages', data.pages);
                this.$set(this, 'count', data.count);
                this.$set(this, 'selected', []);
            });
        },

        active(form){

        },

        copy(){
            if(!this.selected.length){
                return;
            }

            this.resource.save({id: 'copy'}, {ids: this.selected}).then((res) => {
               this.load();
               this.$notify(this.$trans('Forms copied.'))
            })
        },

        remove(){
            this.resource.delete({id: 'bulk'}, {ids: this.selected}).then((res) => {
                this.load();
                this.$notify(this.$trans('Deleted forms!'))
            })
        },

        getType(value){
            return this.types[value];
        }
    }
}

export default Index

Vue.ready(Index)