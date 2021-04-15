/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
    config.toolbarGroups = [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'paragraph', groups: [ 'list', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },

    ];
    config.removeButtons = 'Print,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,About';
};
