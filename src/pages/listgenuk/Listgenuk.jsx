import "./listgenuk.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablegenuk from "../../components/datatablegenuk/Datatablegenuk";

const Listgenuk = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablegenuk columns={columns} />
      </div>
    </div>
  );
};

export default Listgenuk;