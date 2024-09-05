import "./listselatan.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatableselatan from "../../components/datatableselatan/Datatableselatan";

const Listselatan = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatableselatan columns={columns} />
      </div>
    </div>
  );
};

export default Listselatan;