import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);           // Total entries
  const [todayAmount, setTodayAmount] = useState(0);  // Today's entries
  const [monthAmount, setMonthAmount] = useState(0);  // This month's entries
  const navigate = useNavigate();                    // Hook for navigation

  // Define data object that will change based on 'type'
  let data;

  switch (type) {
    case "dinas":
      data = {
        title: "DUKCAPIL DINAS",
        isMoney: false,
        link: "See all data",
        query: "dinas",
        navigateTo: "/dinas",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tengah":
      data = {
        title: "TPDK SEMARANG TENGAH",
        isMoney: false,
        link: "See all data",
        query: "tengah",
        navigateTo: "/tengah",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "barat":
      data = {
        title: "TPDK SEMARANG BARAT",
        isMoney: false,
        link: "See all data",
        query: "barat",
        navigateTo: "/barat",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "timur":
      data = {
        title: "TPDK SEMARANG TIMUR",
        isMoney: false,
        link: "See all data",
        query: "timur",
        navigateTo: "/timur",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "utara":
      data = {
        title: "TPDK SEMARANG UTARA",
        isMoney: false,
        link: "See all data",
        query: "utara",
        navigateTo: "/utara",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "selatan":
      data = {
        title: "SEMARANG SELATAN",
        isMoney: false,
        link: "See all data",
        query: "selatan",
        navigateTo: "/selatan",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "candisari":
      data = {
        title: "TPDK CANDISARI",
        isMoney: false,
        link: "See all data",
        query: "candisari",
        navigateTo: "/candisari",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tembalang":
      data = {
        title: "TPDK TEMBALANG",
        isMoney: false,
        link: "See all data",
        query: "tembalang",
        navigateTo: "/tembalang",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "banyumanik":
      data = {
        title: "TPDK BANYUMANIK",
        isMoney: false,
        link: "See all data",
        query: "banyumanik",
        navigateTo: "/banyumanik",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "gajahmungkur":
      data = {
        title: "TPDK GAJAHMUNGKUR",
        isMoney: false,
        link: "See all data",
        query: "gajahmungkur",
        navigateTo: "/gajahmungkur",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "gunungpati":
      data = {
        title: "TPDK GUNUNG PATI",
        isMoney: false,
        link: "See all data",
        query: "gunungpati",
        navigateTo: "/gunungpati",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "ngaliyan":
      data = {
        title: "TPDK NGALIYAN",
        isMoney: false,
        link: "See all data",
        query: "ngaliyan",
        navigateTo: "/ngaliyan",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "pedurungan":
      data = {
        title: "TPDK PEDURUNGAN",
        isMoney: false,
        link: "See all data",
        query: "pedurungan",
        navigateTo: "/pedurungan",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "genuk":
      data = {
        title: "TPDK GENUK",
        isMoney: false,
        link: "See all data",
        query: "genuk",
        navigateTo: "/genuk",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "mijen":
      data = {
        title: "TPDK MIJEN",
        isMoney: false,
        link: "See all data",
        query: "mijen",
        navigateTo: "/mijen",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tugu":
      data = {
        title: "TPDK TUGU",
        isMoney: false,
        link: "See all data",
        query: "tugu",
        navigateTo: "/tugu",  // Dynamic navigation route
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  // Fetching the counts from Firestore based on 'type'
    useEffect(() => {
      const fetchData = async () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const startOfDay = new Date(year, month, today.getDate());  // Today
        const startOfMonth = new Date(year, month, 1);  // First day of current month
  
        // Query for total entries
        const q = query(collection(db, data.query));
        const querySnapshot = await getDocs(q);
        setAmount(querySnapshot.size);
  
        // Query for today's entries using date comparison
        const qToday = query(
          collection(db, data.query),
          where(
            "date",
            "==",
            startOfDay.toLocaleDateString() // Assuming "date" field stores the date portion only
          )
        );
        const queryTodaySnapshot = await getDocs(qToday);
        setTodayAmount(queryTodaySnapshot.size);
  
        // Query for this month's entries using date comparison
        const qMonth = query(
          collection(db, data.query),
          where(
            "date",
            ">=",
            startOfMonth.toLocaleDateString() // Assuming "date" field stores the date portion only
          ),
          where("date", "<=", today.toLocaleDateString()) // Today included
        );
        const queryMonthSnapshot = await getDocs(qMonth);
        setMonthAmount(queryMonthSnapshot.size);
      };
  
      fetchData();
    }, [data.query]);
  
    return (
      <div className="widget" onClick={() => navigate(data.navigateTo)}>
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            This Month: {monthAmount}
          </span>
          <span className="counter">Today: {todayAmount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <h3 style={{ marginRight: "-70px" }}>Total: {amount}</h3>
          </div>
          <div className="icon" style={{ marginTop: "-100px", marginRight: "25px" }}>
            {data.icon}
          </div>
        </div>
      </div>
    );
  };

export default Widget;
