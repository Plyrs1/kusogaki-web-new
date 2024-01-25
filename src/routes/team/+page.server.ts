import type { PageServerLoad } from './$types';
import type { TeamBadge, TeamData } from './team';
const badgeLists: Array<TeamBadge> = [
  { name: 'null', color: 'bg-black' },
  { name: 'Admin', color: 'bg-kusogaki-red' },
  { name: 'Planning', color: 'bg-kusogaki-green' },
  { name: 'Design', color: 'bg-kusogaki-blue' },
  { name: 'Developer', color: 'bg-kusogaki-yellow' },
  { name: 'New Recruit', color: 'bg-kusogaki-cyan' },
  { name: 'Retired', color: 'bg-gray-400' }
];
const teamData: Array<TeamData> = [
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'User',
    pic: 'https://placehold.co/250x250',
    profileUrl: 'https://anilist.co/user/Plyrs',
    badges: [1, 2, 3, 4, 5, 6]
  }
];

export const load = (() => {
  return { badgeLists, teamData };
}) satisfies PageServerLoad;
