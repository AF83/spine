(function() {
  var PluralizeJS;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  if (window && !window.PluralizeJS) {
    window.PluralizeJS = null;
  }
  PluralizeJS = {
    uncountable_words: ["equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news"],
    plural_rules: [[new RegExp("(m)an$", "gi"), "$1en"], [new RegExp("(pe)rson$", "gi"), "$1ople"], [new RegExp("(child)$", "gi"), "$1ren"], [new RegExp("^(ox)$", "gi"), "$1en"], [new RegExp("(ax|test)is$", "gi"), "$1es"], [new RegExp("(octop|vir)us$", "gi"), "$1i"], [new RegExp("(alias|status)$", "gi"), "$1es"], [new RegExp("(bu)s$", "gi"), "$1ses"], [new RegExp("(buffal|tomat|potat)o$", "gi"), "$1oes"], [new RegExp("([ti])um$", "gi"), "$1a"], [new RegExp("sis$", "gi"), "ses"], [new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves"], [new RegExp("(hive)$", "gi"), "$1s"], [new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies"], [new RegExp("(x|ch|ss|sh)$", "gi"), "$1es"], [new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices"], [new RegExp("([m|l])ouse$", "gi"), "$1ice"], [new RegExp("(quiz)$", "gi"), "$1zes"], [new RegExp("s$", "gi"), "s"], [new RegExp("$", "gi"), "s"]],
    apply_rules: function(str) {
      var rule, _i, _len, _ref;
      if (__indexOf.call(this.uncountable_words, str) < 0) {
        _ref = this.plural_rules;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rule = _ref[_i];
          if (str.match(rule[0])) {
            str = str.replace(rule[0], rule[1]);
            break;
          }
        }
      }
      return str;
    }
  };
  if (!String.prototype.pluralize) {
    String.prototype.pluralize = function(plural) {
      return PluralizeJS.apply_rules(this);
    };
  }
}).call(this);
