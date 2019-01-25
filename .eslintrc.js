module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['plugin:react/recommended', 'liferay', 'prettier'],
	plugins: ['babel', 'no-for-of-loops'],
	rules: {
		'require-jsdoc': 'warn',
		'new-cap': [
			'error',
			{
				capIsNewExceptions: [
					'ButtonActionStyle',
					'ButtonCfgProps',
					'ButtonCommand',
					'ButtonCommandActive',
					'ButtonKeystroke',
					'ButtonProps',
					'ButtonStateClasses',
					'ButtonStyle',
					'ToolbarButtons',
					'WidgetArrowBox',
					'WidgetDropdown',
					'WidgetExclusive',
					'WidgetFocusManager',
					'WidgetPosition',
				],
				newIsCapExceptions: [
					'CKEDITOR.command',
					'CKEDITOR.dom.comment',
					'CKEDITOR.dom.documentFragment',
					'CKEDITOR.dom.element',
					'CKEDITOR.dom.elementPath',
					'CKEDITOR.dom.event',
					'CKEDITOR.dom.node',
					'CKEDITOR.dom.nodeList',
					'CKEDITOR.dom.range',
					'CKEDITOR.dom.rangeList',
					'CKEDITOR.dom.selection',
					'CKEDITOR.dom.text',
					'CKEDITOR.dom.walker',
					'CKEDITOR.dom.window',
					'CKEDITOR.htmlParser.basicWriter',
					'CKEDITOR.htmlParser.element',
					'CKEDITOR.htmlParser.filter',
					'CKEDITOR.htmlParser.fragment.fromHtml',
					'CKEDITOR.style',
					'CKEDITOR.template',
				],
			},
		],
		'babel/no-invalid-this': 'error',
		'no-invalid-this': 'off',
		'no-for-of-loops/no-for-of-loops': 'error',
		'react/prop-types': 'warn',
		'valid-jsdoc': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		AlloyEditor: true,
		CKEDITOR: true,
	},
};
