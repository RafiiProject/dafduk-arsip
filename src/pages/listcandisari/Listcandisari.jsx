import "./listcandisari.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablecandisari from "../../components/datatablecandisari/Datatablecandisari";

const Listcandisari = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablecandisari columns={columns} />
      </div>
    </div>
  );
};

export default Listcandisari;