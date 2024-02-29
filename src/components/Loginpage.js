import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import Img1 from "./images/fbimage.png";
const Loginpage = () => {
  const [state, setState] = React.useState({
    textBlock: "",
    passwordBlock: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false);
  const navigate = useNavigate("");
  let name, value;
  const handlinginput = (event) => {
    name = event.target.name;

    value = event.target.value;

    setState({ ...state, [name]: value });
  };
  const [errorMsg, setErrorMsg] = React.useState("");

  const submit = (event) => {
    event.preventDefault();

    if (!state.textBlock || !state.passwordBlock) {
      setErrorMsg("PLz fill the blocks");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, state.textBlock, state.passwordBlock)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/facebook");
        setState({ textBlock: "", passwordBlock: "" });
      })

      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        setState({ textBlock: "", passwordBlock: "" });
      });
   
  };

  return (
    <div className="login-Page-overall">
      <div className="login-Sideimage">
        <img src={Img1} alt="image" />
        <h2> Thanks for stopping by!</h2> <br />
        <h4>We hope to see you again soon.</h4>
      </div>

      <div className="login-Block" method="POST">
        <div className="first-Block">
          <input
            type="text"
            name="textBlock"
            value={state.textBlock}
            className="text-Block"
            placeholder="Email address or phone number"
            onChange={handlinginput}
          />
        </div>
        <div className="second-Block">
          <input
            type="password"
            name="passwordBlock"
            value={state.passwordBlock}
            className="password-Block"
            placeholder="Password"
            onChange={handlinginput}
          />
        </div>
        <pre> {errorMsg} </pre>
        <div
          className="third-Block"
          onClick={submit}
          disabled={submitButtonDisabled}
        >
          <b> Log in </b>
        </div>
        <a href="#" className="forgot-Pass">
          {" "}
          Forgotten password?
        </a>
        <br />
        <hr className="line-Seg" />{" "}
        <div className="fourth-Block">
          <Link to="/signup" className="link">
            <b> Create new account</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
