import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validate } from "./hooks/Validate";
import styles from "./styles/SignInLogin.module.css";
import Home from "./assets/icons/home-svgrepo-com.svg";
import connect from "./assets/icons/connect-svgrepo-com.svg";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched , setTouched] = useState({});
  const [errors , setErrors] = useState({});

  useEffect(() => {
    setErrors(Validate(data))
}, [data, touched])





  const changHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler=event=>{
    setTouched({...touched, [event.target.name]:true});
  }
  const submitHandler = event => {
    event.preventDefault();
    if(!Object.keys(errors).length){
        alert("success")
    }else{
      setTouched({
        name:true,
        email:true,
        password:true,
        confirmPassword:true,
        isAccepted:true
      })
    }
  };
  return (
    <div className={styles.container}>
      <Link to="*" className={styles.home}><img src={Home} alt="home"/></Link>
      <Link to="/about" className={styles.connect}><img src={connect} alt="connect"/></Link>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.title} >Login</h2>
        <div className={styles.formField}>
        <label>Email</label>
          <input
          className={(errors.email && touched.email)?styles.unComplete : styles.complete} 
            type="email"
            name="email"
            value={data.email}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errors}>{errors.email && touched.email && <span>{errors.email}</span>}</div>
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
          className={(errors.password && touched.password)?styles.unComplete : styles.complete} 
            type="password"
            name="password"
            value={data.password}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errors}>{errors.password && touched.password && <span>{errors.password}</span>}</div>
        </div>
        <div className={styles.checkbox}>
          <label>please accept</label>
          <input
          className={(errors.name && touched.name)?styles.unComplete : styles.complete} 
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changHandler}
            onFocus={focusHandler}
          /><br/>
          <div className={styles.errors}>{errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}</div>
        </div>
        <div className={styles.buttons}>
          <Link to="/signin">Sign In</Link>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
