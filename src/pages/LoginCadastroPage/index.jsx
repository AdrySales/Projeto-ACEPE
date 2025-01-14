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
          <h2 className="title title-primary">Seja bem-vindo!</h2>
          <p className="description description-primary">Caso já tenha conta cadastrada</p>
          <p className="description description-primary">Por favor, clique no botão a baixo </p>
          <button id="signin" className="btn btn-primary">Login</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Crie uma conta</h2>
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
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="Confirmação de Email" />
            </label>
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Senha" />
            </label>
            <button className="btn btn-second">Cadastrar</button>
          </form>
        </div>
      </div>
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Seja bem-vindo!</h2>
          <p className="description description-primary">Ainda não tem conta?</p>
          <p className="description description-primary">Clique no botão a baixo</p>
          <button id="signup" className="btn btn-primary">Cadastro</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Fazer Login</h2>
          <form className="form">
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="Email" />
            </label>
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Senha" />
            </label>
            <a className="password" href="/">Esqueceu a senha?</a>
            <button className="btn btn-second">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
