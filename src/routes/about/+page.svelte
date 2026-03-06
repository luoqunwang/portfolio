<script lang="ts">
  import { personal, education } from '$lib/data';
  import { GraduationCap, MapPin, Mail } from 'lucide-svelte';
</script>

<svelte:head><title>About — {personal.name}</title></svelte:head>

<div class="max-w-5xl mx-auto px-6 py-20">
  <div style="animation: fadeUp 0.6s ease both;">
    <p class="font-['JetBrains_Mono'] text-(--accent) text-sm tracking-widest mb-3">About</p>
    <h1 class="font-['Playfair_Display'] text-5xl font-bold mb-12">
      Who I <span class="text-gradient">Am</span>
    </h1>
  </div>

  <div class="grid md:grid-cols-2 gap-16">
    <!-- Bio -->
    <div class="space-y-5 text-(--muted) leading-relaxed">
      <p>{personal.bio}</p>
      <p>My work sits at the intersection of humanistic inquiry and systems thinking — I'm drawn to questions of how knowledge is structured, stored, and made discoverable, whether in archival collections, relational databases, or graph-based models.</p>
      <p>Outside of research and code, I think carefully about design: how interfaces communicate meaning, and how structure shapes understanding.</p>

      <div class="pt-4 space-y-2">
        <div class="flex items-center gap-2 text-sm">
          <MapPin size={14} style="color: var(--accent);"/>
          {personal.location}
        </div>
        <div class="flex items-center gap-2 text-sm">
          <Mail size={14} style="color: var(--accent);"/>
          {personal.email}
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <h2 class="font-['Playfair_Display'] text-2xl font-bold mb-6 flex items-center gap-2">
        <GraduationCap size={22} style="color: var(--gold);"/> Education
      </h2>
      <div class="space-y-6">
        {#each education as edu}
          <div style="border-left: 2px solid rgba(230,57,70,0.4); padding-left: 1.25rem;">
            <p class="font-semibold text-(--ink)">{edu.degree}</p>
            <p class="text-(--muted) text-sm">{edu.school}</p>
            {#if edu.department}<p class="text-(--muted) text-sm">{edu.department}</p>{/if}
            {#if edu.detail}<p class="font-['JetBrains_Mono'] text-xs mt-1" style="color: var(--gold);">{edu.detail}</p>{/if}
            <p class="text-xs text-(--muted) mt-1 opacity-60">{edu.period}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>