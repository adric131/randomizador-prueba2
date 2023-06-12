const divBoton = document.getElementById("randomizar-boton")
const contenedorDeChamps = document.getElementById("contenedor-dechamps")
const contenedorDeRoles = document.getElementById("imagenes-deroles")
const contenedorItems = document.getElementById("contenedor-deitems")
const contenedorDeSummoners = document.getElementById("contenedor-summ")
const textoRandomizar = document.getElementById("randomizar-texto")



divBoton.addEventListener("click", (e) => {

    const rutaDeImagenes = ["/fotos/Champs/Gragasicono.webp", "/fotos/Champs/samira.webp", "/fotosChamps/kassadin.webp", "/fotos/Champs/Gnar.webp", "/fotos/Champs/lulu.webp", "/fotos/Champs/zoe.webp", "/fotos/Champs/Rakan.webp", "/fotos/Champs/doctormundo.webp", "/fotos/Champs/Morgana.webp", "/fotos/Champs/darius.webp", "/fotos/Champs/nami.webp", "/fotos/Champs/Morde.webp", "/fotos/Champs/ww.webp",
        "/fotos/Champs/Cait.webp", "/fotos/Champs/lux.webp", "/fotos/Champs/Ornn.webp", "/fotos/Champs/singed.webp", "/fotos/Champs/jinx.webp", "/fotos/Champs/sett.webp", "/fotos/Champs/Garen.webp", "/fotos/Champs/vi.webp", "/fotos/Champs/Lucian.webp", "/fotos/Champs/Senna.webp", "/fotos/Champs/Syndra.webp", "/fotos/Champs/Xin.webp", "/fotos/Champs/varus.webp", "/fotos/Champs/Heimer.webp", "/fotos/Champs/Yuumi.webp",
        "/fotos/Champs/Blit.webp", "/fotos/Champs/jhin.webp", "/fotos/Champs/xayah.webp", "/fotos/Champs/K6.webp", "/fotos/Champs/Rengar.webp", "/fotos/Champs/Elise.webp", "/fotos/Champs/Nida.webp", "/fotos/Champs/Ksante.webp", "/fotos/Champs/fiora.webp", "/fotos/Champs/Nasus.webp", "/fotos/Champs/lee.webp", "/fotos/Champs/yorick.webp", "/fotos/Champs/annie.webp", "/fotos/Champs/nautilus", "/fotos/Champs/akshan.webp", "/fotos/Champs/reksai.webp",
        "/fotos/Champs/kaisa.webp","/fotos/Champs/akali.webp","/fotos/Champs/katarina.webp", "/fotos/Champs/milio.webp","/fotos/Champs/3sh.webp","/fotos/Champs/ezreal.webp", "/fotos/Champs/ashe.webp","/fotos/Champs/urgot.webp", "/fotos/Champs/ekko.webp","/fotos/Champs/bardo.webp","/fotos/Champs/kayn.webp","/fotos/Champs/nocturne.webp","/fotos/Champs/pantheon.webp" ]


    const Randomizar = Math.floor((Math.random() * rutaDeImagenes.length));



    contenedorDeChamps.innerHTML = `<img class= "imagenesChamps"src = "${rutaDeImagenes[Randomizar]}">
`;

    divBoton.style.cursor = "pointer";

    divBoton.innerHTML = `<h2 class = "boton2">Intentarlo de nuevo</h2>`

}
)
divBoton.addEventListener("click", () => {
    const rutaDeRoles = ["/fotos/Roles/Support_icon.webp", "/fotos/Roles/jungla.webp", "/fotos/Roles/Bot_icon.webp", "/fotos/Roles/Midlane_icon.webp", "/fotos/Roles/Top_icon.webp"];

    const randomizarRoles = Math.floor((Math.random()) * 5);

    contenedorDeRoles.innerHTML = `<img class= "imagenesroles" src ="${rutaDeRoles[randomizarRoles]}">
`;
})

divBoton.addEventListener("click", () => {

    const rutaDeItems = ["/fotos/Objetos/espadavioleta.webp", "/fotos/Objetos/Sterak.webp", "/fotos/Objetos/titanica.webp",
        "/fotos/Objetos/cuchillanegra.webp", "/fotos/Objetos/apariencia.webp", "/fotos/Objetos/voraz.webp", "/fotos/Objetos/promesadelcaballero.webp", "/fotos/Objetos/piedravigia.webp", "/fotos/Objetos/campana.webp",
        "/fotos/Objetos/sangunaria.webp", "/fotos/Objetos/corazondehielo.webp", "/fotos/Objetos/cotadeespinas.webp", "/fotos/Objetos/gargola.webp", "/fotos/Objetos/cadenasdeanatema.webp", "/fotos/Objetos/impulsocosmico.webp",
        "/fotos/Objetos/redencion.webp", "/fotos/Objetos/umbralsombrio.webp"];

    const rutaDeItems2 = ["/fotos/Objetos/liche.webp", "/fotos/Objetos/dientedenashor.webp", "/fotos/Objetos/warmog.webp", "/fotos/Objetos/purificadorquim.webp",
        "/fotos/Objetos/enfoque.webp", "/fotos/Objetos/rey.webp", "/fotos/Objetos/cemitarra.webp", "/fotos/Objetos/mazodehielo.webp", "/fotos/Objetos/huracanderunan.webp", "/fotos/Objetos/lumbria.webp",
        "/fotos/Objetos/morello.webp", "/fotos/Objetos/fuerzadelanaturaleza.webp", "/fotos/Objetos/tasaroja.webp", "/fotos/Objetos/abrazodemoniaco.webp", "/fotos/Objetos/arcoaxio.webp"];

    const rutaDeItems3 = ["/fotos/Objetos/yommu.webp", "/fotos/Objetos/cañondefuegorapido.webp", "/fotos/Objetos/bailedelamuerte.webp", "/fotos/Objetos/baculodeserafin.webp", "/fotos/Objetos/serpiente.webp", "/fotos/Objetos/randuim.webp",
        "/fotos/Objetos/recuerdos.webp", "/fotos/Objetos/ultimosuspiro.webp", "/fotos/Objetos/serylda.webp", "/fotos/Objetos/arcoescudo.webp", "/fotos/Objetos/zeke.webp", "/fotos/Objetos/manamune.webp",
        "/fotos/Objetos/capadeinvierno.webp", "/fotos/Objetos/saqueador.webp", "/fotos/Objetos/bastiondeaguas.webp", "/fotos/Objetos/quimotanque.webp", "/fotos/Objetos/garra.webp"]

    const rutaDeItems4 = ["/fotos/Objetos/collect.webp", "/fotos/Objetos/rabadon.webp", "/fotos/Objetos/angelguardian.webp", "/fotos/Objetos/rylai.webp", "/fotos/Objetos/mascaraabisal.webp", "/fotos/Objetos/baculodelvacio.webp", "/fotos/Objetos/bailarinespectral.webp", "/fotos/Objetos/velodebanshe.webp",
        "/fotos/Objetos/capadelanoche.webp", "/fotos/Objetos/egida.webp", "/fotos/Objetos/zhonya.webp", "/fotos/Objetos/placadelhombre.webp",
        "/fotos/Objetos/sojin.webp", "/fotos/Objetos/cierraespada.webp", "/fotos/Objetos/rompecascos.webp", "/fotos/Objetos/tormenta.webp", "/fotos/Objetos/matakraken.webp"]

    const rutaDeItemsMiticos = ["/fotos/Objetos/ecodeluden.webp", "/fotos/Objetos/shurelya.webp", "/fotos/Objetos/cercenadoroscuro.webp", "/fotos/Objetos/Trinidad.webp", "/fotos/Objetos/navori.webp",
        "/fotos/Objetos/fuerzadelviento.webp", "/fotos/Objetos/bebedor.webp", "/fotos/Objetos/eclipse.webp", "/fotos/Objetos/liandry.webp",
        "/fotos/Objetos/draktar.webp", "/fotos/Objetos/rompeavances.webp", "/fotos/Objetos/agrietador.webp", "/fotos/Objetos/hieloeterno.webp", "/fotos/Objetos/piedralunar.webp", "/fotos/Objetos/provel.webp", "/fotos/Objetos/jaksho.webp",
        "/fotos/Objetos/cosechador.webp", "/fotos/Objetos/solari.webp", "/fotos/Objetos/guantelete.webp", "/fotos/Objetos/mandatoimperial.webp", "/fotos/Objetos/corona.webp", "/fotos/Objetos/varadelasedades.webp", "/fotos/Objetos/filodelinfinito.webp", "/fotos/Objetos/ginzo.webp",];


    const rutasDebotas = ["/botas/lucides.webp", "/botas/velocidad.webp", "/botas/armadura.webp", "/botas/hechiceros.webp", "/botas/botassoporte.webp", "/botas/mov.webp", "/botas/Mer.webp"];

    const randomizarItems = Math.floor((Math.random()) * rutaDeItemsMiticos.length);
    const randomizarItems2 = Math.floor((Math.random()) * rutaDeItems.length);
    const randomizarItems3 = Math.floor((Math.random()) * rutaDeItems2.length);
    const randomizarItems4 = Math.floor((Math.random()) * rutaDeItems3.length);
    const randomizarItems5 = Math.floor((Math.random()) * rutaDeItems4.length);
    const randomizarItems6 = Math.floor((Math.random()) * rutasDebotas.length);
    contenedorItems.innerHTML =
        `<div class= "itemsContenedor"><img class = "itemsimg" src = "${rutaDeItemsMiticos[randomizarItems]}">
      
     <img class = "itemsimgsecundaria" src = "${rutaDeItems[randomizarItems2]}">

       <img class = "itemsimgtercero" src = "${rutaDeItems2[randomizarItems3]}">
      
     <img class = "itemsimgcuarto" src = "${rutaDeItems3[randomizarItems4]}">
      
      <img class = "itemsimgquinto" src = "${rutaDeItems4[randomizarItems5]}">
      
      <img class = "itemsimgsexto" src = "${rutasDebotas[randomizarItems6]}"></div>`

})

divBoton.addEventListener("click", () => {

    const rutaDeSummoners = ["/fotos/Summoners/Tp.webp", "/fotos/Summoners/Ex.webp", "/fotos/Summoners/barrera.webp", "/fotos/Summoners/ignite.webp", "/fotos/Summoners/purificar.webp"];
    const rutaDeSummonersInamovible = ["/fotos/Summoners/Flash.webp", "/fotos/Summoners/fantsamal.webp", "/fotos/Summoners/curar.webp", "/fotos/Summoners/Smite.webp"];
    const randomizarSummoners1 = Math.floor((Math.random()) * 4);
    const randomizarSummoners2 = Math.floor((Math.random()) * 5)

    contenedorDeSummoners.innerHTML = `<div class = "Summoners"><img class= "imgsumm1" src = "${rutaDeSummonersInamovible[randomizarSummoners1]}"> 
         <img class = "imgsumm2" src= "${rutaDeSummoners[randomizarSummoners2]}"> 
     </div>
       
     
     `;

    

})








