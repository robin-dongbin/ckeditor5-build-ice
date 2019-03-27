/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import HighLight from '@ckeditor/ckeditor5-highlight/src/highlight';

import IceUpload from 'ckeditor5-ice-upload/src/iceUpload';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji';

export default class IceEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
IceEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	HighLight,
	IceUpload,
	Emoji
];

// Editor configuration.
IceEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'highlight',
			'blockQuote',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'emoji',
			'link',
			'imageUpload',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo'
		]
	},
	emoji: [
		{ name: '1', text: '😀' },
		{ name: '2', text: '😁' },
		{ name: '3', text: '😂' },
		{ name: '4', text: '🤣' },
		{ name: '5', text: '😃' },
		{ name: '6', text: '😄' },
		{ name: '7', text: '😅' },
		{ name: '8', text: '😆' },
		{ name: '9', text: '😉' },
		{ name: '10', text: '😊' },
		{ name: '11', text: '😋' },
		{ name: '12', text: '😎' },
		{ name: '13', text: '😍' },
		{ name: '14', text: '😘' },
		{ name: '15', text: '🥰' },
		{ name: '16', text: '😗' },
		{ name: '17', text: '😙' },
		{ name: '18', text: '😚' },
		{ name: '19', text: '🙂' },
		{ name: '20', text: '🤗' },
		{ name: '21', text: '🤩' },
		{ name: '22', text: '🤨' },
		{ name: '23', text: '😐' },
		{ name: '24', text: '😑' },
		{ name: '25', text: '😶' },
		{ name: '26', text: '🙄' },
		{ name: '27', text: '😏' },
		{ name: '28', text: '😣' },
		{ name: '29', text: '😥' },
		{ name: '30', text: '😮' },
		{ name: '31', text: '🤐' },
		{ name: '32', text: '😯' },
		{ name: '33', text: '😪' },
		{ name: '34', text: '😫' },
		{ name: '35', text: '😴' },
		{ name: '36', text: '😌' },
		{ name: '37', text: '😛' },
		{ name: '38', text: '😜' },
		{ name: '39', text: '😝' },
		{ name: '40', text: '🤤' },
		{ name: '41', text: '😒' },
		{ name: '42', text: '😓' },
		{ name: '43', text: '😔' },
		{ name: '44', text: '😕' },
		{ name: '45', text: '🙃' },
		{ name: '46', text: '🤑' },
		{ name: '47', text: '😲' },
		{ name: '49', text: '🙁' },
		{ name: '50', text: '😖' },
		{ name: '51', text: '😞' },
		{ name: '52', text: '😟' },
		{ name: '53', text: '😤' },
		{ name: '54', text: '😢' },
		{ name: '55', text: '😭' },
		{ name: '56', text: '😦' },
		{ name: '57', text: '😧' },
		{ name: '58', text: '😨' },
		{ name: '59', text: '😩' },
		{ name: '60', text: '🤯' },
		{ name: '61', text: '😬' },
		{ name: '62', text: '😰' },
		{ name: '63', text: '😱' },
		{ name: '64', text: '🥵' },
		{ name: '65', text: '🥶' },
		{ name: '66', text: '😳' },
		{ name: '67', text: '🤪' },
		{ name: '68', text: '😵' },
		{ name: '69', text: '😡' },
		{ name: '70', text: '😠' },
		{ name: '71', text: '🤬' },
		{ name: '72', text: '😷' },
		{ name: '73', text: '🤒' },
		{ name: '74', text: '🤕' },
		{ name: '75', text: '🤢' },
		{ name: '76', text: '🤮' },
		{ name: '77', text: '🤧' },
		{ name: '78', text: '😇' },
	],
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn'
};
