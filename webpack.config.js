var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        orderListEntry: './src/layout/scripts/order-list.js',
        shemesForOrderList: './src/layout/scripts/scheme_order.js',
        scopeOfWorkEntry: './src/layout/scripts/scopeOfWork.js',
        shemesForWorks: './src/layout/scripts/scheme_works.js',
        estimate: './src/layout/scripts/estimate.js',
        worksTable: './src/layout/scripts/works_table.js',
        help: './src/layout/scripts/help.js',
    },
    output: {
        path: path.resolve(__dirname, 'build', 'target'),
        // publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle_[chunkhash].js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|png|aac|ogg|ttf)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3003,
        open: true,
        historyApiFallback: true
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/layout/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({  // Also generate a order-list.html
            filename: 'order-list.html',
            template: './src/layout/order-list.html',
            chunks: ['orderListEntry']
        }),
        new HtmlWebpackPlugin({  // Also generate a sсheme_order_sheet.html
            filename: 'sсheme_order_sheet.html',
            template: './src/layout/sсheme_order_sheet.html',
            chunks: ['shemesForOrderList']
        }),
        new HtmlWebpackPlugin({  // Also generate a scopeOfWork.html
            filename: 'scopeOfWork.html',
            template: './src/layout/scopeOfWork.html',
            chunks: ['scopeOfWorkEntry']
        }),
        new HtmlWebpackPlugin({  // Also generate a sсheme_works.html
            filename: 'sсheme_works.html',
            template: './src/layout/sсheme_works.html',
            chunks: ['shemesForWorks']
        }),
        new HtmlWebpackPlugin({  // Also generate a estimate.html
            filename: 'estimate.html',
            template: './src/layout/estimate.html',
            chunks: ['estimate']
        }),
        new HtmlWebpackPlugin({  // Also generate a works_table.html
            filename: 'works_table.html',
            template: './src/layout/works_table.html',
            chunks: ['worksTable']
        }),
        new HtmlWebpackPlugin({
            filename: 'help.html',
            template: './src/layout/help.html',
            chunks: ['help']
        }),
        new CopyPlugin([
            // { from: 'src/layout/audio', to: './audio' },
            { from: 'src/layout/img', to: './img' },
            // { from: 'src/layout/img', to: './img' },
            // { from: 'src/layout/css/fonts/ttf', to: './fonts' }
        ])
    ]
}
