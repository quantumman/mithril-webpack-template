import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.babel.js';

new WebpackDevServer(webpack(config), {
  contentBase: config.output.publicPath,
  publicPath: config.output.publicPath,
  filename: config.output.filename,
  hot: true,
  historyApiFallback: false,
  stats: {colors: true},
  proxy: {
    "/api/*": "http://localhost:3000/"
  }
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});
