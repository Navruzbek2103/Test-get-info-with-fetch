let $ = function(selector){
  return document.querySelector(selector)
}

let $$ = function (selector){
  return document.querySelectorAll(selector);
}

let createElement = function(tagName, className, content){
  let newItem = document.createElement(tagName);
  if(className){
    newItem.setAttribute("class", className);
  }
  if(content){
    newItem.innerHTML = content
  }
  return newItem;
}