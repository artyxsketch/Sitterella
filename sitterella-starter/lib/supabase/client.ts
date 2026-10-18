import { createBrowserClient } from '@supabase/ssr';

/**
 * Da usare solo quando configureremo la registrazione e le funzioni dinamiche.
 * Non inserire mai qui chiavi segrete o di servizio.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error('Configura NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local');
  }
  return createBrowserClient(url, key);
}
