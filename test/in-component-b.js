var config = require('config');
var diacritics = require('diacritics');

module.exports = {
  'should support unicode urls': function(client) {
    console.log('Component B using config', config);
    client
      .url('https://' + config.componentB.wikipedia.locale + '.m.wikipedia.org/wiki/' + config.componentB.wikipedia.article)
      .assert.urlEquals('https://ka.m.wikipedia.org/wiki/%E1%83%93%E1%83%94%E1%83%93%E1%83%90_%E1%83%94%E1%83%9C%E1%83%90')
      .end();
  },

  'should be able to use its own node_modules': function(client) {
    var topic = diacritics.remove("Iлｔèｒｎåｔïｏｎɑｌíƶａｔïoԉ");

    client
      .url('https://en.m.wikipedia.org/wiki/' + topic)
      .assert.urlEquals('https://en.m.wikipedia.org/wiki/Internationalization')
      .end();
  }
};
