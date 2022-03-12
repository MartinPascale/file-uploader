import React, { useState } from "react";
import Dropzone from "./Dropzone";

const FileUploader = ({ onUpload }) => {
  const [files, setFiles] = useState([]);

  const onSelect = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  return (
    <div className="flex flex-col md:flex-row mt-11">
      <div className="flex px-5 pb-6 mb-6 border-b-2 md:px-10 md:pb-0 md:border-r-2 border-r-slate-300 md:mb-0 md:border-b-0">
        <Dropzone onSelect={(selectedFiles) => onSelect(selectedFiles)} />
      </div>
      <div className="flex flex-col flex-1 px-5 pb-6 mb-6 border-b-2 md:px-10 md:pb-0 md:border-r-2 border-r-slate-300 md:mb-0 md:border-b-0">
        <span className="mb-5 text-blue-700">Select Files</span>
        <div className="flex flex-col flex-wrap h-32">
          {files?.length > 0 &&
            files.map((file) => (
              <span className="flex flex-grow-0 max-w-fit" key={file.path}>
                {file.name}
              </span>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-5 pb-6 border-b-2 md:px-10 md:justify-center md:flex-col md:pb-0 md:border-b-0 border-r-slate-300 md:mb-0">
        <button
          className="w-32 py-2 text-white bg-blue-700 md:mb-5"
          onClick={() => onUpload(files)}
          disabled={files?.length === 0}
        >
          Upload
        </button>
        <button
          className="w-32 py-2 text-blue-700 bg-white border border-blue-700"
          onClick={() => setFiles([])}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
