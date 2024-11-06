import { useState } from "react";
import { MdAttachFile } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const AttachmentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFiles([...e.target.files]); 
  };

  const handleFileUpload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    setUploading(true);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Uploaded files:", data);
      setUploadedFiles(data.files); 
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setUploading(false);
      handleCloseModal();
    }
  };

  return (
    <div>
      <div
        className="flex items-center gap-x-1 rounded"
        onClick={handleOpenModal}
      >
        <MdAttachFile color="gray" size="15px" />
        <div className="text-gray-500 text-sm font-medium">{files.length} </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="w-[270px] lg:w-auto bg-white p-5  rounded shadow-lg">
            <div className="flex justify-between justify-items-center border-b">
              <div>
                <h2 className="text-lg font-medium ">Attach Files</h2>
              </div>
              <div>
                {" "}
                <button onClick={handleCloseModal} className=" text-red-500 rounded-full border border-red-500">
                  <RxCross2/>
                </button>
              </div>
            </div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleFileUpload} className="mt-4 text-blue-500">
              {uploading ? "Uploading..." : "Upload Files"}
            </button>
          </div>
        </div>
      )}

   
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium">Uploaded Files</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-gray-700 text-sm">
                {file.filename} -{" "}
                <span className="italic">{file.extension}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AttachmentComponent;
