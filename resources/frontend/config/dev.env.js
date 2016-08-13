var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://jwt-example.dev/api/v1"',
  PUSHER_KEY: '"f4a54dd79660dc8fc60b"',
  PUSHER_CLUSTER: '"eu"',
});
