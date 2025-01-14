import React, { useEffect } from 'react';
import './LoginCadastro.css'; // Supondo que os estilos estejam em style.css

const LoginPage = () => {
  useEffect(() => {
    const btnSignin = document.querySelector("#signin");
    const btnSignup = document.querySelector("#signup");
    const body = document.querySelector("body");

    btnSignin.addEventListener("click", () => {
      body.className = "sign-in-js";
    });

    btnSignup.addEventListener("click", () => {
      body.className = "sign-up-js";
    });

    return () => {
      btnSignin.removeEventListener("click", () => {
        body.className = "sign-in-js";
      });
      btnSignup.removeEventListener("click", () => {
        body.className = "sign-up-js";
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">welcome back!</h2>
          <p className="description description-primary">To keep connected with us</p>
          <p className="description description-primary">please login with your personal info</p>
          <button id="signin" className="btn btn-primary">sign in</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">create account</h2>
          <div className="social-media">
            <ul className="list-social-media">
              <a className="link-social-media" href="/facebook"><li className="item-social-media"><i className="fab fa-facebook-f"></i></li></a>
              <a className="link-social-media" href="/"><li className="item-social-media"><i className="fab fa-google-plus-g"></i></li></a>
              <a className="link-social-media" href="/"><li className="item-social-media"><i className="fab fa-linkedin-in"></i></li></a>
            </ul>
          </div>
          <p className="description description-second">or use your email for registration:</p>
          <form className="form">
            <label className="label-input">
              <i className="far fa-user icon-modify"></i>
              <input type="text" placeholder="Name" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="Email" />
            </label>
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Password" />
            </label>
            <button className="btn btn-second">sign up</button>
          </form>
        </div>
      </div>
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">hello, friend!</h2>
          <p className="description description-primary">Enter your personal details</p>
          <p className="description description-primary">and start journey with us</p>
          <button id="signup" className="btn btn-primary">sign up</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">sign in to developer</h2>
          <div className="social-media">
            <ul className="list-social-media">
              <a className="link-social-media" href="/"><li className="item-social-media"><i className="fab fa-facebook-f"></i></li></a>
              <a className="link-social-media" href="/"><li className="item-social-media"><i className="fab fa-google-plus-g"></i></li></a>
              <a className="link-social-media" href="/"><li className="item-social-media"><i className="fab fa-linkedin-in"></i></li></a>
            </ul>
          </div>
          <p className="description description-second">or use your email account:</p>
          <form className="form">
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="Email" />
            </label>
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Password" />
            </label>
            <a className="password" href="/">forgot your password?</a>
            <button className="btn btn-second">sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
