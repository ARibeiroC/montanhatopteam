import React from "react";
import './Login.css'

function FormLogin() {
    return (
        <div className="login">
            <form method="post">
                <div className="logo">
                    <img src="./public" alt="" />
                </div>
                <div className="fields">
                    <label>
                        <span>E-mail</span>
                        <input type="email" name="email" id="email" required /> 
                    </label>
                </div>
                <div className="fields">
                    <label>
                        <span>Senha</span>
                        <input type="text" name="password" id="password" required />
                    </label>
                </div>
                <div className="fields">
                    <p>Esqueceu a senha? <span><a href="#" id="recover-password">Recuperar</a></span></p>
                </div>
                <div className="fields">
                    <button id="login" type="submit" className="action">Entrar</button>
                    <button id="register" type="button" className="action">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export {FormLogin}