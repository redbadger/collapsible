Component Collapsible
===========

Simple Bootstrap-like collapsible component for your DOM elements.

##Usage

* Tag the collapsible toggle switch with .collapse-toggle and data-collapse attribute equal to the collapsible target selector
* Require collapsible in your component or script
* Call collapsible with two arguments - root selector and class name to be applied on the toggle when target is collapsed

##Example

JADE:

```jade
div.my-section
  div.title.collapse-toggle(data-collapse="#collapse-container") Clickable title
  div#filters-container
    p Content to be collapsed
```
LiveScript:

```livescript
collapsible = require 'collapsible'
collapsible '.my-section', 'collapsed'
```

Collapsible will parse all elements under `.my-section` root element and apply collapsing functionality to all `.collapse-toggle` child elements.
