// lib/subscribeEmail.ts
import { supabase } from './supabaseClient';

export async function subscribeEmail(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers') // your table name
    .insert([{ email }]);

  if (error) {
    console.error('Supabase Insert Error:', error.message);
    
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
