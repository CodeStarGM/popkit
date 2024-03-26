# PopKit! 🎉

![App Screenshot](https://iili.io/JhyTLgt.md.png)

Introducing PopKit, the essential React library for crafting captivating popups, modals, toasts, and alerts. 🚀 Seamlessly integrate polished and responsive components into your React applications. PopKit streamlines development, empowering you to prioritize flawless user experiences. 🔧 Elevate your React app effortlessly with PopKit today.

## Installation

&emsp;

Using NPM : 👇

```bash
  npm install popkit
```

Using Yarn : 👇

```bash
  yarn add popkit
```

&emsp;

## Usage / Examples

General Popup 👇

```javascript
import React, { useState } from "react";

import { Popup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Example() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>
      <Popup
        title="PopKit Integration Completed! 🎉"
        description="PopKit is your go-to React library for creating stunning popups and modals, effortlessly integrate sleek and responsive popups into your React applications🚀"
        variant="primary"
        open={modal}
        setOpen={() => {
          setModal(!modal);
        }}
        onConfirm={() => {
          /*redirect somewhere*/
        }}
        crossButton={true}
        buttonsText={["First Button Text", "Second Button Text"]}
      />
    </>
  );
}
```

&emsp;

Popup With Image 👇

![Image Popup Preview](https://iili.io/JjxbSIa.png)

```javascript
import React, { useState } from "react";

import { ImagePopup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Example() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>
      <Popup
        title="Mission accomplished! "
        description="Astronauts landed on the moon successfully. Stay tuned as our team delves into the historic lunar landing achievements"
        buttonColor="DC6803"
        img="https://img.freepik.com/premium-photo/ai-enhances-our-understanding-cosmos-by-analyzing-vast-amounts-data-collected-by-telescopes-probes-generated-by-ai_727385-1872.jpg?w=900"
        open={modal}
        setOpen={() => {
          setModal(!modal);
        }}
        onConfirm={() => {
          /*redirect somewhere*/
        }}
        buttonsText={["First Button Text", "Second Button Text"]}
      />
    </>
  );
}
```

&emsp;

If you're using Next.js, simply add this code snippet inside either \_app.js (if you're using page routing) or layout.jsx (for app routing) 👇

```javascript
import "popkit/dist/style.css";
```

&emsp;

## Props Reference

| Prop Name   | Prop Type        | Prop Description                                                                                                                          |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string           | The title of the popup.                                                                                                                   |
| description | string           | The description or message displayed in the popup.                                                                                        |
| variant     | string           | (Optional) The variant of the popup. Option include "primary", "success", "danger", "info". Remember, the variant should be in lowercase. |
| open        | boolean          | A boolean value determining whether the popup is open or closed.                                                                          |
| setOpen     | function         | A function to set the state of the `open` prop, typically toggling it between true and false.                                             |
| onConfirm   | function         | (Optional) A function to execute when a confirm action is taken within the popup.                                                         |
| crossButton | boolean          | (Optional) Determines whether a cross button (close button) is displayed in the popup.                                                    |
| buttonsText | array of strings | (Optional) An array of strings representing the text to be displayed on buttons within the popup.                                         |

&emsp;

### Variant Examples

| Variant Name | Variant Screenshot                              |
| ------------ | ----------------------------------------------- |
| primary      | ![Primary Variant](https://iili.io/Jj9b1Ag.png) |
| success      | ![Success Variant](https://iili.io/Jj9x4nV.png) |
| info         | ![Info Variant](https://iili.io/Jj9xUwx.png)    |
|  |
| danger       | ![Danger Variant](https://iili.io/Jj9xgZQ.png)  |

### Is That All?

Absolutely not! We're constantly adding more exciting components, including cool popups with various styles, as well as toasts, alert messages, and much more!

Have ideas or want to contribute? Show support by Clicking [here](mailto:codestargm@gmail.com)
