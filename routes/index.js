const routes = require('express').Router();
const BitGo = require('bitgo');
const _ = require('lodash');
const bitgo = new BitGo.BitGo({accessToken: '88c1399d63594eb14a745de6d0abd3e7831300fc596a8c39d9b48a989e814f17'});

routes.post('/api/v1/address/create', (req, res) => {
  const wallets = bitgo.wallets();
  wallets.list({}, (err, response) => {
    const id = _.first(response.wallets).wallet.id;
    bitgo.wallets().get({ "id": id }, (err, wallet) => {
      if (err) {
        throw err;
      }
      wallet.createAddress({ "chain": 0 }, (err, address) => {
        res.status(200).json(address);
      });
    });
  });
});

module.exports = routes;