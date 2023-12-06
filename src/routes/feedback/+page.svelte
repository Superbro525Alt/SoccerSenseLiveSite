<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DeviceMockup } from 'flowbite-svelte';
      import { Carousel, Thumbnails } from 'flowbite-svelte';
      import { Card, Heading } from 'flowbite-svelte';
      import { AdvancedRating, Rating } from 'flowbite-svelte';
    import {onMount} from "svelte";
      import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

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
<br/>

<Card class="w-[90%] mx-auto min-w-[90%] min-h-[100vh] h-[100vh] overflow-scroll">
    <Heading tag="h2">Submit Feedback</Heading>

    <br/>
    <br/>

  <iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=-RaA4P3Ru0yDsLdutDYWJ1R-b-edQetCsujTR3Acg4FURVpSSUZGQkVNMjFDNVBUNkNSVUkwVUxTQi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
</Card>

<br/>