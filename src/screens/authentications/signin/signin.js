import "./signin.css";
import SignBody from "./signLarge.js";

import { MdOutlineNotificationsActive } from "react-icons/md";
function SignIn() {
  return (
    <div className="background">
      <div className="flex-prop px-5 d-md-none d-flex">
        <div>
          <h2 className="pt-2">Xportfolio</h2>
        </div>

        <div>
          <MdOutlineNotificationsActive className="notification" />
        </div>
      </div>

      <SignBody />
    </div>
  );
}
export default SignIn;
