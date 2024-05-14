var utils = window.optimizely.get('utils');

utils.waitForElement('body').then(function(element){
  var html = widget.$html;
	element.insertAdjacentHTML('afterbegin',html);
});
