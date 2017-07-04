import webpack from 'webpack'
export default {
    entry: ['babel-polyfill', './src'],
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: "cookie.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'eval-source-map'
}
