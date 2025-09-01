import { supabase } from "@/lib/supabase/cliente";

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
