import "./Login.css";
import Navbar from "./LoginNavbar.js";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
function Login() {
  return (
    <div className="background">
      <Navbar />
      <div className="main">
        <div className="row mt-md-5">
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

          <div className="col-md-6">
            <div className="form">
              <form className="form-main">
                <div className="flex-form">
                  <div className="col-6">
                    <input
                      type="text"
                      className=""
                      placeholder="Surname"
                      id="first-input"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className=" ms-2"
                      placeholder="Firstname"
                      id="first-input"
                    />
                  </div>
                </div>
                <div className="email-div">
                  <input type="email" className="email" placeholder="Email" />
                </div>

                <div className="password-cover">
                  <input
                    type="password"
                    className="email"
                    placeholder="Choose Password"
                  />
                </div>

                <div className="password-cover">
                  <input
                    type="password"
                    className="email"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="paddword-div">
                  <input
                    type="text"
                    className="email"
                    placeholder="Phone Number"
                  />
                </div>
                <input type="submit" className="submit" value="Sign Up" />
                <div className="borderlines"></div>
                <button type="button" className="button">
                  <FcGoogle /> <span className="ps-2">Sign Up with Google</span>
                </button>
                <button type="button" className="button-sec">
                  <CgFacebook className="icon" />{" "}
                  <span className="ps-2">Log in with Facebook</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
