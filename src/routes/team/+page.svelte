<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container flex flex-col gap-4">
  <Hero header="Our|Team Member" />
  <div class="mb-12 flex flex-col items-center gap-4 rounded-2xl bg-kusogaki-dark p-4">
    <div class="text-center text-5xl uppercase text-white">The Team</div>
    <div class="container grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {#each data.teamData as team}
        <div class=" rounded-md bg-kusogaki-indigo font-lemon-milk">
          <div class="grid aspect-square w-full overflow-hidden rounded-t-md">
            <a href={team.profileUrl} target="_blank" rel="noreferrer">
              <img class="duration-300 hover:rotate-6 hover:scale-110" src={team.pic} alt="" />
            </a>
          </div>
          <div class="m-2">
            <a href={team.profileUrl} target="_blank" rel="noreferrer">
              <h5 class="my-2 text-sm font-bold text-white sm:text-lg">{team.name}</h5>
            </a>
            <div class="flex w-full flex-wrap gap-1">
              {#each team.badges as badge}
                <span class="{data.badgeLists[badge].color} rounded px-2.5 py-0.5 text-xs font-medium text-gray-700"
                  >{data.badgeLists[badge].name}</span
                >
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
