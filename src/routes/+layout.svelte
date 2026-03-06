<script lang="ts">
  import './layout.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>

<!-- Grain texture overlay -->
<div class="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
  style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E'); background-repeat: repeat; background-size: 128px 128px;">
</div>

<!-- Ambient blobs -->
<div class="fixed top-[-20vh] right-[-10vw] w-[40vw] h-[40vw] rounded-full pointer-events-none z-0"
  style="background: radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%);">
</div>
<div class="fixed bottom-[-15vh] left-[-5vw] w-[30vw] h-[30vw] rounded-full pointer-events-none z-0"
  style="background: radial-gradient(circle, rgba(244,162,97,0.06) 0%, transparent 70%);">
</div>

<Navbar />

<main class="relative z-10 pt-16 min-h-screen">
  {@render children()}
</main>

<Footer />