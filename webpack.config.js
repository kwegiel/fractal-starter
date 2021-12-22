const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {    
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: ['./src/js/main.js', './src/scss/styles.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '../css/', name: '[name].css' }
                    },
                    'sass-loader'
                ]
            },            
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new SVGSpritemapPlugin('public/images/icons/*.svg', {
            output: {
                filename: '../images/svgsprite.svg',               
            },
        }),
    ],
};