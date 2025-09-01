import { supabase } from "@/lib/supabase/cliente";

// Signup with email & password
export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Signup with Google
export async function signupWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:8080/auth/callback" }
  });
  if (error) throw error;
}
