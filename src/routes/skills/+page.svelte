<script lang="ts">
  import { personal, skills } from '$lib/data';
  import SkillBar from '$lib/components/SkillBar.svelte';

  type Cat = 'all' | 'language' | 'database' | 'knowledge' | 'tool';
  const categories: Cat[] = ['all', 'language', 'database', 'knowledge', 'tool'];

  let active = $state<Cat>('all');
  const filtered = $derived(active === 'all' ? skills : skills.filter(s => s.category === active));
</script>

<svelte:head><title>Skills — {personal.name}</title></svelte:head>

<div class="max-w-5xl mx-auto px-6 py-20">
  <div style="animation: fadeUp 0.6s ease both;" class="mb-12">
    <p class="font-['JetBrains_Mono'] text-(--accent) text-sm tracking-widest mb-3">Skills</p>
    <h1 class="font-['Playfair_Display'] text-5xl font-bold">
      What I <span class="text-gradient">Know</span>
    </h1>
  </div>

  <!-- Filter tabs -->
  <div class="flex flex-wrap gap-2 mb-10">
    {#each categories as cat}
      <button
        onclick={() => (active = cat)}
        class="px-4 py-1.5 rounded-full text-sm font-['JetBrains_Mono'] transition-all duration-200"
        style={active === cat
          ? 'background: #e63946; color: white;'
          : 'background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.5);'}
      >
        {cat}
      </button>
    {/each}
  </div>

  <!-- Skill bars -->
  <div class="grid md:grid-cols-2 gap-x-16 gap-y-6">
    {#each filtered as skill (skill.name)}
      <SkillBar {skill} />
    {/each}
  </div>
</div>