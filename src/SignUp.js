import React, { useState } from "react";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [state, setState] = React.useState({
    firstname: "",
    surname: "",
    emailAdrress: "",
    password: "",
    month: "",
    date: "",
    year: "",
  });

  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  let value, name;
  const changingInput = (event) => {
    value = event.target.value;
    name = event.target.name;

    setState({ ...state, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();

    const recieved = await fetch(
      " https://react-fb-form-ebf41-default-rtdb.firebaseio.com/react-fb-form.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...state,
          gender: gender,
        }),
      }
    );
    if (recieved) {
      alert("the data has been stored ");

      setState({
        firstname: "",
        surname: "",
        emailAdrress: "",
        password: "",
        month: "",
        date: "",
        year: "",
      });
      setGender("");
    }
  };

  return (
    <div className="SignUp-Block" method="POST">
      <div className="heading-SignUp">Create a new account</div>
      <p className="paragraph">its easy and quick</p>
      <hr className="underlin" />

      <div className="names-Block">
        <div className="first-NameBlock">
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            placeholder="First name"
            className="input-names"
            onChange={changingInput}
            required
          />
        </div>

        <div className="sur-NameBlock">
          <input
            type="text"
            name="surname"
            value={state.surname}
            placeholder="Surname"
            className="input-names"
            onChange={changingInput}
            required
          />
        </div>
      </div>

      <div className="email-AddressBlock">
        <input
          type="text"
          name="emailAdrress"
          value={state.emailAdrress}
          placeholder="Mobile number or email address"
          className="inputEmail-Password"
          onChange={changingInput}
          required
        />
      </div>

      <div className="new-PasswordBlock">
        <input
          type="password"
          name="password"
          value={state.password}
          placeholder="New Password"
          className="inputEmail-Password"
          onChange={changingInput}
          required
        />
      </div>

      <p className="date-Of-Birth">Date of birth</p>
      <div className="dates-Block">
        <div className="time-Block">
          <select
            name="date"
            className="input-time-Block"
            value={state.date}
            onChange={changingInput}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>

        <div className="time-Block">
          <select
            name="month"
            value={state.month}
            className="input-time-Block"
            onChange={changingInput}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <div className="time-Block">
          <select
            name="year"
            value={state.year}
            className="input-time-Block"
            onChange={changingInput}
            required
          >
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      <p className="gender-Para">Gender</p>

      <div className="gender-Block">
        <div className="gen-Block">
          <span>Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            className="gender-Input"
            checked={gender === "female"}
            onChange={handleGenderChange}
            required
          />
        </div>

        <div className="gen-Block">
          <span>Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="gender-Input"
            checked={gender === "male"}
            onChange={handleGenderChange}
            required
          />
        </div>

        <div className="gen-Block">
          <span>Custom</span>
          <input
            type="radio"
            name="gender"
            value="custom"
            className="gender-Input"
            checked={gender === "custom"}
            onChange={handleGenderChange}
            required
          />
        </div>
      </div>

      {/* <div className="SignUp-Button"> */}

      <button className="SignUp-Button" onClick={submitData}>
        {" "}
        Sign Up
      </button>
      {/* </div> */}

      <Link to="/">
        <p className="already-para">Already has an account </p>
      </Link>
    </div>
  );
};

export default SignUp;
