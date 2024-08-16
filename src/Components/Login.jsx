import { useEffect } from 'react'
import { useUser } from '../Hooks/userStore'
import { useNavigate } from 'react-router-dom'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../Supabase/supabaseClient'

const Login = () => {
  const navigate = useNavigate()
  const { setUser, setIsLogedIn, isLogedIn } = useUser((state) => ({
    setUser: state.setUser,
    isLogedIn: state.isLogedIn,
    setIsLogedIn: state.setIsLogedIn
  }))

  useEffect(() => {
    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user)
        setIsLogedIn(true)
        setUser(session.user)
        // Uncomment for navigation upon sign-in
        // navigate('/')
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
        setIsLogedIn(false)
        // Uncomment for navigation upon sign-out
        // navigate('/login')
      } else if (event === 'USER_UPDATED') {
        console.log('User updated:', session.user)
        setIsLogedIn(true)
        setUser(session.user)
      } else if (event === 'PASSWORD_RECOVERY') {
        console.log('Password recovery event')
      }
    })

    // Cleanup listener on component unmount
    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [setIsLogedIn, setUser, supabase]) // Added dependencies

  return (
    <Auth
      supabaseClient={supabase}
      providers={[]} // Ensure providers array is configured as needed
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: 'tomato',
              brandAccent: 'darkred',
            },
          },
        },
      }}
    />
  )
}

export default Login
