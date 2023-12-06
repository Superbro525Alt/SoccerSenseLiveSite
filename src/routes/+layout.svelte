<script lang="ts">
  import "../app.pcss";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DeviceMockup } from 'flowbite-svelte';
      import { Carousel, Thumbnails } from 'flowbite-svelte';
        import { DarkMode } from 'flowbite-svelte';
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from 'flowbite-svelte';

</script>

<svelte:head>
  <title>Sports Sense Live</title>
</svelte:head>

<Navbar class="bg-gray-100 dark:bg-gray-800">
  <NavBrand href="/" class="h-[100%] p-0">
    <img src="/FLL%20SportSenseLive%20Logo-cropped.svg" alt="Sports Sense Live Logo" class="h-[100%] w-[100%]" />
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/roadmap">Roadmap</NavLi>
    <NavLi href="/download">Download</NavLi>
    <NavLi href="/feedback">User Feedback</NavLi>


  </NavUl>
</Navbar>

<div class="h-[80%]">
    <slot />
</div>


<style>
  /* make all fonts scaled to screen resolution */

</style>
