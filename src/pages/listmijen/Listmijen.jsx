import "./listmijen.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablemijen from "../../components/datatablemijen/Datatablemijen";

const Listmijen = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablemijen columns={columns} />
      </div>
    </div>
  );
};

export default Listmijen;