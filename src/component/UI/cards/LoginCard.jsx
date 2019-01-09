import React from 'react';
import '../../../styles/style.css';


const LoginCard = () => (

  <div className="Aligner ">
    <div className="loginCard ">
      <div className="aligncnt ">
        <h2 className="mt">Login To Your Account </h2>
        { /* <!-- <h4 style="margin-top:-25px; color:#f2f2f2 ">
    Get your food in minutes</h4> --> */}
        <form>
          <div className="divwidth ">
            <div>
              <input className="txtwidth form-style-1 " id="email" type="email" name="email" placeholder="Email " />
              <p className="ErrMsg" id="emailErrMsg" />
            </div>
            <div>
              <input
                className="txtwidth form-style-1"
                type="password"
                id="pass"
                name="password"
                minLength="5"
                placeholder="Password"
                required
              />
              <p className="ErrMsg" id="pwdErrMsg" />
              <br />
              <p className="ErrMsg" id="signinErrMsg" />
            </div>
            <div className="mg-top">
              <button type='button' href="" id="submitbtn" className="a5 ">
                    Login
              </button>
            </div>
          </div>

          <div className="bm" />
        </form>
      </div>
    </div>
  </div>
);

export default LoginCard;
