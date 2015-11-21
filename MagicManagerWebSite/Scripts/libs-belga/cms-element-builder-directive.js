﻿function cmsElementBuilder(e) { var l = { restrict: "E", scope: { elements: "=", viewextension: "=" }, controller: "cmsElementBuilderController", controllerAs: "cmsElementBuilder", bindToController: !0, template: e.get("cms-element-builder.view.html") }; return l } function cmsElementBuilderController() { var e = this; e.getViewUrl = function (l) { return l + (e.viewextension || ".html") } } angular.module("cmselementBuilder.directive", ["cmsElementBuilder.controller", "cmsElementBuilder.template"]).directive("cmselementbuilder", cmsElementBuilder), cmsElementBuilder.$inject = ["$templateCache"], angular.module("cmsElementBuilder.controller", []).controller("cmsElementBuilderController", cmsElementBuilderController), angular.module("cmsElementBuilder.template", []).run(["$templateCache", function (e) { e.put("cms-element-builder.view.html", '<div ng-repeat="element in cmsElementBuilder.elements  | orderBy : \'order\'" ng-class="element.parentClass" ng-include="cmsElementBuilder.getViewUrl(element.type)"></div>'), e.put("cms-subelement-builder.view.html", '<cmselementbuilder elements="element.subElements" viewextension="element.viewExtension"></cmselementbuilder>') }]);
//https://github.com/belgac/cms-element-builder-directive/blob/master/README.md
//# sourceMappingURL=cms-element-builder-directive.min.js.map
