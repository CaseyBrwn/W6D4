const DOMNodeCollection = require("./dom_node_collection.js");


window.$l = function (selectors) {

    if (typeof selectors === 'string'){
        const elementList = document.querySelectorAll(selectors);
        return new DOMNodeCollection(elementList);

    } else if (selectors instanceof HTMLElement) {
        return new DOMNodeCollection([selectors]);
    }
    
    
};


