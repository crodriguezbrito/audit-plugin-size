/**
 * Set webpack's public path that defaults to the root directory to be the plugin's build directory
 * so that lazy-loading works correctly. This value is set in /includes/Data.php in runtime().
 */
export default () => {
	if (
		'undefined' !== typeof window.NewfoldRuntime &&
		'plugin' in window.NewfoldRuntime
	) {
		// eslint-disable-next-line camelcase, no-undef
		__webpack_public_path__ = window.NewfoldRuntime.plugin.url;
	}
};
