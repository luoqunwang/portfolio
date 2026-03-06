<script lang="ts">
  import { personal, experiences } from '$lib/data';
  import { Briefcase, Users, ChevronDown } from 'lucide-svelte';

  let open = $state<string | null>(null);
  const toggle = (id: string) => (open = open === id ? null : id);
</script>

<svelte:head><title>Experience — {personal.name}</title></svelte:head>

<div class="max-w-5xl mx-auto px-6 py-20">
  <div style="animation: fadeUp 0.6s ease both;" class="mb-12">
    <p class="font-['JetBrains_Mono'] text-(--accent) text-sm tracking-widest mb-3">Experience</p>
    <h1 class="font-['Playfair_Display'] text-5xl font-bold">
      Where I've <span class="text-gradient">Worked</span>
    </h1>
  </div>

  <div class="space-y-4">
    {#each experiences as exp}
      <div class="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">

        <button class="w-full text-left px-6 py-5 flex items-center justify-between gap-4" onclick={() => toggle(exp.id)}>
          <div class="flex items-start gap-3">
            <span class="mt-0.5" style="color: var(--accent);">
              {#if exp.type === 'leadership'}<Users size={16}/>{:else}<Briefcase size={16}/>{/if}
            </span>
            <div>
              <p class="font-semibold text-(--ink)">{exp.role}</p>
              <p class="text-(--muted) text-sm">{exp.company} · {exp.location}</p>
            </div>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <span class="font-['JetBrains_Mono'] text-xs text-(--muted)">{exp.period}</span>
            <ChevronDown size={16} class="text-(--muted) transition-transform duration-200 {open === exp.id ? 'rotate-180' : ''}"/>
          </div>
        </button>

        {#if open === exp.id}
          <div class="px-6 pb-5 border-t border-white/5">
            <ul class="mt-4 space-y-2">
              {#each exp.bullets as bullet}
                <li class="text-sm text-(--muted) leading-relaxed flex gap-2">
                  <span class="mt-1.5 shrink-0" style="color: var(--accent);">—</span>
                  {bullet}
                </li>
              {/each}
            </ul>
          </div>
        {/if}

      </div>
    {/each}
  </div>
</div>