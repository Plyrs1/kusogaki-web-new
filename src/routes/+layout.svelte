<script>
  import '../app.pcss';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="mx-0 min-h-screen w-screen p-0 text-center transition-colors duration-1000">
  <Navbar />
  <slot />
  <Footer />
</main>

<style>
  main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/roxy1.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
