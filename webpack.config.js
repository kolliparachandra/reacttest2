var webpack = require('webpack');
module.exports={
    entry:[
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module:{
        preLoaders:[
            {
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'eslint-loader'    
        }
        ],
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        },
        {
            test:/\.scss$/,
            loader:'style!css!sass'
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
    eslint:{
        configFile:'./.eslintrc'
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