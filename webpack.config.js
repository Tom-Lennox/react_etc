var publidDir = __dirname + '/public';
module.exports = {
    // 何のファイルをコンパイルするのか
    entry: [
        './src/index.js'
    ],
    // どこに吐き出すか
    output: {
        path: publidDir,
        publicPath: '/',
        filename: 'bundle.js'
    },
    // どのようなライブラリを使ってコンパイルするか
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    // entryからインポートライブラリを検索する拡張子
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        // ドキュメントルートとなる。
        contentBase: publidDir
    }
};
