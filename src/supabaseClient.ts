// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bamezldmqavuiqkxodvr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWV6bGRtcWF2dWlxa3hvZHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2Mzc5OTQsImV4cCI6MjA0NjIxMzk5NH0.fjAU_lZEnuKsgo7wQL6K_43KfrbkgulpfiLu-M8nhcA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
