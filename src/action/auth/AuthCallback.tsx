import { useEffect } from "react"
import { supabase } from "@/lib/supabase/cliente"
import { useNavigate } from "react-router-dom"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleCallback = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        console.log("User logged in:", user)
        navigate("/") // redirect to home after login
      }
    }
    handleCallback()
  }, [navigate])

  return <p>Loading...</p>
}
