<script lang="ts">
    import {Timeline, TimelineItem, Button, Card, Heading, Progressbar} from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { sineOut } from 'svelte/easing';
    import {onMount} from "svelte";

    let progress = '90'



    onMount(() => {
        const root = document.documentElement;

        document.addEventListener('mousemove', evt => {
            // let x = evt.clientX / innerWidth;
            // let y = evt.clientY / innerHeight;
            //
            // root.style.setProperty('--mouse-x', x);
            // root.style.setProperty('--mouse-y', y);
        });
    });

</script>

<Card class="m-4 p-4 min-w-[95%] m-auto mt-5 overflow-scroll mb-5">
    <br/>

    <Heading tag="h2">Roadmap</Heading>

    <br/>

    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        This is the roadmap for the project. It shows what we are going to do and when we are going to do it.
    </p>

    <Progressbar
  {progress}
  animate
  precision={0}
  labelOutside="Current Completion"
  labelInside
  tweenDuration={1500}
  easing={sineOut}
  size="h-6"
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
/>


    <br/>

  <Timeline>
    <TimelineItem title="Planning" date="August 2023">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ul class="list-disc list-inside">
            <li>Brainstorm ideas</li>
            <li>Vote on ideas</li>
            <li>Create a list of materials</li>
            <li>Buy materials</li>
            <li>Make wiring diagrams & wire arduinos</li>
        </ul>
      <p/>
    </TimelineItem>
    <TimelineItem title="Arduino's" date="September 2023">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ul class="list-disc list-inside">
            <li>Design software</li>
            <li>Write code to get position from arduinos</li>
            <li>Write code to send position to server</li>
            <li>Write display code for the software</li>
        </ul>
      <p/>
    </TimelineItem>
    <TimelineItem title="Software" date="October 2023">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ul class="list-disc list-inside">
      <li>Display players and ball on the screen using GPS</li>
        <li>Display score on the screen</li>
        <li>Display time on the screen</li>
        <li>Make advertisement</li>
        </ul>
      <p/>
    </TimelineItem>
    <TimelineItem title="Feedback & Improvement" date="November 2023">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ul class="list-disc list-inside">
          <li>Get feedback</li>
            <li>Improve software & design</li>
              <li>Improve hardware</li>
      <li>Fix bugs</li>
        </ul>
      <p/>
    </TimelineItem>
  </Timeline>
</Card>

<div class="flex flex-row justify-center space-x-5">
    <Card class="min-w-[47%] mt-5 overflow-scroll mb-5">
        <img src="/Kanban.png" alt="Kanban" class="w-full h-full"/>
    </Card>
    <Card class="min-w-[47%] mt-5 overflow-scroll mb-5">
        <img src="/img.png" alt="Gantt" class="w-full h-full"/>
    </Card>
</div>

