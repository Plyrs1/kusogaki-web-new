import type { Session } from '@supabase/supabase-js';
import { type Writable, writable } from 'svelte/store';

import type { UserProfile } from '$lib/types/profile';

const session: Writable<Session | null> = writable(null);
const profile: Writable<Partial<UserProfile> | null> = writable(null);

export { profile, session };
