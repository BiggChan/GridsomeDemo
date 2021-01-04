<template>
  <div>
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link
            href="/"
            aria-current="page"
            class="home-link active--exact active"
            ><img :src="logo" alt="Nichlas W. Andersen" class="logo"
          /></g-link>
        </div>
        <nav class="nav right">
          <g-link href="/journal" class="nav__link">Journal</g-link>
          <g-link href="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>

    <slot />

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2019</span>
      </div>
    </footer>
  </div>
</template>
<script>
import logo from '@/assets/image/logo.svg';
export default {
  data() {
    return {
      logo
    }
  }
};
</script>
<style></style>
