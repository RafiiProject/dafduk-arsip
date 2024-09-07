import "./listtugu.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabletugu from "../../components/datatabletugu/Datatabletugu";

const Listtugu = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatabletugu columns={columns} />
      </div>
    </div>
  );
};

export default Listtugu;