import "./LoginNavbar.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
function Navbar() {
  return (
    <div className="flex-prop px-5 d-md-none d-flex">
      <div>
        <h2 className="pt-2">Xportfolio</h2>
      </div>

      <div>
        <MdOutlineNotificationsActive className="notification" />
      </div>
    </div>
  );
}
export default Navbar;
