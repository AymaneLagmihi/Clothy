import { supabase } from "@/lib/supabase/cliente";

// Request password reset
export async function forgotPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`, 
  })
  if (error) throw error
  return data
}
