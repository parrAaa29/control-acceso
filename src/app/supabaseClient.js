import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cgzizlnadztwflixnyzb.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNneml6bG5hZHp0d2ZsaXhueXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjUzMjIsImV4cCI6MjAyNzkwMTMyMn0.-iWYIW0h4vVwiz2xtn2HFozOf5pCObj_w_32b2sba0g'; // Reemplaza con tu clave de Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
