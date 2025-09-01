// supabase/server.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL // or use process.env.SUPABASE_URL if you prefer
const supabaseServiceKey = process.env.VITE_SUPABASE_ANON_KEY

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
