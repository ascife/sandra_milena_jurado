class Index{
    static createElement = (element, className, innerHTML, x, y)=>{
        element = document.createElement(element);
        if(className) element.className = className;
        if(innerHTML) element.innerHTML = innerHTML;
        if(x) element.style.left = x + 'px';
        if(y) element.style.top = y + 'px';
        return element;
    }
    
    static childrenWithIdOf = (parent)=>{
        let children = {};
        parent.querySelectorAll('*[id]').forEach(child=>{
            children[child.getAttribute('id')] = child;
        })
        return children;
    }

    static toggle = (object)=>{
        let keys = Object.keys(object);
        let length = keys.length;
        let i = 0;

        return (e)=>{
            let method = object[keys[i]];
            if(typeof method === "function")
                method(e);

            i += 1;
            if(i === length)
                i = 0;
        }
    }
}