import { supabase } from "@/lib/supabase/cliente";

// Login with email & password
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

// Login with Google
export async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:8080/auth/callback" }
  })
  if (error) throw error
  return data
}
