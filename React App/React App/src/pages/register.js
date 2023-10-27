export default function Register(){
    return(
    <div class="register-item">
        <h1 class="font-login">REGISTER</h1>
        
        <div class="name-register">
            <input type="text" id="registerName" class="form-control" placeholder="Name"/>
            <label for="registerName" class="form-register"></label>
        </div>

        <div class="username-register">
            <input type="text" id="registerUsername" class="form-control" placeholder="Username"/>
            <label for="registerUsername" class="form-register"></label>
        </div>

        <div class="email-register">
            <input type="email" id="registerEmail" class="form-control" placeholder="Email"/>
            <label for="registerEmail" class="form-register"></label>
        </div>

        <div class="password-register">
            <input type="password" id="registerPassword" class="form-control"  placeholder="Password"/>
            <label for="registerPassword" class="form-label"></label>
        </div>

        <div class="password-repeatRegister">
            <input type="password" id="registerRepeatPassword" class="form-control"  placeholder="Repeat Password"/>
            <label for="registerRepeatPassword" class="form-label"></label>
        </div>

        <div class="form-check-register mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked/>
            <label class="form-check-label" for="registerCheck"> I have read and agree to the terms </label>
        </div>
        <button class="btn-register">SIGN IN</button>
    </div>
    );
}