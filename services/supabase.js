import { createClient } from "@supabase/supabase-js"

const key = process.env.EXPO_PUBLIC_SUPABASE_KEY
const url = process.env.EXPO_PUBLIC_SUPABASE_URL

const supabase = createClient(url, key)

export default supabase