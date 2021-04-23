const {container, setup } = require('./di-config')
setup()

const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');

const compiler = webpack(webpackConfig);

const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // Stats Object
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const rotaEmpresa = require('./api/porta/EmpresaRota')(container)
app.use('/api/empresas', rotaEmpresa)


fakeHMR.config({ app });
app.use(express.static('public'));

// require('./webpackRunner');

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>hi</title>
  </head>
  <body>
    <div id="app"/>
    <script src="/bundle.js" type="text/javascript"></script>
  </body>
</html>`)
});

app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
})