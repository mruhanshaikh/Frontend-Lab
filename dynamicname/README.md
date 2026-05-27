# React useEffect Timer Demo
## Live - https://randomnameswithoutevent.netlify.app/

## Overview

This project demonstrates how the **`useEffect` hook** works in React and how it can be used to run side effects like timers and API calls.

## What I Learned

* **useEffect Hook** is used to perform side effects such as API calls, timers, and DOM operations.
* The **dependency array** controls when the effect runs:

  * No dependency → runs on every render
  * `[]` → runs once after component mount
  * `[value]` → runs when that value changes
* **setInterval** inside `useEffect` continues running because it is handled by the **JavaScript event loop**.
* A **cleanup function** (`clearInterval`) is used to stop the timer when the component unmounts to prevent memory leaks.

