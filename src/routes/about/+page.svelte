<script lang="ts">

    import {Card, Heading} from "flowbite-svelte";
</script>

<div class="flex flex-row space-x-5 min-w-[90%] justify-center mt-5">
    <Card class="min-w-[45%] overflow-scroll">
        <Heading tag="h2" class="scale_h2">The Problem</Heading>
        <br>

        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            In a game of soccer there are many disputes, involving referees and players. There can be many disagreements regarding goals, fouls, and other rules. It is also difficult for coaches to get a proper view of play and formations from the sidelines.
            The problem fits with the theme as it is to-do with the common theme of hobbies and sharing hobbies. It conforms to this as it allows more people to play soccer and view soccer games, hence sharing the sport.
        </p>
    </Card>

    <Card class="min-w-[45%] overflow-scroll">
        <Heading tag="h2" class="scale_h2">Alternatives</Heading>
        <br>

        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Currently the most widely used tool for preventing disputes between players and judges is VAR (video assistant referee). The cost of running VAR for 1 season is $23.44 million dollars and would cost more to install. This causes it to be costly for a small club to use.
            <br/><br/>
            Many women's clubs also do not use VAR as they do not have the efficient funds. Even the top league in England Women’s Super League does not use VAR. This causes unfair games that are less entertaining and fun to watch, discouraging people from watching games.
            <br/><br/>
            Quote: Chelsea head coach Emma Hayes after recent umpiring controversy
            <br/><br/>
            Last month, Hayes boiled in a similar storm of frustration as she branded the lack of goal-line-technology and VAR in the Women's Super League as “embarrassing” and “ludicrous” after being denied a goal against Tottenham in her side’s first league match of the season, despite the ball clearly crossing the line through Guro Reiten.
        </p>
    </Card>
</div>

<div class="flex flex-row space-x-5 min-w-[90%] justify-center mt-5 mb-5">
    <Card class="min-w-[45%] overflow-scroll">
        <Heading tag="h2" class="scale_h2">Comparison</Heading>
        <br>

        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            While there are similar concepts on the market, our device stands out as a superior option among existing choices. Beyond simply recording the game like to VAR, our device excels by offering a comprehensive array of features. It doesn't just capture the gameplay; it also gathers specific and invaluable data tailored for players and coaches. This data serves as a powerful tool, enabling players to make targeted improvements in their performance while providing coaches with precise insights to optimize their players' skills and strategies.
        </p>
    </Card>

    <Card class="min-w-[45%] overflow-scroll">
        <Heading tag="h2" class="scale_h2">Implementation</Heading>
        <br>

        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            We have implemented this idea using Arduinos with GPSs and radios. We wired up multiple variations of the Arduinos having a base station that all the other ones communicate their values to, and field versions that communicate their data to the base station. The base station can then use Serial to communicate the received data with software running on the computer that the base station is plugged into.
        </p>
    </Card>
</div>

<br/>


<style>
  /* make all fonts scaled to screen resolution */
    .scale_h2 {
        font-size: calc(1.5rem + (1.5vw - 1.5rem) * ((100vw - 300px) / (1600 - 300)));
    }
</style>