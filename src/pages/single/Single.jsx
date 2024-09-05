import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/datatabledinas/Datatabledinas";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Single = () => {
  const { id } = useParams(); // Assuming you're passing the document ID as a URL parameter
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "yourCollectionName", id); // Replace 'yourCollectionName' with your actual collection name
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="left">
          <div className="item">
            <div className="details">
              <h1 className="itemTitle">{data?.name || "Name not available"}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{data?.email || "Email not available"}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{data?.phone || "Phone not available"}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">{data?.address || "Address not available"}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">{data?.country || "Country not available"}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">PDF File:</span>
                <span className="itemValue">
                  {data?.fileUrl ? (
                    <a href={data.fileUrl} target="_blank" rel="noopener noreferrer">
                      View PDF
                    </a>
                  ) : (
                    "No PDF uploaded"
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
