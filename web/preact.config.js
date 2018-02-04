import CopyWebpackPlugin from 'copy-webpack-plugin'
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const path = require('path')
const { join } = require('path')
const root = join(__dirname, 'src')

export default config => {
    config.plugins.push( new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]) );

    // config.plugins.push( new HtmlWebpackPlugin({
    //     //inlineSource: '.(js|css)$' // embed all javascript and css inline
    //     inlineSource: '.(css)$',
    //     //filename: 'src/index.html'
    // }) )
    // config.plugins.push( new HtmlWebpackInlineSourcePlugin() )

    config.plugins.push(
      new FaviconsWebpackPlugin({
        logo: path.join(root, 'assets','icon.png'),
    		prefix: `assets/icons/`,
        emitStats: false,
    		inject: true,
    		icons: {
          android: true,
    			appleIcon: true,
          favicons: true,
          firefox: false,
          twitter: false,
          windows: false,
          appleStartup: false,
    			coast: false,
          opengraph: false,
          yandex: false
        }
    	})
    );
}
