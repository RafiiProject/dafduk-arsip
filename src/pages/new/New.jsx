import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Sesuaikan dengan path Firebase kamu

const Single = ({ columns }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      console.log("ID dari URL:", id); // Debug ID

      if (id) { // Pastikan ID ada
        try {
          const docRef = doc(db, "pdfs", id); // Ganti "pdfs" dengan nama koleksi yang sesuai
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.error("No such document!");
            // Handle jika dokumen tidak ditemukan
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.error("ID tidak ditemukan!");
        // Handle jika ID tidak ada
      }
    };

    fetchPdf();
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          {/* Render data di sini */}
          {data.fileUrl && (
            <iframe
              src={data.fileUrl}
              style={{ width: '100%', height: '600px' }}
              title="PDF Viewer"
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Single;
