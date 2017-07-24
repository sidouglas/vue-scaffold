module.exports = {
  kebabCase : function (string) {
      return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  pascalCase : function (str) {
      return str.replace(/\b([a-z])/g, function (_, initial) {
        return initial.toUpperCase();
    });
  }
}