Component Collapsible
===========

Simple Bootstrap-like collapsible component for your DOM elements.

##Usage

* Tag the collapsible title with .collapse-toggle and data-collapse attribute equal to the collapsible selector
* Require collapsible in your component or script
* Call collapsible with two arguments - root selector and class name to be applied on the title when content is collapsed

##Example

JADE:

    div.my-section
      div.title.collapse-toggle(data-collapse="#collapse-container") Clickable title
      div#filters-container
        p Content to be collapsed

LiveScript:

    collapsible = require 'collapsible'
    collapsible '.my-section', 'collapsed'

Collapsible will parse all elements under `.my-section` root element and apply collapsing functionality to all `.collapse-toggle` elements.