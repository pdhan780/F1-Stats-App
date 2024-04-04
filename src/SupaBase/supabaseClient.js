import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lkdwxzplltijcbuiishw.supabase.co"; // Your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZHd4enBsbHRpamNidWlpc2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5ODI1MjEsImV4cCI6MjAyMjU1ODUyMX0.YskcHh62S8EavwrCdeZZioW-xQDKPsPLKlZz1S57Tw4"; // Your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
