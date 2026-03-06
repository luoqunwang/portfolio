<script lang="ts">
  let { href, class: cls = '', children, ...rest } = $props();
</script>

{#if href}
  <a {href} class="inline-flex items-center justify-center font-medium transition-opacity hover:opacity-90 {cls}" {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button class="inline-flex items-center justify-center font-medium transition-opacity hover:opacity-90 {cls}" {...rest}>
    {@render children?.()}
  </button>
{/if}