# NodeLIst
- collection of nodes in DOM

- node can a element, text or comment

- NodeList is often return by method like 
    - `document.querySelectoryAll('Css-Selector')`
    -  `element.childNodes`

- NodeList can be categoirzed in
    - Live NodeList : When updated its change are reflected into DOM and result can be seen on webpage
    - Static NodeList : A snapshot of nodes at the time the query was made, not updated (e.g., querySelectorAll()).

- It looks like array but quite different form array, so most of array method won't work. To do that it can be coverted to an array.

- Using intdex notation `nodeList [index]` we can access or modify nodes

- `For..of` loor ir `.forEach()`is used to iterate over a NodeList

- To covert a NodeList to an array we can used `Array.from(nodeList)`

- Creating NodeList 

    ```javascript
        
    ```

# HTMLCollection

- HTMLCollection is a collection of only HTML elements, its another array-like structure returned by certain DOM methods but not array.

- HTMLCollections are returned by methods like:
    - `document.getElementsByTagName()`
    - `document.getElementsByClassName()`
    - `element.children`

- HTMLCollections are almost always live, meaning they update automatically when the DOM changes.

- it’s not a true array but has a .length property and indexed access (e.g., collection[0]) also its don’t have a built-in .forEach() method. You can access elements by their id or name attributes (if defined) like an object.

- To use array methods, convert it to an array `Array.from(htmlCollection)` is used.

## When to Use Which

- Use querySelectorAll (NodeList) for modern, flexible CSS selector-based queries.

- Use getElementsByTagName or getElementsByClassName (HTMLCollection) for simpler, tag- or class-based queries.

- Use element.children (HTMLCollection) when you only want child elements, or element.childNodes (NodeList) when you need all nodes (including text/comments).


