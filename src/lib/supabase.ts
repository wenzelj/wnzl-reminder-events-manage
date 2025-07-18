import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://mveernvsywcvrzrkakdq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12ZWVybnZzeXdjdnJ6cmtha2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MTU3MzQsImV4cCI6MjA2ODI5MTczNH0.ryL9OtWxwCSqhN9j9CFgfHE7W0DdUbELVdSk_gKX6Jo';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };