var config = require('config');

module.exports = {
  'should support unicode urls': function(client) {
    console.log('using config', config);
    client
      .url('https://' + config.wikipedia.locale + '.m.wikipedia.org/wiki/' + config.wikipedia.article)
      .assert.urlEquals('https://ka.m.wikipedia.org/wiki/%E1%83%93%E1%83%94%E1%83%93%E1%83%90_%E1%83%94%E1%83%9C%E1%83%90')
      .end();
  }
};
