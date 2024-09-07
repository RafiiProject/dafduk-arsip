import "./listtimur.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabletimur from "../../components/datatabletimur/Datatabletimur";

const Listtimur = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatabletimur columns={columns} />
      </div>
    </div>
  );
};

export default Listtimur;