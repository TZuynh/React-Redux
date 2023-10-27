import { NavLink } from "react-router-dom";

export default function Login(){
    return(
        <div class="login-item">
        <h1 class="font-login">LOGIN</h1>

        <div class="username">
            <input type="email" id="loginName" class="form-control" placeholder="Email / Username"/>
            <label for="loginName" class="form-label"></label>
        </div>

        <div class="password">
            <input type="password" id="loginPassword" class="form-control"  placeholder="Password"/>
            <label for="loginPassword" class="form-label"></label>
        </div>
        <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked/>
            <label class="form-check-label" for="loginCheck"> Remember me </label>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
            <a class="forgot-login" href="#!">Forgot password?</a>
        </div>
        

        <button type="submit" class="btn-signIn">Sign in</button>
        
        <div class="text-center">
            Not a member?
            <NavLink class="register-login" to="/Register">Register</NavLink>
        </div>
    </div>
    );
}