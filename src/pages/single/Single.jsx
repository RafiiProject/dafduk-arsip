import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import PDFIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { useNavigate, useLocation } from "react-router-dom";

const Single = () => {
  const { collection, id } = useParams(); // Mengambil 'collection' dan 'id' dari URL
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async () => {
      const collections = ["tengah", "dinas", "banyumanik", "barat", "gajahmungkur", "utara"]; // Nama koleksi
      let documentFound = null;
    
      for (const collectionName of collections) {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          documentFound = docSnap.data(); // Dokumen ditemukan
          break;
        }
      }
    
      if (documentFound) {
        setData(documentFound);
      } else {
        console.error("Dokumen tidak ditemukan di koleksi manapun!");
      }
    };

    fetchDocument();
  }, [collection, id]);

  if (!data) {
    return <p>Loading...</p>;
  }


    return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="left">
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{data.nama || "Nama tidak tersedia"}</h1>

                <div className="detailItem">
                  <span className="itemKey">NIK:  </span>
                  <span className="itemValue">{data.nik || "NIK tidak tersedia"}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Keterangan: </span>
                  <span className="itemValue">{data.keterangan || "Keterangan tidak tersedia"}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Tanggal:  </span>
                  <span className="itemValue">{data.tanggal || "Tanggal tidak tersedia"}</span>
                </div>
          <div className="right">
          <PDFIcon className="icon" />
            <div className="detailItem">
              <span className="itemKey" style={{marginTop:"-25px", marginLeft:"-15px"}}>PDF File: </span>
              <span className="itemValue" style={{marginTop:"30px", marginLeft:"-65px"}}>
                {data?.fileUrl ? (
                  <a href={data.fileUrl} target="_blank" rel="noopener noreferrer">
                    Lihat PDF
                  </a>
                ) : (
                  "Tidak ada file PDF yang diunggah"
                )}
              </span>
            </div>
          </div>
              </div>
            </div>
          </div>
          {/* Button Kembali */}
          <div className="bottom">
            <button className="backButton" onClick={() => navigate(-1)} style={{width:"150px",
      padding: "10px",
      backgroundColor: "teal",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "20px", // Jarak atas tombol
      borderRadius: "5px", // Membulatkan sudut tombol
      transition: "background-color 0.3s", marginLeft:"1300px"}}>
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Single;
