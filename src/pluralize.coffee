window.PluralizeJS = null  if window and not window.PluralizeJS
PluralizeJS =
  uncountable_words: [ "equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news" ]
  plural_rules: [ [ new RegExp("(m)an$", "gi"), "$1en" ], [ new RegExp("(pe)rson$", "gi"), "$1ople" ], [ new RegExp("(child)$", "gi"), "$1ren" ], [ new RegExp("^(ox)$", "gi"), "$1en" ], [ new RegExp("(ax|test)is$", "gi"), "$1es" ], [ new RegExp("(octop|vir)us$", "gi"), "$1i" ], [ new RegExp("(alias|status)$", "gi"), "$1es" ], [ new RegExp("(bu)s$", "gi"), "$1ses" ], [ new RegExp("(buffal|tomat|potat)o$", "gi"), "$1oes" ], [ new RegExp("([ti])um$", "gi"), "$1a" ], [ new RegExp("sis$", "gi"), "ses" ], [ new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves" ], [ new RegExp("(hive)$", "gi"), "$1s" ], [ new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies" ], [ new RegExp("(x|ch|ss|sh)$", "gi"), "$1es" ], [ new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices" ], [ new RegExp("([m|l])ouse$", "gi"), "$1ice" ], [ new RegExp("(quiz)$", "gi"), "$1zes" ], [ new RegExp("s$", "gi"), "s" ], [ new RegExp("$", "gi"), "s" ] ]
  apply_rules: (str) -> 
    unless str in @uncountable_words 
      for rule in @plural_rules
        if str.match(rule[0])
          str = str.replace(rule[0], rule[1])
          break
    str

unless String::pluralize
  String::pluralize = (plural) ->
    PluralizeJS.apply_rules this