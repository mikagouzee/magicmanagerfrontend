function bgqKeyValueParserFactory(r) { function a(a, e) { var u = []; for (var y in e) { var o = {}, t = r(e[y].key); for (var n in e[y]) "key" === n ? o.value = t(a) : o[n] = e[y][n]; u.push(o) } return u } var e = {}; return e.parse = a, e } angular.module("bgq.keyValueParser.factory", []).factory("bgqKeyValueParserFactory", bgqKeyValueParserFactory), bgqKeyValueParserFactory.$inject = ["$parse"];
//https://github.com/belgac/key-value-parser-factory/blob/master/README.md
//# sourceMappingURL=keyValueParser.factory.min.js.map
