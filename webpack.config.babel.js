import webpack from 'webpack'
export default {
    entry: './src',
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: "cookie.js",
        library: 'cookie',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: [' ','.js', '.es6']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            comments: false,
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: ['umd'], filename: '[name].js'})
    ],
    devtool: 'source-map'
}
