Component Collapsible
===========

Simple Bootstrap-like collapsible component for your DOM elements.

## How to install

This is a component component. You can easily plug it into your site or web app. Check the example of usage in test/index.html. To get things working, follow these easy steps (assuming you already have Node.js and npm installed):

* `npm install -g component`
* Clone this repository and navigate into the component folder
* Run `component install` to fetch dependencies
* Run `component build`
* Now you can open test/index.html and if everything is fine you should be able to see the component in action

If your app already uses components, you can simply run `component install redbadger/datepicker` - this will fetch and install all dependencies into /components folder of your project.

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
