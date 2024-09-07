import "./sidebar.scss";
import { Link,useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon  from "@mui/icons-material/ExitToApp";
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import {DarkModeContext} from "../../context/darkModeContext";
import {useContext} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);

    const { dispatch : authDispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            authDispatch({ type: "LOGOUT"});
            navigate("/login");
        })
        .catch((error) => {
            console.error("Logout error: ", error);
        });
    };

  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
        <li>
        <DashboardIcon className="icon" />
        <span>Dashboard</span>
        </li>
      <p className="title">TPDK KECAMATAN</p>
      <Link to="/tengah">
          <li data-testid="tengah">
              <PersonOutlineIcon className="icon" />
              <span>Semarang Tengah</span>
          </li>
      </Link>
      <Link to="/utara">
          <li data-testid="utara">
              <PaymentIcon className="icon" />
              <span>Semarang Utara</span>
          </li>
      </Link>
      <Link to="/selatan">
          <li>
              <PaymentIcon className="icon" />
              <span>Semarang Selatan</span>
          </li>
      </Link>
      <Link to="/timur">
          <li>
              <PaymentIcon className="icon" />
              <span>Semarang Timur</span>
          </li>
      </Link>
      <Link to="/barat">
          <li>
              <PaymentIcon className="icon" />
              <span>Semarang Barat</span>
          </li>
      </Link>
      <Link to="/genuk">
          <li>
              <PaymentIcon className="icon" />
              <span>Genuk</span>
          </li>
      </Link>
      <Link to="/tembalang">
          <li>
              <PaymentIcon className="icon" />
              <span>Tembalang</span>
          </li>
      </Link>
      <Link to="/pedurungan">
          <li>
              <PaymentIcon className="icon" />
              <span>Pedurungan</span>
          </li>
      </Link>
      <Link to="/candisari">
          <li>
              <PaymentIcon className="icon" />
              <span>Candisari</span>
          </li>
      </Link>
      <Link to="/gajahmungkur">
          <li>
              <PaymentIcon className="icon" />
              <span>Gajah Mungkur</span>
          </li>
      </Link>
      <Link to="/banyumanik">
          <li>
              <PaymentIcon className="icon" />
              <span>Banyumanik</span>
          </li>
      </Link>
      <Link to="/gunungpati">
          <li>
              <PaymentIcon className="icon" />
              <span>Gunung Pati</span>
          </li>
      </Link>
      <Link to="/dinas">
          <li>
              <PaymentIcon className="icon" />
              <span>Dinas</span>
          </li>
      </Link>
      <Link to="/tugu">
          <li>
              <PaymentIcon className="icon" />
              <span>Tugu</span>
          </li>
      </Link>
      <Link to="/mijen">
          <li>
              <PaymentIcon className="icon" />
              <span>Mijen</span>
          </li>
      </Link>
      <Link to="/ngaliyan">
          <li>
              <PaymentIcon className="icon" />
              <span>Ngaliyan</span>
          </li>
      </Link>
      <p className="title">USER</p>
      <li>
        <span>Profile</span>
      </li>
      <li onClick = {handleLogout}>
        <ExitToAppIcon className="icon" />
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
    <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
  </div>
</div>
  );
};

export default Sidebar;