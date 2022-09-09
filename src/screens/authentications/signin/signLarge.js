import "./signin.css";

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import SignSmall from "./signSmall.js";
function SignBody() {
  return (
    <div>
      <div className="row d-md-flex d-none" id="content">
        <div className="col-md-6 d-md-block d-none" id="text">
          <div>
            <h2 className="text-center"> Xporfolio</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="col-6 d-md-block d-none">
          <div className="form-main">
            <form className="form-content">
              <div>
                <input type="email" className="inputMail" placeholder="Email" />
              </div>
              <div>
                <input
                  type="Password"
                  className="inputPassword"
                  placeholder="Password"
                />
              </div>
              <input
                type="submit"
                className="w-100 mt-4"
                id="submit"
                value="Log In"
              />
              <p className="text-color">Forget Password?</p>
              <div className="borderlines"></div>

              <button type="button" className="button-one">
                <FcGoogle className="fs-4" />{" "}
                <span className="ps-2">Log In with Google</span>
              </button>
              <button type="button" className="button-one mt-4">
                <CgFacebook className="icon" />{" "}
                <span className="ps-2">Log in with Facebook</span>
              </button>
            </form>
          </div>
          <div>
            <p className="text-center pt-4" style={{ cursor: "pointer" }}>
              Don't have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                {" "}
                <span className="text-primary fw-bold">Click here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <SignSmall />
    </div>
  );
}
export default SignBody;
