require! 'dom'
require! 'event'

hasClass = (ele, cls) ->
  ele.className.match new RegExp '(\\s|^)'+cls+'(\\s|$)'

addClass = (ele, cls) ->
  ele.className += ' ' + cls

removeClass = (ele, cls) ->
  if hasClass(ele,cls)
      reg = new RegExp '(\\s|^)'+cls+'(\\s|$)'
      ele.className = ele.className.replace reg, ' '


module.exports = (target, klass = 'collapsed') ->
  d = dom target

  collapse = d.find '.collapse-toggle'
  for el in collapse
    event.bind el, "click", (e) ->
      e.prevent-default
      collapsible = d.find e.target.get-attribute "data-collapse"
      if collapsible.0
        if hasClass collapsible.0, klass
          removeClass collapsible.0, klass
        else
          addClass collapsible.0, klass
