import { supabase } from "@/lib/supabase/cliente";

// Request password reset
export async function forgotPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:8080/reset-password", 
  })
  if (error) throw error
  return data
}
