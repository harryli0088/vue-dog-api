<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { ROUTES } from "@/router/routes";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Vue Dog API Test App" />

      <nav>
        <!-- https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings -->
        <RouterLink :to="ROUTES.HOME.path">{{ROUTES.HOME.name}}</RouterLink>
        <RouterLink :to="ROUTES.ABOUT.path">{{ROUTES.ABOUT.name}}</RouterLink>
        <RouterLink :to="ROUTES.RESOURCES.path">{{ROUTES.RESOURCES.name}}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

button {
	color: hsla(160, 100%, 37%, 1);
  background-color: transparent;
  padding: 0.5em;
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 3px;
	outline: none;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
	transform: scale(1.1);
}

button:active {
	transform: scale(0.9);
}

</style>
