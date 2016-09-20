import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import webpackMiddleWare from 'webpack-dev-middleware';

/* eslint-disable no-console */


const app = express();
const compiler = webpack(config);

app.set('port', (process.env.PORT || 5000));
//No files are written to disk, it handle the files in memory
app.use(webpackMiddleWare(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//https://api.mlab.com/api/1/databases/dakkhinerbaranda/collections/test?apiKey=FoffkWZUhseXYN3tH_kpgL0JlRdMC-vm
