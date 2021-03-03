const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: {
        'form-edit':'./app/views/form-edit',
        'form-index':'./app/views/form-index',
        'widget-form':'./app/components/widget-form.vue',
        'node-settings':'./app/components/node-settings.vue'
    },
    output: {
        path: path.resolve(__dirname, './app/bundle'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
