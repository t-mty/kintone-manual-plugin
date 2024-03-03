jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.detail.show'], function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    const space = document.querySelector('#record-gaia');
    const leftSpace = document.querySelector('.layout-gaia');
    var width  = leftSpace.offsetWidth;
    const rightSpace = document.createElement('div');
    rightSpace.id = 'right-space';
    rightSpace.style.width = '-webkit-calc(95% - ' + width + 'px)';
    
    const textarea = document.createElement('div');
    textarea.innerHTML = marked.parse(config.text);
    textarea.classList.add('markdown-body');
    // const textBox = document.createElement('textarea');
    // textarea.id = 'markdown';
    // document.getElementById('markdown').innerHTML = marked.parse(markdown);
    
    rightSpace.appendChild(textarea);
    space.appendChild(rightSpace);

  });
})(jQuery, kintone.$PLUGIN_ID);
