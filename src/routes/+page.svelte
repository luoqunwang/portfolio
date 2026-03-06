<script lang="ts">
  import { personal, projects, experiences } from '$lib/data';
  import { Github, Linkedin, Mail, ExternalLink } from 'lucide-svelte';
  import avatar from '$lib/assets/avatar.jpg';
</script>

<svelte:head>
  <title>{personal.name}</title>
</svelte:head>

<!-- Hero -->
<section class="max-w-5xl mx-auto px-6 py-24 md:py-36">
  <div class="flex flex-col md:flex-row items-center justify-between gap-12" style="animation: fadeUp 0.7s ease both;">
    
    <!-- Left: Text -->
    <div class="flex-1">
      <p class="font-['JetBrains_Mono'] text-(--accent) text-sm tracking-widest mb-4">
        Hello, I'm
      </p>
      <h1 class="font-['Playfair_Display'] text-5xl md:text-7xl font-bold leading-tight mb-6">
        <span class="text-gradient">{personal.name}</span>
      </h1>
      <p class="text-xl md:text-2xl text-(--muted) max-w-2xl mb-4 leading-relaxed">
        {personal.title}
      </p>
      <p class="text-(--muted) max-w-xl leading-relaxed mb-10">
        {personal.bio}
      </p>

      <div class="flex flex-wrap gap-4 items-center">
        <a href="/about" class="px-6 py-3 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity" style="background: var(--accent);">
          View My Work
        </a>
        <div class="flex gap-4 items-center">
          <a href="mailto:{personal.email}" class="text-(--muted) hover:text-(--accent) transition-colors" aria-label="Email"><Mail size={20}/></a>
          <a href={personal.github} target="_blank" rel="noopener" class="text-(--muted) hover:text-(--accent) transition-colors" aria-label="GitHub"><Github size={20}/></a>
          <a href={personal.linkedin} target="_blank" rel="noopener" class="text-(--muted) hover:text-(--accent) transition-colors" aria-label="LinkedIn"><Linkedin size={20}/></a>
        </div>
      </div>
    </div>

    <!-- Right: Avatar -->
    <div class="shrink-0 flex justify-center">
      <div class="relative">
        <!-- Glow behind -->
        <div class="absolute inset-0 rounded-[60%_40%_60%_40%/50%_50%_50%_50%] blur-2xl opacity-30" style="background: var(--accent);"></div>
        <!-- Photo -->
        <img
          src={avatar}
          alt={personal.name}
          class="relative w-56 h-72 md:w-64 md:h-80 object-cover object-top"
          style="border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; border: 2px solid rgba(230,57,70,0.3);"
        />
      </div>
    </div>

  </div>
</section>

<!-- Stats -->
<section class="border-y border-white/10 py-12" style="animation: fadeIn 1s ease both;">
  <div class="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {#each [
      { value: '2', label: 'Degrees' },
      { value: String(experiences.length), label: 'Roles' },
      { value: '9+', label: 'Skills' },
      { value: String(projects.length), label: 'Projects' },
    ] as stat}
      <div>
        <p class="font-['Playfair_Display'] text-4xl font-bold text-gradient">{stat.value}</p>
        <p class="text-sm text-(--muted) mt-1">{stat.label}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Projects -->
<section class="max-w-5xl mx-auto px-6 py-20">
  <h2 class="font-['Playfair_Display'] text-3xl font-bold mb-10">
    Selected <span class="text-gradient">Projects</span>
  </h2>
  <div class="grid md:grid-cols-2 gap-6">
    {#each projects as project}
      <div class="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.02]">
        <h3 class="font-['Playfair_Display'] text-xl font-bold mb-2">{project.title}</h3>
        <p class="text-sm text-(--muted) leading-relaxed mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {#each project.tags as tag}
            <span class="font-['JetBrains_Mono'] text-xs px-2 py-1 rounded bg-white/5 text-(--muted)">{tag}</span>
          {/each}
        </div>
        <a href={project.github} target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline">
          <Github size={14}/> View on GitHub <ExternalLink size={12}/>
        </a>
      </div>
    {/each}
  </div>
</section>