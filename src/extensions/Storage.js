Storage.prototype.tryGetJsonItem = function(keyName) {
  try {
    return JSON.parse(this.getItem(keyName));
  }
  catch(err) {
    if(err.name === 'SyntaxError') {
      return null;
    } else {
      throw err;
    }
  }
};

Storage.prototype.setJsonItem = function(keyName, keyItem) {
  return this.setItem(keyName, JSON.stringify(keyItem));
};
