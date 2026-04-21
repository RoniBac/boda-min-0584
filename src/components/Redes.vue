<template>
    
    <section class="hashtag">

        <!-- TÍTULO -->
        <h2 class="titulo3">Hashtag</h2>

        <!-- DECORACIÓN -->
        <img :src="data.decoracion" class="decoracion" style="filter: invert(1);">

        <!-- TEXTO -->
        <p class="texto2">
            No olvides etiquetarnos en<br>
            todas tus publicaciones<br>
            utilizando el Hashtag...
        </p>

        <!-- HASHTAG -->
        <p class="tag">{{ data?.hashtag }}</p>

        <!-- REDES -->
        <div class="redes">

            <!-- INSTAGRAM -->
            <a href="#">
                <svg class="iconoredes" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 
                5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.2 
                1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 
                9a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
            </a>

            <!-- TIKTOK -->
            <a href="#">
                <svg class="iconoredes" viewBox="0 0 24 24">
                <path d="M16 2h3a5 5 0 005 5v3a8 
                8 0 01-5-1.5V16a6 6 0 11-6-6c.3 
                0 .6 0 1 .1v3a3 3 0 102 2.9V2z"/>
                </svg>
            </a>

            <!-- FACEBOOK -->
            <a href="#">
                <svg class="iconoredes" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 
                9.9v-7H7v-3h3.5V9.5c0-3.5 
                2.1-5.5 5.3-5.5 1.5 0 
                3.1.3 3.1.3v3.4H17c-1.7 
                0-2.2 1-2.2 2.1V12H19l-.7 
                3h-3.5v7A10 10 0 0022 12z"/>
                </svg>
            </a>

        </div>

    </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
