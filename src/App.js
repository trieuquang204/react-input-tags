import React, { useState } from 'react';
import './App.css';

function App() {
  // const [input, setInput] = useState('');
  // const [tags, setTags] = useState([]);
  // const [isKeyReleased, setIsKeyReleased] = useState(false);

  // const onChange = (e) => {
  //   const { value } = e.target;
  //   setInput(value);
  // };

  // const onKeyDown = (e) => {
  //   const { key } = e;
  //   const trimmedInput = input.trim();

  //   if (key === ',' || key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
  //     e.preventDefault();
  //     setTags(prevState => [...prevState, trimmedInput]);
  //     setInput('');
  //   }

  //   if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
  //     const tagsCopy = [...tags];
  //     const poppedTag = tagsCopy.pop();
  //     e.preventDefault();
  //     setTags(tagsCopy);
  //     setInput(poppedTag);
  //   }

  //   setIsKeyReleased(false);
  // };

  // const onKeyUp = () => {
  //   setIsKeyReleased(true);
  // }

  // const deleteTag = (index) => {
  //   setTags(prevState => prevState.filter((tag, i) => i !== index))
  // }


  const [tags, setTags] = useState([])
  function handleKeyDown(e) {
    if(e.key !== 'Enter') return;
    const value = e.target.value;
    if(!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = '';
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }

  return (
    // <div className="container">
    //   <input
    //     value={input}
    //     placeholder="Enter a tag"
    //     onKeyDown={onKeyDown}
    //     onChange={onChange}
    //     onKeyUp={onKeyUp}
    //   />
    //   <div>
    //     {tags.map((tag, index) => (
    //         <div className="tag">
    //           {tag}
    //           <button onClick={() => deleteTag(index)}>x</button>
    //         </div>
    //       ))}
    //   </div>
    // </div>

    <div className='tags-input-container'>
      {tags.map((tag, index) => (
          <div className='tag-item' key={index}>
            <span className='text'>{tag}</span>
            <span onClick={() => removeTag(index)} className='close'>&times;</span>
          </div>
      ))}
      <input onKeyDown={handleKeyDown} type='text' placeholder='type' />
    </div>
  );
}

export default App;
