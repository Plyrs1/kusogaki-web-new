import { type Writable, writable } from 'svelte/store';
interface PageData {
  description?: string;
  image?: string;
  title?: string;
  name?: string;
  color?: string;
}
const isMobile: Writable<boolean> = writable(false);
const isScrolled: Writable<boolean> = writable(false);
const scrollOffset: Writable<number> = writable(0);
const site: Writable<PageData> = writable({});

export { isMobile, isScrolled, scrollOffset, site };
