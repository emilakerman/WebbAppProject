import { useState } from "react";


const UploadProfileImage = (props) => {

  const [file, setFile] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button>Upload profile pic</button>
    </div>
  );
}
export default UploadProfileImage;
