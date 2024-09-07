import "./listgunungpati.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablegunungpati from "../../components/datatablegunungpati/Datatablegunungpati";

const Listgunungpati = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatablegunungpati columns={columns} />
      </div>
    </div>
  );
};

export default Listgunungpati;