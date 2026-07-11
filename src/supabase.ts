import { SupabaseClient } from "@supabase/supabase-js";

const REACT_APP_SUPABASE_KEY=process.env.REACT_APP_SUPABASE_KEY!
const REACT_APP_SUPABASE_URL=process.env.REACT_APP_SUPABASE_URL!


const supapabase=new SupabaseClient(REACT_APP_SUPABASE_URL,REACT_APP_SUPABASE_KEY)


export default supapabase