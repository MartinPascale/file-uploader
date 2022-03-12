import React from "react";

const FilePreviewer = ({ previews }) => {
  return (
    <div className="px-5 mt-6 md:px-10 md:mt-16">
      <span className="text-blue-700">Uploaded Files</span>
      <div className="flex flex-wrap justify-start w-full mt-4">
        {previews.map((preview) => (
          <div
            key={preview.name}
            className="mb-4 mr-2 md:mr-3 md:mb-8 w-1/3-gap md:w-1/5-gap"
          >
            <img src={preview.previewImage} alt={preview.name} />
            <span>{preview.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilePreviewer;
