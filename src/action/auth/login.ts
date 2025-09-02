import { supabase } from "@/lib/supabase/cliente";

// Login with email & password
export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error("Supabase login error:", error);
    throw error;
  }

  // Return the data for the component to handle navigation
  return data; 
}

// Login with Google
export async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { 
      redirectTo: "http://localhost:8080/auth/callback",
      queryParams: {
        prompt: 'consent',
        access_type: 'offline'
      }
    }
  });
  
  if (error) {
    console.error("Supabase Google OAuth error:", error);
    throw error;
  }
  
  // No need to check for data.session, as the returned data does not have a session property for OAuth login
  return data;
}
