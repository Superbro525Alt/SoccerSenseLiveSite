<script lang="ts">

    import {Card, Heading} from "flowbite-svelte";
</script>

<div class="flex flex-row w-[95%] space-x-5 mt-5 mx-[3.5%]">
    <Card class="min-w-[31.6%] max-w-[31.6%]">
        <Heading tag="h2">
            Modules
        </Heading>

        <br/>

        <p class="text-sm">
            The modules are the main components of the system. They are the ones that are responsible for the data collection and the communication with the basestation.

            <br/>
            <br/>

            The cost of all of thw modules combined, for an entire soccer field, will be <b>$16,000</b> <sub>($400 per gps * (22 players + 10 subs + 1 ball)</sub>
        </p>
    </Card>

    <Card class="min-w-[31.6%] max-w-[31.6%]">
        <Heading tag="h2">
            Basestation
        </Heading>

        <br/>

        <p class="text-sm">
            The basestation is the main component of the system. It is the one that is responsible for the data collection and the communication with the modules.

            <br/>
            <br/>

            The cost of the basestation will be <b>$400</b>
        </p>
    </Card>

    <Card class="min-w-[31.6%] max-w-[31.6%]">
        <Heading tag="h2">
            Software
        </Heading>

        <br/>

        <p class="text-sm">
            The software is the main component of the system. It is the one that is responsible for the data collection and the communication with the modules.

            <br/>
            <br/>

            The cost of the software will be <b>$0</b>
        </p>
    </Card>
</div>