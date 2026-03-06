<script lang="ts">
  import { page } from '$app/stores';
  import { navItems } from '$lib/data';
  import { Menu, X } from 'lucide-svelte';

  let menuOpen = $state(false);
  const toggle = () => (menuOpen = !menuOpen);
  const close = () => (menuOpen = false);
</script>

<header class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#1a1a2e]/80">
  <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

    <a href="/" onclick={close} class="font-['Playfair_Display'] text-lg font-bold text-gradient">LW</a>

    <ul class="hidden md:flex gap-8">
      {#each navItems as item}
        <li>
          <a href={item.href} class="text-sm font-medium tracking-wide transition-colors duration-200 {$page.url.pathname === item.href ? 'text-(--accent)' : 'text-(--muted) hover:text-(--ink)'}">
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <button class="md:hidden text-(--muted) hover:text-(--ink)" onclick={toggle} aria-label="Menu">
      {#if menuOpen}<X size={20} />{:else}<Menu size={20} />{/if}
    </button>

  </nav>

  {#if menuOpen}
    <div class="md:hidden border-t border-white/10 bg-[#1a1a2e]/95 px-6 py-4 flex flex-col gap-4">
      {#each navItems as item}
        <a href={item.href} onclick={close} class="text-sm font-medium {$page.url.pathname === item.href ? 'text-(--accent)' : 'text-(--muted)'}">
          {item.label}
        </a>
      {/each}
    </div>
  {/if}
</header>