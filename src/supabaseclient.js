import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://husmiyfbldyrrgwihgpn.supabase.co/";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1c21peWZibGR5cnJnd2loZ3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MDg0NDgsImV4cCI6MjA1Nzk4NDQ0OH0.Nk2mhRta2VmpniUjFbvakGC-Nf0NDZ0KMAADLSb9Bpc";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
