import "./listpedurungan.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablepedurungan from "../../components/datatablepedurungan/Datatablepedurungan";

const Listpedurungan = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablepedurungan columns={columns} />
      </div>
    </div>
  );
};

export default Listpedurungan;