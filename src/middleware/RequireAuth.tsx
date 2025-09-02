import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/cliente"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) return <LoadingSpinner size="lg" text="Checking authentication..." />
  if (!user) return <Navigate to="/login" />

  return children
}
