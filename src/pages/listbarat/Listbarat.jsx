import "./listbarat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablebarat from "../../components/datatablebarat/Datatablebarat";

const Listbarat = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablebarat columns={columns} />
      </div>
    </div>
  );
};

export default Listbarat;