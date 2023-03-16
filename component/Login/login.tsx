import Input from "../formfield/input/input";
import style from './login.module.css'

const Login = () => {
    return (
        <div className={style.loginBlock} >
            <section className={style.loginContainer} >
                <h3>SIGN IN TO YOUR ACCOUNT</h3>
                <div className={style.loginControl} >
                    <Input label="Email Address" required />
                    <Input label="Password" required />
                    <button>SIGN IN</button>
                </div>
            </section>
        </div>

    )
}

export default Login;