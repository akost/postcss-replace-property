var postcss = require('postcss');
var _ = require('underscore');
 
module.exports = postcss.plugin('postCssReplaceProperty', function postCssReplaceProperty(options) {
 
	return function (css) {
		var opts;

		var defaults = {
			selector : "",
			property : "",
			value    : "",
			replacement : ""
		};

		options = options || {};

		opts = _.extend(defaults, options);
		
		// Processing code will be added here
		css.walkRules(opts.selector, function (rule) {
		
			rule.walkDecls(opts.property, function (decl, i) {
				var value = decl.value;
				// height: 1em;
				if (value.indexOf( opts.value ) !== -1) {
					if(opts.replacement) {
						decl.value = opts.replacement;
					} else {
						decl.remove();
					}
				}
			});
		});
	}
});
