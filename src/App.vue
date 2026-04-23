<script setup>
import { invitacion as data } from './config/invitacion'
import Hero from './components/Hero.vue'
import Music from './components/Music.vue'
import Info from './components/Info.vue'
import Countdown from './components/Countdown.vue'
import Reveal from './components/Reveal.vue'
import Ubicacion from './components/ubicacion.vue'
import Dresscode from './components/dresscode.vue'
import Itinerario from './components/Itinerario.vue'
import Regalos from './components/Regalos.vue'
import Redes from './components/Redes.vue'
import Galeria from './components/Galeria.vue'
import Confirmacion from './components/Confirmacion.vue'
import Buzon from './components/Buzon.vue'
</script>

<template>
  
  <Hero 
    :imagen="data.hero.imagen"
    :fecha="data.hero.fecha"
    :novio="data.hero.novio"
    :novia="data.hero.novia"
    :icono="data.hero.icono"/>
  <div class="content">
    <div class="shared-bg">
      <Music :data="data.music"/>
      <Info :data="data.info"/>
      <Countdown :data="data.countdown" />
    </div>
  </div>


  <Reveal :imagen = "data.princpal1.imagen"/>

  <div class="content">
    <div class="shared-bg">
      <Ubicacion :data = "data.ubicacion"/>
    </div>
  </div>  

  <Reveal 
    :imagen = "data.princpal2.imagen"/>

  
  <div class="content">
    <div class="shared-bg">
      <Dresscode :data="data.dresscode"/>
    </div>
  </div>

  <div class="content">
    <div class="shared-bg2">
      <Itinerario :data="data.itinerario"/>
    </div>
  </div>

  <div class="content">
    <div class="shared-bg">
      <Regalos :data="data.regalos"/>
    </div>
  </div>

  <div class="content">
    <div class="shared-bg2">
      <Redes :data= "data.redes"/>
    </div>

  </div>

  <div class="content">
    <div class="shared-bg">
      <Galeria :data= "data.galeria"/>
      <Confirmacion :data="data.confirmacion" />
    </div>
  </div>

  <div class="content">
    <div class="shared-bg2">
      <Buzon :data="data.buzon" :whatsapp="data.whatsapp" />
    </div>
  </div>
  
</template>
