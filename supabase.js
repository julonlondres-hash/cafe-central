import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ycutdjdwyrfshmwmwehg.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_ygBiFbNO3pnRIJG2TJAW4A_cyBz6Lzz';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);