var webpack = require('webpack');
var es6 = require('es6-promise').polyfill();
var path = require('path');
module.exports={
    entry:[
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        },
        {
            test:/\.scss$/,
             include: [
                    path.resolve(__dirname, "not_exist_path")
                ],
            loader:["style-loader", "css-loader", "sass-loader"]
        }
        ]
    },
    resolve:{
        extensions:['*','.js','.jsx']
    },
    output:{
        path:__dirname + '/dist',
        publicPath:'/',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./dist',
        hot:true,
        historyApiFallback:true
     },
     plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'fetch':'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':'"development"'
            }
        })
    ]
};