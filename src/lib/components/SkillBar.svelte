<script lang="ts">
  import type { Skill } from '$lib/types';
  let { skill }: { skill: Skill } = $props();

  let el: HTMLDivElement;
  let animated = $state(false);

  $effect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animated = true;
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<div bind:this={el} class="space-y-1">
  <div class="flex justify-between text-sm">
    <span class="font-['JetBrains_Mono'] text-white">{skill.name}</span>
    <span class="text-white/70">{skill.level}%</span>
  </div>
  <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
    <div
      class="h-full rounded-full transition-all duration-700 ease-out"
      style="width: {animated ? skill.level : 0}%; background: linear-gradient(to right, var(--accent), var(--gold));"
    ></div>
  </div>
</div>