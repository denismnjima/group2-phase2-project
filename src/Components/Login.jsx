
import './Login.css'
function Login() {
  return (
    <div>
        <div className="divcontained">
            <form>
                <label htmlFor="">
                <p>email</p>
                <input type="email" />
                </label>
                <label htmlFor="">
                    <p>password</p>
                    <input type="password" />
                    </label>
                    <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login