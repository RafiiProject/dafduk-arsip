import "./listngaliyan.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablengaliyan from "../../components/datatablengaliyan/Datatablengaliyan";

const Listngaliyan = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablengaliyan columns={columns} />
      </div>
    </div>
  );
};

export default Listngaliyan;