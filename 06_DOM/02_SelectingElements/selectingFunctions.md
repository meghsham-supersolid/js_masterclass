To select a specific element or group element we can access the DOM using JS functions

1.  Selecting element

    1. `document.getElementById('elements-ID')` : selects element with given ID, if duplicated ID found the select first found one and using dot operator after function we can access other properties of element like id,className, style etc
       1. `document.getElementById("heading-text");`
       2. `document.getElementById("heading-text").id;`
       3. `document.getElementById("heading-text").style;`
       4. `document.getElementById("heading-text").className;`
          like with we can select element
    2. `document.getElementsByClassName(className)`: Gets all elements with the given class name (returns HTMLCollection).

    3. `document.getElementsByTagName(tagName)`: Gets all elements with the given tag name (e.g., div, p, etc).
    4. `document.getElementsByName(name)`: Gets all elements with a specific name attribute (used in forms).
    5. `document.getRootNode()` : Gets the root node (usually #document for the whole DOM tree).

2.  Getting attributes

    1. `selector().getAttribute('attribute-name')` : selects element with given ID, if duplicated ID found the select first found one.

3.  Setting attributes

    1.  `selector().propertyName.subPropertyName = value` : selects element with given ID, and replace its old value with new value
    2.  `selector().setAttribute('attribute-name','new-value')` : selects element with given ID, and replace its old value with new value

4.  Grabbing contents
    1. `selector().innerHTML()` : return all the html with along with hidden elements also
    2. `selector().innerText()` : returns you all visible text
    3. `selector().textContent()`: returns you all text that visible and hidden.
5.  Query Selector

    1. document.querySelector(selector) Returns the first matching element for a CSS selector.
    2. document.querySelectorAll(selector) Returns all matching elements as a NodeList (can loop over).

    - Using query selectors we can pass aby css selectors to get the element
      | Selector Example | Meaning / Use Case | Example Code |
      | ------------------------ | -------------------------------------------- | --------------------------------------------- |
      | `'#id'` | Select element with specific **ID** | `document.querySelector('#main')` |
      | `'.class'` | Select **first** element with this **class** | `document.querySelector('.btn')` |
      | `'tag'` | Select first element of **tag name** | `document.querySelector('div')` |
      | `'tag.class'` | Select first `tag` with a specific class | `document.querySelector('button.primary')` |
      | `'tag#id'` | Select tag with specific ID | `document.querySelector('input#email')` |
      | `'[attribute]'` | Select element with an attribute | `document.querySelector('[disabled]')` |
      | `'[attr="value"]'` | Attribute equals value | `document.querySelector('[type="checkbox"]')` |
      | `'parent > child'` | Direct child selector | `document.querySelector('ul > li')` |
      | `'ancestor descendant'` | Descendant selector | `document.querySelector('.form input')` |
      | `'element:first-child'` | Pseudo-class: first child | `document.querySelector('li:first-child')` |
      | `'element:last-child'` | Pseudo-class: last child | `document.querySelector('li:last-child')` |
      | `'element:nth-child(n)'` | Nth child selector | `document.querySelector('li:nth-child(2)')` |

# Array vs HTMLCollection vs NodeList

| Feature                                           | **Array**                            | **HTMLCollection**                                      | **NodeList**                                      |
| ------------------------------------------------- | ------------------------------------ | ------------------------------------------------------- | ------------------------------------------------- |
| **Type**                                          | Standard JS array                    | Array-like DOM collection                               | Array-like DOM collection                         |
| **Source**                                        | Created manually or by array methods | Returned by DOM methods (e.g. `getElementsByClassName`) | Returned by DOM methods (e.g. `querySelectorAll`) |
| **Live?**                                         | ❌ No (static)                       | ✅ Yes (live – updates with DOM changes)                | ❌ No (static – snapshot at the time)             |
| **Can use `.forEach()`**                          | ✅ Yes                               | ❌ No (needs conversion)                                | ✅ Yes                                            |
| **Can use array methods (`map`, `filter`, etc.)** | ✅ Yes                               | ❌ No (convert first)                                   | ❌ No (convert first)                             |
| **Indexable (`[0]`)**                             | ✅ Yes                               | ✅ Yes                                                  | ✅ Yes                                            |
| **Length property**                               | ✅ Yes (`array.length`)              | ✅ Yes                                                  | ✅ Yes                                            |
