import "./listbanyumanik.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablebanyumanik from "../../components/datatablebanyumanik/Datatablebanyumanik";

const Listbanyumanik = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablebanyumanik columns={columns} />
      </div>
    </div>
  );
};

export default Listbanyumanik;