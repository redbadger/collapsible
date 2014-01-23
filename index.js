// Compiled from Livescript version

var dom, event, hasClass, addClass, removeClass;

dom = require('dom');
event = require('event');

hasClass = function(ele, cls){
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

addClass = function(ele, cls){
  return ele.className += ' ' + cls;
};

removeClass = function(ele, cls){
  var reg;
  if (hasClass(ele, cls)) {
    reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    return ele.className = ele.className.replace(reg, ' ');
  }
};

module.exports = function(target, klass) {
  var d, collapse, i$, len$, el, results$ = [];

  klass == null && (klass = '');
  d = dom(target);

  collapse = d.find('.collapse-toggle');

  for (i$ = 0, len$ = collapse.length; i$ < len$; ++i$) {
    el = collapse[i$];
    results$.push(event.bind(el, "click", fn$));
  }
  return results$;

  function fn$(e){
    var collapsible;
    e.preventDefault;
    collapsible = d.find(e.target.getAttribute("data-collapse"));
    if (collapsible[0]) {
      if (collapsible[0].style.display === 'block') {
        collapsible[0].style.display = 'none';
        return addClass(e.target, klass);
      } else {
        collapsible[0].style.display = 'block';
        return removeClass(e.target, klass);
      }
    }
  }
};
