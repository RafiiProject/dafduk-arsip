import "./listutara.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatableutara from "../../components/datatableutara/Datatableutara";

const Listutara = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatableutara columns={columns} />
      </div>
    </div>
  );
};

export default Listutara;