import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'COLE_SUA_URL_AQUI'
const supabaseAnonKey = 'COLE_SUA_CHAVE_AQUI'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)