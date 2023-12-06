<script lang="ts">
  import {Timeline, TimelineItem, Button, Card} from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Card class="m-4 p-4 min-w-[95%] m-auto mt-5 overflow-scroll mb-5">
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