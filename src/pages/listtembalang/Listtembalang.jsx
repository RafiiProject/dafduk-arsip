import "./listtembalang.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabletembalang from "../../components/datatabletembalang/Datatabletembalang";

const Listtembalang = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatabletembalang columns={columns} />
      </div>
    </div>
  );
};

export default Listtembalang;