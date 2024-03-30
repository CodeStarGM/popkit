# PopKit! 🎉

![App Screenshot](https://i.ibb.co/mymdf3h/popkit-cover-2.png)

Introducing PopKit, the essential React library for crafting captivating popups, modals, toasts, and alerts. 🚀 Seamlessly integrate polished and responsive components into your React applications. PopKit streamlines development, empowering you to prioritize flawless user experiences. 🔧 Elevate your React app effortlessly with PopKit today.

## Features

- 🎉 Easily integrate captivating popups, modals, toasts, and alerts into your React applications.
- 🛠️ Streamline development with polished and responsive components.
- 🚀 Elevate user experiences effortlessly.
- 🔧 Hassle-free implementation for flawless user interactions.
- 💡 The easiest UI library available.
- 👌 Simplify the process of adding engaging UI elements.
- 🌟 Empower developers to craft captivating user interfaces.
- 💬 Enhance user engagement with interactive alerts and notifications.
- 🔔 Seamlessly manage popups and alerts for a smoother user journey.
- 🎨 Customize and tailor UI elements to match your brand's aesthetic.
- 💼 Boost productivity with the easiest React library for UI enhancements.
- Dark mode 🌒
- And much more !

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

Add Styles : 👇

```javascript
import "popkit/dist/style.css";
```

If you're using Next.js, simply add this code snippet inside either \_app.js (if you're using page routing) or layout.jsx (for app routing)

&emsp;

## Usage / Examples

&emsp;

Alert Popup 👇

![Alert Popup](https://i.ibb.co/fCr3Vqf/Alert-Popups.png)

&emsp;

```javascript
import React, { useState } from "react";

import { AlertPopup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Example() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>
      <AlertPopup
        title="Mission Accomplished! 🏆"
        description="Congratulations! You've successfully completed your task. Our success popups celebrate your achievements and victories!🚀"
        variant="success"
        open={modal}
        setOpen={() => {
          setModal(!modal);
        }}
        onConfirm={() => {
          /*redirect somewhere*/
        }}
        crossButton={true}
        buttonsText={["First Button Text", "Second Button Text"]} // !NOTE: don't add more than 2 elements or else it'll break
        isDark={true} // {true} -> means dark theme, {false} -> means light theme
      />
    </>
  );
}

export default Example;
```

&emsp;

Popup With Image 👇

![Popup](https://i.ibb.co/S3vQKcQ/Popups.png)

&emsp;

```javascript
import React, { useState } from "react";
import { Popup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Popkit() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>
      <Popup
        title="Mission Accomplished! 🏆"
        description="Astronauts landed on the moon successfully. Stay tuned as our team delves into the historic lunar landing achievements.🚀"
        buttonColor={"DC6803"} //add hexcode without hashtag (#)
        img={
          "https://img.freepik.com/premium-photo/ai-enhances-our-understanding-cosmos-by-analyzing-vast-amounts-data-collected-by-telescopes-probes-generated-by-ai_727385-1872.jpg?w=900"
        }
        crossButton={true} // wether you need a cross button on top left corner or not
        buttonsText={["First Button Text", "Second Button Text"]} // !NOTE: don't add more than 2 elements or else it'll break
        isDark={true} // {true} -> means dark theme, {false} -> means light theme
        open={modal}
        setOpen={() => {
          setModal(!modal);
        }}
        onConfirm={() => {
          /*redirect somewhere*/
        }}
      />
    </>
  );
}

export default Popkit;
```

&emsp;

Newsletter Popup 👇

![Popup](https://i.ibb.co/VxL6YXv/Newsletter-Popup.png)

&emsp;

```javascript
import React, { useState } from "react";
import { NewsletterPopup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Popkit() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(!modal);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Access the input value
    const enteredEmail = event.target.elements.newsletter.value;
    console.log("Entered email:", enteredEmail);

    // You can perform further actions here, such as sending the email to a server
    //Or setting the value to the state
    // anything you like
  };
  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>

      <NewsletterPopup
        title={"Subscribe to our newsletter "}
        description={
          "Receive new articles and resources directly on your inbox. fill you email below to join our email newsletter today  "
        }
        buttonColor={"4A3AFF"} //add hexcode without hashtag (#)
        open={modal}
        setOpen={handlePopup}
        onSubmit={onSubmit} // get value from input on form submit
        isDark={false} // {true} -> means dark theme, {false} -> means light theme
        iconImage={"https://i.ibb.co/LCQvnrL/Group-37333.png"}
      />
    </>
  );
}

export default Popkit;
```

&emsp;

Cookies Popup 👇

![Popup](https://i.ibb.co/687vnJg/Cookies-Popup.png)

```javascript
import React, { useState } from "react";
import { CookiesPopup } from "popkit";
import "popkit/dist/style.css"; //Important for Styling

function Popkit() {
  const [modal, setModal] = useState(false);

  const handlePopup = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={handlePopup}>Trigger Popkit!</button>

      <CookiesPopup
        title={"Cookie Policy"}
        description={
          "We care about your data, and we’d use cookies only to improve your experience.By using this website, you accpet out Cookies Policy."
        }
        iconImage={"https://i.ibb.co/6DQ7MPY/Component-1.png"}
        open={modal}
        setOpen={handlePopup}
        onSubmit={handlePopup}
        isDark={false} // {true} -> means dark theme, {false} -> means light theme
        crossButton={true} // wether you need a cross button on top left corner or not
      />
    </>
  );
}

export default Popkit;
```

&emsp;

### Is That All?

Absolutely not! We're constantly adding more exciting components, including cool popups with various styles, as well as toasts, alert messages, and much more!

### Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

Have ideas or want to contribute? Show support by Clicking [Here](https://github.com/CodeStarGM/popkit)
