define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["RECIPEDETAILS"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div style="position: relative;">\n\t<img class="recipeImage" src=\'' +
((__t = ( images[0].hostedLargeUrl )) == null ? '' : __t) +
'\' style="width: 100%" />\n\t<div class="data">\n\t\t<h3 style="padding: 5px 10px;">' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n\t\t<div style="padding: 0 0 10px 10px;" data-use="rating"></div>\n\t</div>\n</div>\n<div class="details-content">\t\n\t<ul data-role="listview" class="ingredients">\n\t\t<li data-role="list-divider" data-theme="c">\n\t\t\t<strong>Info</strong>\n\t\t\t<span class="ui-li-count">\n\t\t\t\tServing/s: <strong>' +
((__t = ( numberOfServings )) == null ? '' : __t) +
'</strong>\n\t\t\t\t';
 if (totalTimeInSeconds) { ;
__p += '\n\t\t\t\t\t- Cooking time: <strong>' +
((__t = ( totalTimeInSeconds / 60 )) == null ? '' : __t) +
'\'</strong>\n\t\t\t\t';
 } ;
__p += '\t\n\t\t\t</span>\n\t\t</li>\t\t\n\t\t<li>\n\t\t\t<a href=\'' +
((__t = ( source.sourceSiteUrl )) == null ? '' : __t) +
'\'>Recipe by <strong>' +
((__t = ( source.sourceDisplayName )) == null ? '' : __t) +
'</strong></a>\n\t\t</li>\t\t\t\n\t\t<li data-role="list-divider" data-theme="c">\n\t\t\t<strong>Ingredients</strong>\n\t\t</li>\n\t\t';
 _.each(ingredientLines, function(ingredient) { ;
__p += '\n\t    <li class="ingredient">\n\t        ' +
((__t = ( ingredient )) == null ? '' : __t) +
'\n\t    </li>\n\t\t';
 }); ;
__p += '\n\t\t<li data-role="list-divider" data-theme="c">\n\t\t\t<strong>Nutritional estimates</strong>\n\t\t</li>\t\t\n\t\t';
 _.each(nutritionEstimates, function(nutrition) { ;
__p += '\n\t    <li>\n\t        <strong>' +
((__t = ( nutrition.description )) == null ? '' : __t) +
'</strong>: ' +
((__t = ( nutrition.value )) == null ? '' : __t) +
'' +
((__t = ( nutrition.unit.abbreviation )) == null ? '' : __t) +
'\n\t    </li>\n\t\t';
 }); ;
__p += '\t\t\n\t\t<li data-role="list-divider" data-theme="c">\n\t\t\t<strong>Cooking instructions (from "' +
((__t = ( source.sourceDisplayName )) == null ? '' : __t) +
'") </strong>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\'' +
((__t = ( source.sourceRecipeUrl )) == null ? '' : __t) +
'\'><strong>Read all the instructions</strong></a>\n\t\t</li>\n\t</ul>\t\n</div>\n\n';

}
return __p
};

this["JST"]["RECIPELISTITEM"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a>\n\t<div style="position: relative; padding: 0;">\n\t\t<img class="recipeImage" src=\'' +
((__t = ( imageUrlsBySize[90] )) == null ? '' : __t) +
'\'/>\n\t\t<div class="data">\n\t\t\t<div style="padding: 10px;">\n\t\t\t\t<h4>' +
((__t = ( recipeName )) == null ? '' : __t) +
'</h4>\n\t\t\t\t<div data-use="rating"></div>\n\t\t\t\t<span style="position: absolute; right: 10px; bottom: 10px;">\n\t\t\t\t';
 if (totalTimeInSeconds) { ;
__p += '\n\t\t\t\t  ' +
((__t = ( totalTimeInSeconds / 60 )) == null ? '' : __t) +
'\'\n\t\t\t\t';
 } ;
__p += '\t\t\t\t\t\n\t\t\t\t</span>\n\t\t\t</div>\t\t\t\n\t\t</div>\t\t\t\t\n\t</div>\t\n\t\n</a>\t\n\n';

}
return __p
};

this["JST"]["FOOTER"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="search" name="search" id="search" value="" placeholder="Find a recipe..." />\n';

}
return __p
};

this["JST"]["HEADER"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#" class="home" data-role="button" data-icon="home" data-iconpos="notext" data-theme="c" data-inline="true">Home</a>\n<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n';

}
return __p
};

this["JST"]["HOMEHEADER"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n';

}
return __p
};

this["JST"]["JQMPAGE"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">\n</div><!-- /header -->\n\n<div data-role="content">\n</div><!-- /content -->\n\n<div data-role="footer" data-theme="c"  data-position="fixed" data-tap-toggle="false">\n</div><!-- /footer -->\n';

}
return __p
};

this["JST"]["PAGINATIONBUTTONS"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<fieldset class="ui-grid-a">\r\n    <div class="ui-block-a"><a href="#' +
((__t = ( prevPageUrl )) == null ? '' : __t) +
'" data-role="button">Prev</a></div>\r\n    <div class="ui-block-b"><a href="#' +
((__t = ( nextPageUrl )) == null ? '' : __t) +
'" data-role="button">Next</a></div>\r\n</fieldset>';

}
return __p
};

  return this["JST"];

});