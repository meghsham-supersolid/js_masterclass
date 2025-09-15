# Events

- Although JavaScript is a sequentially run language and most of the event are asynchronously means they run parallax with stopping current execution,

- Events are used interaction with the element like clicking on the element or hovering mouse pointer on the element, or interaction with input with key pressed down or key released

- Adding evenest

  1. Approach 1 :
     Below is simplest approach, but is not preferred as it is bad coding standards

  ```javascript
  <li>
      <img
      src="https://images.pexels.com/photos/32907356/pexels-photo-32907356.jpeg"
      alt="flowers"
      id="flowers"
      class="images"
      width="200px;"
      onclick="alert('flowers image clicked')"
      />
  </li>
  <!-- can flood html with with js code in vanilla web projects -->
  ```

  2.  Approach 2 :
      With this approach, we can use JavaScript code and attach the event using js script

      ```javascript
      const peacockImage = document.querySelector("#peacock");
      peacockImage.onclick = function () {
        alert("peacock image clicked");
      };
      <!-- with this approach we do not get any additional info of event -->
      ```

  3.  Approach 3:

  - In this Approach, we add event listener on the element which listen to all the element-event happing and

    ```javascript
    const cakesImage = document.querySelector("#cakes");

    cakesImage.addEventListener("mouseover", function () {
      alert("mouse entered cake image");
    });

    // Here we can used arrow function if code is just one liner

    // We can only specify one event in  addEventListener(), but add multiple event either we have to write repeated .addEventListener("eventName") or we can use bellow
    ["mouseover", "click"].forEach((eventName) => {
      cakes.addEventListener(eventName, (e) => {
        console.log(`${eventName} fired`, e);
      });
    });
    ```

  4.  Approach 4:
      `attachEvents()`

  5.  Approach 5:
      `jQuery` [old approach, uses .on() ]

### Event Object

- When we do addEventListener() by default in function a event object is inserted in parameter.

- Event object
  Great question 👌

When you use `addEventListener()`, the browser automatically passes an `event` object to your function.

### In short, the `event` object holds:

1. Basic info

   - `type` → what event happened (`"click"`, `"mouseover"`, etc.)
   - `target` → the element that triggered the event (e.g. `<button>`).
   - `currentTarget` → the element the listener is attached to.

2. Position info (for mouse/touch events)

   - `clientX`, `clientY` → mouse position inside the browser window.
   - `pageX`, `pageY` → mouse position on the full page.

3. Keyboard info (for keyboard events)

   - `key` → which key was pressed (e.g. `"a"`, `"Enter"`).
   - `code` → physical key on the keyboard.

4. Controls / helpers

   - `preventDefault()` → stop the default action (e.g., stop a link from opening).
   - `stopPropagation()` → stop the event from bubbling up to parent elements.

And many more...

```js
document.querySelector("#btn").addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // <button id="btn">
  console.log(event.clientX); // X position of click
});
```

We can add more functionality to app using this information [typeOfEvent, timestamp of event, defaultPrevented, target, toElement, scrElement, currentTarget, clintX, clintY,screenX, screenY, tiltX, tiltY, altKey, CtrlKey, and keyPressed with keyCodes]

MINI-Project suggested : keyboard check, typing speed checker

### Event Bubbling and Event Propagation

- Internally takes addEventListener takes 3 parameter
  ```javascript
  target.addEventListener(eventType, listener, options);
  ```

`option` param can a `boolean` value or javascript `object`

1. Boolean form (legacy style)

```js
element.addEventListener("click", handler, true);
```

- If you pass `false` (or nothing): the listener runs in the bubble phase (default). The target element (the one you interacted with) handles the event first. Then the event “bubbles up” through its parent(s), grandparent(s), all the way to the document.[ Flow: child → parent → document ]

  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <div id="parent" style="padding:40px; background:lightblue;">
        Parent
        <div
          id="child"
          style="padding:30px; background:white; border:1px solid black;"
        >
          Child
        </div>
      </div>

      <script>
        child.addEventListener("click", () => console.log("Child"));
        parent.addEventListener("click", () => console.log("Parent"));
        document.body.addEventListener("click", () => console.log("Body"));
      </script>
    </body>
  </html>
  ```

- If you pass `true`: the listener runs in the capture phase. The event is caught on the way down from the document. The parent(s) see it first, then the child, until it finally reaches the target. [ Flow: document → parent → child (target) ]

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="parent" style="padding:40px; background:lightgray;">
      Parent
      <div
        id="child"
        style="padding:30px; background:white; border:1px solid black;"
      >
        Child
      </div>
    </div>

    <script>
      document.body.addEventListener("click", () => console.log("Body"), true);
      parent.addEventListener("click", () => console.log("Parent"), true);
      child.addEventListener("click", () => console.log("Child"), true);
    </script>
  </body>
</html>
```

- This is something known as Event propagation which is the overall process of how events move through the DOM tree. It has three stages:

  1. Capture phase (capturing / trickling) → event travels from the root (document) down to the target.
  2. Target phase → the event reaches the element you actually interacted with.
  3. Bubbling phase → event travels back up from the target’s parents → document.

- In some case we might have to stop the propagation using `event.stopPropagation()`

- Every element comes with some default behavior like when clicked link it redirect to some page and the link color is changed. By using `event.defaultPrevented()` we can stop the default behavior and may change it in later part of code.

  ````html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Prevent Default Action</title>
    </head>
    <body>
      <a id="google-link" href="http://https://www.google.com/"
        >Go to Google Search Page</a
      >
    </body>
    <script>
      let counter = 0;
      document
        .getElementById("google-link")
        .addEventListener("click", function (event) {
          event.preventDefault();
          alert(`You have click the link ${++counter} times`);
        });
    </script>
  </html>

  ```
  ````

2. Object form (modern, recommended)

```js
element.addEventListener("click", handler, {
  capture: false,
  once: false,
  passive: false,
  signal: undefined,
});
```

`capture`

- Default: `false` → event bubbles up (child → parent → document).
- When `true`: event is caught on the way down (document → parent → child).

Use case: logging _every click_ before the target sees it. Rare, but useful for debugging or global listeners.

```js
document.body.addEventListener(
  "click",
  () => {
    console.log("body capture");
  },
  { capture: true }
);
```

`once`

- Runs the listener only once, then removes it automatically.
- Saves you from calling `removeEventListener`.

Example: Button should only work the first time:

```js
button.addEventListener(
  "click",
  () => {
    console.log("Clicked once!");
  },
  { once: true }
);
```

`passive`

- Default: `false`.
- If `true`, you promise not to call `event.preventDefault()`.
- This lets the browser optimize performance (especially for scroll/touch).

Example: scroll listener with passive:

```js
window.addEventListener(
  "scroll",
  () => {
    console.log("scrolling...");
  },
  { passive: true }
);
```

If you try `event.preventDefault()` inside this handler, you’ll get a warning in the console.

`signal`

- Lets you tie event listeners to an `AbortController`, so you can cancel many listeners at once.

Example:

```js
const controller = new AbortController();
const { signal } = controller;

button.addEventListener(
  "click",
  () => {
    console.log("clicked");
  },
  { signal }
);

// later → remove all listeners tied to this signal
controller.abort();
```

This is the modern, clean way to remove listeners (instead of manually calling `removeEventListener`).
