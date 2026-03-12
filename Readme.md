## for creating project
npm create vite@latest

# or
npm create vite@latest 01tailwindprops

## for istalling npm project
npm i

## 01 tailwind
its a utility first css frameworked 

npm install tailwindcss @tailwindcss/vite

## import on top of src/index.css
```javascript
@import "tailwindcss";
```


## add below lines in vite.config.js
```javascript
import tailwindcss from '@tailwindcss/vite'
...
...

tailwindcss(),
```

```javascript
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    tailwindcss(),
  ],
})
```


## only this called fragment , its seen into the App.jsx
<>
</>


## useCallback function in react: used for cached data and passed to multiple function. 
cache a function defination between re-render


# useEffect is a React Hook that lets you synchronize a component with an external system.

# useRef is a React Hook that lets you reference a value that’s not needed for rendering.

## github repo
https://github.com/hiteshchoudhary/chai-aur-react/blob/main/currency.md


## for installing react router dom
npm i react-router-dom


## jab bhi hamara page load ho koi API call hojaye and uski value render hojaye uske liye {useEffect}


## Context switching is for state manangent.


## for redux installing 
npm install @reduxjs/toolkit

npm install react-redux

## for creating complete project needed below things, 
redux, tailwind, react router, appwrite, tinyreact, html react parser

npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form


