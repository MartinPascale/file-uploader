import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onSelect }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      onSelect(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center w-full"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="w-full p-4 font-semibold text-center text-blue-700 border border-blue-700">
          Drop the files here ...
        </p>
      ) : (
        <p className="w-full p-4 font-semibold text-center text-blue-700 border border-blue-700">
          Chose or Drag Files
        </p>
      )}
    </div>
  );
};

export default Dropzone;
