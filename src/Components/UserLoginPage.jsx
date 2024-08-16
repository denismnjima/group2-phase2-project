import { useUser } from "../Hooks/userStore"
import chefImage from '../assets/chef.jpg'
import Login from "./Login"
function UserLoginPage() {
    const {setUser,setIsLogedIn,isLogedIn,user} = useUser((state)=>({
        setUser:state.setUser,
        isLogedIn:state.isLogedIn,
        setIsLogedIn:state.setIsLogedIn,
        user:state.user
      }))
  return (
    <div className="login-page">
        {
            isLogedIn?(<>
                <div  className="err">
                    <img src={chefImage} />
                    <h2>You are already Loged in as:</h2>
                    <p>{user.email}</p>
                </div>
            </>):(<div className="login-container">
                <h2>Login to Culinary Voyage</h2>
                <Login />
            </div>)
        }
    </div>
  )
}

export default UserLoginPage