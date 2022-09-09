import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import "./DashboardNav.css";
import DashboardBody from "./DashboardBody";
function Dashboard() {
  return (
    <div>
      <div className="main-body">
        <div>Xportfolio</div>
        <div className="search-div">
          <AiOutlineSearch />
          <input type="text" className="search" value="search post" />
        </div>

        <div>
          <ul className="list">
            <li>
              <AiFillHome />
            </li>
            <li>
              <FaTable />
            </li>
            <li>
              <HiUsers />
            </li>
            <li>
              <FaBars />
            </li>
          </ul>
        </div>
      </div>
      <div className="fa-bars">
        {" "}
        <FaBars className="bar-icon" />
      </div>
      <DashboardBody />
    </div>
  );
}
export default Dashboard;
