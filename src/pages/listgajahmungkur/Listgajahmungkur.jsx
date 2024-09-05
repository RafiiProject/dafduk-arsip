import "./listgajahmungkur.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablegajahmungkur from "../../components/datatablegajahmungkur/Datatablegajahmungkur";

const Listgajahmungkur = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablegajahmungkur columns={columns} />
      </div>
    </div>
  );
};

export default Listgajahmungkur;