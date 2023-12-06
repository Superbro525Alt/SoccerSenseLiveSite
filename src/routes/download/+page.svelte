<script lang="ts">
    import {Card, Heading} from 'flowbite-svelte';

      import { ButtonGroup, Button } from 'flowbite-svelte';
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from 'flowbite-svelte-icons';

</script>

<Card class="mx-auto min-w-[95%] mt-5">
    <Heading tag="h2">Download Software</Heading>

    <br/>
    <br/>

    The software will allow you to connect to the server and play the game. It is available for Windows, Linux and Mac.

    <br/>
<br/>

    <ButtonGroup class="w-[100%]">
      <Button>
        <DownloadSolid class="w-3 h-3 mr-2" />
        Windows
      </Button>
      <Button>
        <DownloadSolid class="w-3 h-3 mr-2" />
        Mac
      </Button>
      <Button>
        <DownloadSolid class="w-3 h-3 mr-2" />
        Linux
      </Button>
    </ButtonGroup>
</Card>