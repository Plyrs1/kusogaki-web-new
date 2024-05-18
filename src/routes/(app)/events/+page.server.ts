import type { EventData } from '$lib/types/event.js';

import type { PageServerLoad } from './$types.js';
export const config = {
  isr: {
    expiration: 3600
  }
};

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data: events, error } = await supabase.from('events').select('*').order('start_at', { ascending: false });

  if (error) {
    console.error(error);
    return { eventData: [] };
  }

  const eventData: Array<EventData> = events.map((i) => {
    return {
      title: i.title,
      date: i.start_at,
      image: i.img,
      url: i.anilist_url,
      isAnnounced: i.is_announced
    };
  });
  return { eventData };
};
