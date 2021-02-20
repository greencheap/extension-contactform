import Settings from '../components/form-settings.vue'
import General from '../components/form-general.vue'

const Form = {
    el: '#app',

    name: 'Form',

    data() {
        return _.merge({
            sections: [],
            active: this.$session.get('form.edit.tab.active', 0),
        }, window.$data);
    },

    created() {
        const sections = [];
        _.forIn(this.$options.components, (component, name) => {
            if (component.section) {
                sections.push(_.extend({ name, priority: 0 }, component.section));
            }
        });
        this.$set(this, 'sections', _.sortBy(sections, 'priority'));
    },

    mounted() {
        const vm = this;
        this.tab = UIkit.tab('#tab', { connect: '#content' });

        UIkit.util.on(this.tab.connects, 'show', (e, tab) => {
            if (tab != vm.tab) return;
            for (const index in tab.toggles) {
                if (tab.toggles[index].classList.contains('uk-active')) {
                    vm.$session.set('form.edit.tab.active', index);
                    vm.active = index;
                    break;
                }
            }
        });
        this.tab.show(this.active);
    },

    methods:{
        save(){
            this.$http.post('admin/api/blog/post', {
                id: this.post.id,
                data: this.post,
            }).then((res) => {
                const response = res.data;
                if (!this.post.id) {
                    window.history.replaceState({}, '', this.$url.route('admin/blog/post/edit', { id: response.post.id, type: response.post.type }));
                }
                this.$set(this, 'post', response.post);
                this.$notify(this.$trans('Saved'));
            }).catch((err) => {
                this.$notify(err.data, 'danger');
            });
        }
    },

    components:{
        Settings,
        General
    }
}

export default Form

window.Form = Form

Vue.ready(window.Form)