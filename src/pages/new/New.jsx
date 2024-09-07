import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"; 
import { doc, serverTimestamp, setDoc, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate, useLocation } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");  
  const [data, setData] = useState({});
  const [dropdownValue, setDropdownValue] = useState(""); // State untuk dropdown

  const navigate = useNavigate();
  const location = useLocation(); 
  const type = location.pathname.split('/')[1]; 

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        ...data,
        keterangan: dropdownValue, // Tambahkan dropdownValue ke objek data
        timeStamp: serverTimestamp(),
      };

      if (type === "users") {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await setDoc(doc(db, type, res.user.uid), newData); // Gunakan newData di sini
      } else {
        await addDoc(collection(db, type), newData); // Gunakan newData di sini
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
                        <option key={option.value} value={option.value}>
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
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
