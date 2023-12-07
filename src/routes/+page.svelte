<script lang="ts">
    // import stuff from flowbite-svelte
      import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DeviceMockup } from 'flowbite-svelte';
      import { Carousel, Thumbnails } from 'flowbite-svelte';
      import { Card, Heading } from 'flowbite-svelte';
      import { AdvancedRating, Rating } from 'flowbite-svelte';
    import {onMount} from "svelte";
      import { AccordionItem, Accordion } from 'flowbite-svelte';



</script>


<div class="flex flex-row space-x-10 mt-10 items-center w-[90%] mx-auto">
  <Card class="w-full max-w-2xl mx-auto h-[400px] overflow-scroll">
    <Heading class="text-2xl font-semibold">Sports Sense Live</Heading>

    <p class="mt-4 text-gray-600 dark:text-gray-400 scaling">
      Sports Sense Live is a way of watching soccer games with your friends and family. It's a way of connecting with your loved ones and sharing the experience of watching a soccer game together.
      <br/>
      <br/>
      It has many features, allowing it to be used for mid game and post game analysis, it can do automatic scoring and referring of games and can make every sports game more fun, engaging and fair.
    </p>
  </Card>
  <Card class="w-full max-w-2xl mx-auto h-[400px] overflow-scroll">
    <img src="/images/img_1.png" class="w-[100%] h-[100%] object-contain" alt="Soccer Sense Live Field" />
  </Card>
</div>

<br/>
<br/>

<Card class="min-w-[90%] max-w-2xl mx-auto overflow-scroll">
  <Heading class="text-2xl font-semibold">Features</Heading>

  <p class="mt-4 text-gray-600 dark:text-gray-400 scaling">
    <ul class="list-disc list-inside">
      <li>Watch games with friends and family</li>
      <li>Automatic scoring and refereeing</li>
      <li>Mid game and post game analysis</li>
      <li>Make every sports game more fun, engaging and fair</li>
    </ul>
  <p/>
</Card>

<br/>
<br/>

<div class="flex flex-row space-x-10 items-center w-[90%] mx-auto">
  <Card class="w-full max-w-2xl mx-auto h-[400px] overflow-scroll">
    <Heading class="text-2xl font-semibold">User Stories</Heading>

    <br/>

    <Accordion>
  <AccordionItem>
    <span slot="header">Matt Clark-Massera</span>
    <p class="text-gray-500 dark:text-gray-400">
      5/5 collisions in sailing can be subject to purely where a camera is positioned. This means that if a player happens to be in front of a camera, or the camera was focusing somewhere else, decisions can be uninformed and ultimately unfair. this technology really helps to keep accuracy where cameras would fail due to the aforementioned situations.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Referee</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      5/5 this made refereeing the game much easier and allowed me to much more quickly check calls that would otherwise require much slower alternatives such as VAR
    </p>

  </AccordionItem>
      <AccordionItem>
    <span slot="header">Coaches</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      3/5 I wanted to get this for my team as it would help a lot with coaching but as a local team it's way too expensive and can only really be afforded at the highest levels

      <br/>
      <br/>

      5/5 collisions in sailing can be subject to purely where a camera is positioned. This means that if a player happens to be in front of a camera, or the camera was focusing somewhere else, decisions can be uninformed and ultimately unfair. this technology really helps to keep accuracy where cameras would fail due to the aforementioned situations.

    </p>

  </AccordionItem>
</Accordion>
  </Card>
  <Card class="w-full max-w-2xl mx-auto h-[400px] overflow-scroll">
    <Heading class="text-2xl font-semibold">User Reviews</Heading>

    <br/>

    <AdvancedRating
      ratings={[
        { label: '5 star', rating: 70 },
        { label: '4 star', rating: 17 },
        { label: '3 star', rating: 8 },
        { label: '2 star', rating: 4 },
        { label: '1 star', rating: 1 }
      ]}>
      <span slot="rating">
        <Rating total={5} rating={4.2} id="example-8">
          <p slot="text" class="text-sm font-medium text-gray-500 dark:text-gray-400 ms-2">4.2 out of 5</p>
        </Rating>
      </span>
      <p slot="globalText" class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">27 global ratings</p>
    </AdvancedRating>
  </Card>
</div>

<br/>

<style>
  .scaling {
    /* make font size scale with screen size */
    font-size: calc(0.3rem + 1vw);
  }
</style>

<!-- feedback embed

<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=-RaA4P3Ru0yDsLdutDYWJ1R-b-edQetCsujTR3Acg4FURVpSSUZGQkVNMjFDNVBUNkNSVUkwVUxTQi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

-->