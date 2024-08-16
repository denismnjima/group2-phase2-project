import { useUser } from '../Hooks/userStore'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import supabase from '../Supabase/supabaseClient'

function Navbar() {
  const { setUser, setIsLogedIn, isLogedIn, user } = useUser((state) => ({
    setUser: state.setUser,
    isLogedIn: state.isLogedIn,
    setIsLogedIn: state.setIsLogedIn,
    user: state.user
  }))

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Error logging out:', error)
    } else {
      setIsLogedIn(false)
    }
  }

  return (
    <header>
      <h2 className="logo">Culinary <span>Voyage</span></h2>
      <nav>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/search'><li>Search</li></Link>
          <Link to='/recipes'><li>Recipes</li></Link>
          <Link to='/favourites'><li>Favourites</li></Link>
        </ul>
      </nav>
      <div>
        <nav>
          <ul>
            {isLogedIn ? (
              <>
                <span>{user.email}</span>
                <li onClick={handleLogout}><b>Log Out</b></li>
              </>
            ) : (
              <Link to='/login'><li>Log In</li></Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
