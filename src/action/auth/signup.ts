import { supabase } from "@/lib/supabase/cliente";
import { OAuthResponse } from "@supabase/supabase-js";

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
    options: { 
      redirectTo: "http://localhost:8080/auth/callback",
      queryParams: {
        prompt: 'select_account'
      }
    }
  });
  if (error) throw error;
}
