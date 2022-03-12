import Header from "./components/Header";
import FileUploader from "./components/FileUploader";
import FilePreviewer from "./components/FilePreviewer";
import { useState } from "react";

const App = () => {
  const [previews, setPreviews] = useState([]);

  const handleFileUpload = (filesToUpload) => {
    const filePrieviewList = filesToUpload.map((file) => ({
      name: file.name,
      previewImage: file.preview,
    }));
    setPreviews(filePrieviewList);
  };

  return (
    <div className="flex flex-col py-5">
      <Header />
      <FileUploader
        onUpload={(filesToUpload) => handleFileUpload(filesToUpload)}
      />
      <FilePreviewer previews={previews} />
    </div>
  );
};

export default App;
