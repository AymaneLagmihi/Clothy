import { useEffect } from "react"
import { supabase } from "@/lib/supabase/cliente"
import { useNavigate } from "react-router-dom"

const AuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()

      // Get the hash fragment from the URL
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const type = hashParams.get("type")

      if (error) {
        console.error("Auth error:", error)
        navigate("/login")
        return
      }

      // If this is an email verification callback, redirect to verification page
      if (type === "email_verification") {
        navigate("/verification")
        return
      }

      // Otherwise, redirect to dashboard for normal sign-ins
      if (session) {
        navigate("/dashboard")
      } else {
        navigate("/login")
      }
    }

    handleCallback()
  }, [navigate])

  return null
}

export default AuthCallback
