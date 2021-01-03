<template>
  <div>
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a
            href="/"
            aria-current="page"
            class="home-link active--exact active"
            ><img
              src="/assets/img/logo.332701b7.svg"
              alt="Nichlas W. Andersen"
              class="logo"
          /></a>
        </div>
        <nav class="nav right">
          <a href="/journal" class="nav__link">Journal</a>
          <a href="/contact" class="nav__link">Say Hi!</a>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
