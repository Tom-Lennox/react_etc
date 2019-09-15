var publidDir = __dirname + '/public';
module.exports = {
    // 【何のファイルをコンパイルするのか】
    entry: [
        // 3_これをコンパイルした成果物を返す
        './src/index.js'
    ],
    // 【どこに吐き出すか】
    output: {
        path: publidDir,
        // 1_public pathはこちらを指定
        publicPath: '/',
        // 2_これにアクセスがあったら
        filename: 'bundle.js'
    },
    // 【どのようなライブラリを使ってコンパイルするか】
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                // presets: ['react', 'es2015']
                presets: ['@babel/preset-env']
            }
        }]
    },
    // 【entryからインポートライブラリを検索する拡張子】
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        // ドキュメントルートとなる。
        contentBase: publidDir
    }
};
