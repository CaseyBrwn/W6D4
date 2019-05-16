class DOMNodeCollection {
    constructor(nodes){
    this.nodes = nodes;
    }

    html(string) {
        if (string === undefined) {
            return this.nodes[0].innerHTML;
        } else {
            this.nodes.forEach((node) => node.innerHTML = string);
        }
    }

    empty(){
        this.html("");
    }

    append(obj){
        if (typeof obj === 'string') {
        this.nodes.forEach((node) => node.innerHTML += obj);
        } else if (obj instanceof DOMNodeCollection) {
            let n = " ";
            obj.nodes.forEach(objnode => {
                n += objnode.outerHTML;
            });
            this.nodes.forEach( node => {
              node.innerHTML += n;
            }); 
        } else if (obj instanceof HTMLElement) {
            this.nodes.forEach(node => {
                node.innerHTML += obj.outerHTML;
            });
        }
    }

    attr (string) {
        this.nodes[0][string];
    }

    addClass (string){
        this.nodes.forEach( node => {
            node.setAttribute("class", string);
        });
    }

    removeClass (string) {
        this.nodes.forEach(node => {
            node.removeAttribute(string);
        });
    }

    children() {
        let children = [];
        this.nodes.forEach( node => {
            let child = node.innerHTML;
            children.push(new DOMNodeCollection(child));
        });
        return children;
    }

    parent() {
        return this.nodes[0].parentElement;
    }

    find(selectors){
        return new DOMNodeCollection(this.querySelectorAll(selectors));
    }


}


module.exports = DOMNodeCollection;