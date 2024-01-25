import type { EventData } from '$lib/components/event';

import type { PageServerLoad } from './$types.js';
export const config = {
  isr: {
    expiration: 3600
  }
};

export const load: PageServerLoad = async () => {
  const eventData: Array<EventData> = [
    { title: 'Upcoming', date: new Date('02-11-2024').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Mystery Day', date: new Date('05-14-2024').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Waifu Day', date: new Date('08-2-2024').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Monster Day', date: new Date('11-20-2024').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Shoujo Day', date: new Date('02-28-2023').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Sakura Day', date: new Date('03-27-2023').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Art Day', date: new Date('04-15-2023').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Super Hero Day', date: new Date('04-28-2023').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Light Novel Day', date: new Date('03-25-2023').getTime(), image: '/assets/images/640x214.svg' },
    { title: 'Studio Ghibli Day', date: new Date('06-15-2023').getTime(), image: '/assets/images/640x214.svg' }
  ];
  return { eventData };
};
