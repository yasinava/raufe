import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validate } from "./hooks/Validate";
import styles from "./styles/SignInLogin.module.css";
import Home from "./assets/icons/home-svgrepo-com.svg";
import connect from "./assets/icons/connect-svgrepo-com.svg";

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [touched , setTouched] = useState({});
  const [errors , setErrors] = useState({});

  useEffect(() => {
    setErrors(Validate(data, "signIn"))
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
        <h2 className={styles.title} >Sign In</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
          className={(errors.name && touched.name)?styles.unComplete : styles.complete} 
        
            type="text"
            name="name"
            value={data.name}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errors} >{errors.name && touched.name && <span>{errors.name}</span>}</div>
        </div>
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
        <div className={styles.formField}>
          <label>ConfirmPassword</label>
          <input
          className={(errors.confirmPassword && touched.confirmPassword)?styles.unComplete : styles.complete} 
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errors}>{errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}</div>
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
          <Link to="/login">Login</Link>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
