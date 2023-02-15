function getVnode(selector, attributes, text, children, element){
    return {
        selector,
        attributes,
        text,
        children,
        element
    }
}

function h(selector, attributes, content){
    if(Object.prototype.toString.call(content) == "[object String]"){
        return getVnode(selector, attributes, content, undefined, undefined);
    }else if(Object.prototype.toString.call(content) == "[object Object]"){
        return getVnode(selector, attributes, undefined, [content], undefined);
    }else if(Object.prototype.toString.call(content) == "[object Array]"){
        return getVnode(selector, attributes, undefined, content, undefined);
    }else{
        return getVnode(selector, attributes, undefined, undefined, undefined);
    }
}

function patch(oldVnode, newVnode){
    if(oldVnode.selector == undefined){
        oldVnode = getVnode(oldVnode.tagName.toLowerCase(), {}, undefined, [], oldVnode);
    }

    if(isSameNode(oldVnode, newVnode)){
        patchNode(oldVnode, newVnode);
    }else{
        oldVnode.element.parentNode.insertBefore(createElement(newVnode), oldVnode.element);
        oldVnode.element.parentNode.removeChild(oldVnode.element);
    }
}

function patchNode(oldVnode, newVnode){
    if(oldVnode.text == undefined && newVnode.text){
        oldVnode.text = newVnode.text;
    }

    if(oldVnode.children.length == 0 && newVnode.children.length){
        oldVnode.element.parentNode.insertBefore(createElement(newVnode), oldVnode.element);
        oldVnode.element.parentNode.removeChild(oldVnode.element);
    }
}

function createElement(vnode){
    let element = document.createElement(vnode.selector);

    if(vnode.attributes){
        Object.keys(vnode.attributes).forEach(key => {

            if(isListener(key)){
                element.addEventListener(key.slice(2).toLowerCase(), vnode.attributes[key], undefined, true);
            }else{
                element[key] = vnode.attributes[key];
            }
        });
    }

    if(vnode.text){
        element.innerHTML = vnode.text;
    }

    if(vnode.children){
        vnode.children.forEach(child => {
            element.appendChild(createElement(child));
        });
    }

    return element;
}

function isListener(param){
    return param.slice(0, 2) == "on";
}


function isSameNode(node1, node2){
    let sameSelector = node1.selector == node2.selector;
    let sameKey = node1.attributes.key == node2.attributes.key;
    return sameSelector && sameKey;
}