import hero from '../assets/img/principal/f1.jpeg'
import hero2 from "../assets/img/principal/f2.jpeg"
import hero3 from "../assets/img/principal/f3.jpeg"

import ub1 from "../assets/img/ubi/ub1.png"
import ub2 from "../assets/img/ubi/ub2.png"

import iconreg from "../assets/img/icons/iconreg.png"

import icon1 from "../assets/img/icons/ub1.png"
import icon2 from "../assets/img/icons/ub2.png"

import icondc from "../assets/img/icons/icondc.png"

import iconbuzon from "../assets/img/icons/iconbuzon.png"
import icono from '../assets/img/icono.png'
import musica from '../assets/audio/cancion.mp3'

import decoracion from '../assets/img/decoracion.png'
import decoracion2 from '../assets/img/decoracion2.png'

import iconi1 from '../assets/img/icons/iconint/icon1.png'
import iconi2 from '../assets/img/icons/iconint/icon2.png'
import iconi3 from '../assets/img/icons/iconint/icon3.png'
import iconi4 from '../assets/img/icons/iconint/icon4.png'
import iconi5 from '../assets/img/icons/iconint/icon5.png'
import iconi6 from '../assets/img/icons/iconint/icon6.png'

import tienda from '../assets/img/tienda/tienda.jpg'

import foto1 from '../assets/img/galeria/f1.jpeg'
import foto2 from  '../assets/img/galeria/f2.jpeg'
import foto3 from '../assets/img/galeria/f3.jpeg'
import foto4 from '../assets/img/galeria/f4.jpeg'
import foto5 from '../assets/img/galeria/f5.jpeg'
import foto6 from '../assets/img/galeria/f6.jpeg'
import foto7 from '../assets/img/galeria/f7.jpeg'
import foto8 from '../assets/img/galeria/f8.jpeg'


export const invitacion = {
  hero: {
    imagen: hero,
    icono: icono,
    fecha: "24·06·26",
    novio: "Emanuel",
    novia: "Fernanda"
  },
   music: {
    src: musica
  },
   info: {
    frase: " No se cuando empece a amarte pero me gusta pensar que fue cuando supe que eras mi lugar seguro.",

    decoracion: decoracion,

    familia: [
    {
      titulo: "Padres de la Novia:",
      personas: [
        { nombre: "Martha Lidia Espinoza Mora" },
        { nombre: "Ricardo Garcia Condado", finado: true }
      ]
    },
    {
      titulo: "Padres de el Novio:",
      personas: [
        { nombre: "Bertha Elena Zuñiga Gonzalez" },
        { nombre: "Ruben Avendaño Martinez" }
      ]
    }
    ]
  },
  countdown: {
    titulo: "APARTA esta FECHA",
    fechaTexto: "24·06·26",
    fechaISO: "2026-06-24T18:30:00", // 🔥 IMPORTANTE (para JS)
  },
    princpal1:{
        imagen: hero2
    },
    princpal2:{
        imagen: hero3
    },

    ubicacion:{
        decoracion:decoracion,
        ubicacion1:ub1,
        ubicacion2:ub2,
        icon1:icon1,
        icon2:icon2,
        
        horaceremonia:"6:30 PM",
        lugarceremonia:"Capilla de Guadalupe, casa de accion catolica",
        direccionceremonia:"Francisco I. Madero 405, Centro Historico, 78000 San Luis Potosí, S.L.P.",
        mapsceremonia:"https://maps.app.goo.gl/2Lg36uVohmFxRawh6",

        horarecepcion:"8:00 PM",
        lugarrecepcion:"Parque Norte",
        direccionrecepcion:"Av. Acceso Nte. 260, Tlaxcala Barrio de Tlaxcala, 78038 San Luis Potosí, S.L.P.",
        mapsrecepcion:"https://maps.app.goo.gl/BcuQtQNJJ4erJh186"
    },

    dresscode:{
      decoracion:decoracion,
      icon: icondc,
      ellos:" Traje negro, camisa Blanca, corbata o moño negro (no colores)",
      ellas:"Vestido negro (no colores)"
    },

    itinerario:{
      decoracion:decoracion2,
      icon1:iconi1,
      icon2:iconi2,
      icon3:iconi3,
      icon4:iconi4,
      icon5:iconi5,
      icon6:iconi6,
    },

    regalos:{
      decoracion:decoracion,
      icon: iconreg,
      tienda: tienda,
      link: "https://cantia.com.mx/apps/giftregistry/registry/22077",
      mesa: "#22077"
    },

    redes:{
      decoracion:decoracion2,
      hashtag:"#Maria&Ruben"
    },

    galeria:{
      decoracion:decoracion,
      foto1: foto1,
      foto2: foto2,
      foto3: foto3,
      foto4: foto4,
      foto5: foto5,
      foto6: foto6,
      foto7: foto7,
      foto8: foto8
    },
    confirmacion:{
      titulo: "¡Confirma tu Asistencia!",
      decoracion: decoracion,

      texto: "Queremos que sea un día perfecto\ncomo lo hemos soñado, ayúdanos a hacerlo posible.",

      aviso: "— NO NIÑOS —",

      descripcion: "Nos encantaría que esta celebración\ntambién la disfrutes tanto como nosotros,\npor eso hemos decidido que sea solo para adultos.",

      whatsapp: "5218124077280",
      mensaje: "Hola, confirmo mi asistencia 🎉"
    },

    buzon: {
      titulo: "Buzón de buenos deseos",

      decoracion: decoracion2,

      texto: "¿Quieres dedicarnos unas palabras?\n\npuedes escribirnos un mensaje.",

      icono: iconbuzon,

      botonTexto: "❤ ENVIAR",

      link: "https://wa.me/5214444328102?text=Queremos dejarles un mensaje 💌"
    }


}


