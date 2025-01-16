import React, { useEffect, useState } from 'react';
import './LoginCadastro.css'; 

const LoginPage = () => {
  const [formType, setFormType] = useState('login'); // Estado para controlar qual formulário mostrar

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    setFormType(type === 'signup' ? 'signup' : 'login');
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.className = formType === 'signup' ? 'sign-up-js' : 'sign-in-js';
  }, [formType]);

  return (
    <div className="container">
      {formType === 'login' ? (
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Seja bem-vindo!</h2>
            <p className="description description-primary">Ainda não tem conta?</p>
            <p className="description description-primary">Clique no botão abaixo</p>
            <button onClick={() => setFormType('signup')} className="btn btn-primary">Cadastro</button>
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
      ) : (
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Seja bem-vindo!</h2>
            <p className="description description-primary">Caso já tenha conta cadastrada</p>
            <p className="description description-primary">Por favor, clique no botão abaixo</p>
            <button onClick={() => setFormType('login')} className="btn btn-primary">Login</button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Crie uma conta</h2>
            <form className="form">
              <label className="label-input">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Nome" />
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
      )}
    </div>
  );
};

export default LoginPage;
