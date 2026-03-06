<script lang="ts">
  import { personal } from '$lib/data';
  import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="border-t border-white/10 mt-24 py-10 px-6">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-sm text-(--muted)">
      © {new Date().getFullYear()} {personal.name}
    </p>
    <div class="flex gap-5">
      <a href="mailto:{personal.email}" aria-label="Email" class="text-(--muted) hover:text-(--accent) transition-colors">
        <Mail size={18} />
      </a>
      <a href={personal.github} target="_blank" rel="noopener" aria-label="GitHub" class="text-(--muted) hover:text-(--accent) transition-colors">
        <Github size={18} />
      </a>
      <a href={personal.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" class="text-(--muted) hover:text-(--accent) transition-colors">
        <Linkedin size={18} />
      </a>
    </div>
  </div>
</footer>