import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabletengah from "../../components/datatabletengah/Datatabletengah";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatabletengah columns={columns} />
      </div>
    </div>
  );
};

export default List;