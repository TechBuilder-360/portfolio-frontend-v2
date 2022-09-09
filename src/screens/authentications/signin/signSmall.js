import "./signSmall.css";
import { Link } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
function SignSmall() {
  return (
    <div className="d-md-none small-screen">
      <form className="form-name">
        <h4 className="text-center">
          Welcome back, <span className="fw-bold">Maria</span>
        </h4>
        <div className="password-div">
          <AiOutlineMail />
          <input type="email" placeholder="Email" className="input-pass" />
        </div>
        <div className="password-div">
          <GiPadlock />
          <input
            type="Password"
            placeholder="Password"
            className="input-pass"
          />
        </div>
        <div className="floating">Forgot Password?</div>
        <input type="submit" className="btn-submit" value="Sign In" />

        <div className="mt-5 text-center">
          New User ?
          <Link to="/" className="text-decoration-none">
            <span className="click">Click here</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default SignSmall;
