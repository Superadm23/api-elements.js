const State = require('./state.js');

class Context {
  constructor(namespace, options) {
    this.namespace = namespace;
    this.options = options || {};

    if (this.options.generateSourceMap === undefined) {
      this.options.generateSourceMap = false;
    }

    if (this.options.generateMessageBody === undefined) {
      this.options.generateMessageBody = true;
    }

    this.state = new State();
  }

  registerId(id) {
    return this.state.registerId(id);
  }
}

module.exports = Context;
