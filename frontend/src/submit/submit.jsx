import React, { useState } from 'react';
import DropFileInput from './DropFileInput';
import analyzeSkin from './src/api.js';

const MyForm = () => {
  const [fileList, setFileList] = useState([]);

  const onFileChange = (newFileList) => {
    setFileList(newFileList);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Call your API function here and pass in the fileList as an argument
    analyzeSkin(fileList);
  }

  return (
    <form onSubmit={onSubmit}>
      <DropFileInput onFileChange={onFileChange} />

      <button type="submit">Analyze Skin</button>
    </form>
  );
}