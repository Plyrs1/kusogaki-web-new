<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Panel from '$lib/components/Panel.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container flex w-full flex-col gap-4">
  <Hero header="Our|Team Member" />
  <Panel title="The Team" className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {#each data.teamData as team}
      <div class=" rounded-md bg-kusogaki-indigo font-lemon-milk">
        <div class="grid aspect-square w-full overflow-hidden rounded-t-md">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <img class="h-full w-full duration-300 hover:rotate-6 hover:scale-110" src={team.pic} alt="" />
          </a>
        </div>
        <div class="m-2">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <h5 class="my-2 text-sm font-bold text-white sm:text-lg">{team.name}</h5>
          </a>
          <div class="flex w-full flex-wrap gap-1">
            {#each team.badges as badge}
              <span class="{data.badgeLists[badge].color} rounded px-1 py-0 text-[0.5rem] font-medium text-gray-700 sm:px-2.5 sm:py-0.5 sm:text-xs"
                >{data.badgeLists[badge].name}</span
              >
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </Panel>
</div>
