import { marked } from 'marked';
import react from 'react';
import './App.css';

function App() {
  const defaultTextAreaValue = `# Heading
## Sub Heading
\`<div></div>\`
~~~
// Multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == a) {
    return otherCode;
  }
}
~~~
> Block Quotes!

**Bold Text**

1. Numbered list 
1. Numbered list second item

[links](https://www.freecodecamp.org)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;


  marked.use({
    gfm: true, breaks: true
  });

  const updateDisplay = (rawText) => {
    const display = document.getElementById('preview');
    display.innerHTML = marked.parse(rawText);
  };

  const handleChange = (e) => {
    const text = e.target.value;
    updateDisplay(text);
  };

  window.addEventListener('load', () => {
    updateDisplay(document.getElementById('editor').value);
  });

  return (
    <>
      <>
      
        <h3 className='heading'>
        <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
          Editor</h3>
        <textarea
          defaultValue={defaultTextAreaValue}
          onChange={handleChange}
          id="editor"
        />
      </>
      <>     
      <h3 className='heading'>
      <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 640 512"><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
        Preview</h3>
       <div id="preview"></div>
      </></>

  );
}

export default App;
