import { supabase } from "@/lib/supabase/cliente";
import { OAuthResponse } from "@supabase/supabase-js";

// Signup with email & password
export async function signup(email: string, password: string, name: string) {
  const avatar_url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128&length=2`;
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${import.meta.env.VITE_PUBLIC_APP_URL}/verification`,
      data: {
        name,
        email,
        avatar_url
      }
    }
  });
  
  if (error) throw error;
  return data;
}

// Signup with Google
export async function signupWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { 
      redirectTo: `${import.meta.env.VITE_PUBLIC_APP_URL}/auth/callback`,
      queryParams: {
        prompt: 'select_account'
      }
    }
  });
  if (error) throw error;
}
