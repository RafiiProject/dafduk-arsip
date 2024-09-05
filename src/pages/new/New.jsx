import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"; 
import { doc, serverTimestamp, setDoc, addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate, useLocation } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null); // State for file
  const [data, setData] = useState({});
  const [dropdownValue, setDropdownValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation(); 
  const type = location.pathname.split('/')[1]; 

  const handleDropdownChange = (e) => {
    const selectedLabel = e.target.value; 
    setDropdownValue(selectedLabel); 
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      let fileUrl = "";
      
      if (file) {
        const storageRef = ref(storage, `pdfs/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        fileUrl = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed", 
            null, 
            reject, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(resolve);
            }
          );
        });
      }

      const newData = {
        ...data,
        keterangan: dropdownValue,
        fileUrl, // Add file URL to Firestore
        timeStamp: serverTimestamp(),
      };
  
      if (type === "users") {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await setDoc(doc(db, type, res.user.uid), newData);
      } else {
        await addDoc(collection(db, type), newData);
      }
  
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* Preview section for image or file can be added here */}
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <select
                      name={input.label}
                      value={dropdownValue}
                      onChange={handleDropdownChange}
                    >
                      <option value="">Pilih {input.label}</option>
                      {input.options.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                      onChange={handleInput}
                    />
                  )}
                </div>
              ))}
              <div className="formInput">
                <label>Upload PDF (opsional)</label>
                <input type="file" accept=".pdf" onChange={handleFileChange} />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
