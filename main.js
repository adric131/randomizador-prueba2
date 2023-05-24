const divBoton = document.getElementById("randomizar-boton")
const contenedorDeChamps = document.getElementById("contenedor-dechamps")
const contenedorDeRoles = document.getElementById("imagenes-deroles")
const contenedorItems = document.getElementById("contenedor-deitems")
const contenedorDeSummoners = document.getElementById("contenedor-summ")
const textoRandomizar = document.getElementById("randomizar-texto")



divBoton.addEventListener("click", (e) => {

    const rutaDeImagenes = ["../Gragasicono.webp", "../samira.webp", "../kassadin.webp", "../Gnar.webp", "../lulu.webp", "../zoe.webp", "../Rakan.webp", "../doctormundo.webp", "../Morgana.webp", "../darius.webp", "../nami.webp", "../Morde.webp", "../ww.webp",
        "../Cait.webp", "../lux.webp", "../Ornn.webp", "../singed.webp", "../jinx.webp", "../sett.webp", "../Garen.webp", "../vi.webp", "../Lucian.webp", "../Senna.webp", "../Syndra.webp", "../Xin.webp", "../varus.webp", "../Heimer.webp", "/fotos/Champs/Yuumi.webp",
        "../Blit.webp", "../jhin.webp", "../xayah.webp", "../K6.webp", "../Rengar.webp", "/fotos/champs/Elise.webp", "/fotos/champs/Nida.webp", "/fotos/champs/Ksante.webp", "/fotos/champs/fiora.webp", "/fotos/champs/Nasus.webp", "/fotos/champs/lee.webp", "/fotos/champs/yorick.webp"];


    const Randomizar = Math.floor((Math.random() * 40));



    contenedorDeChamps.innerHTML = `<img class= "imagenesChamps"src = "${rutaDeImagenes[Randomizar]}">
`;

    divBoton.style.cursor = "pointer";

}
)
divBoton.addEventListener("click", () => {
    const rutaDeRoles = ["/fotos/Roles/Support_icon.webp", "/fotos/Roles/jungla.webp", "/fotos/Roles/bot_icon.webp", "/fotos/Roles/Midlane_icon.webp", "/fotos/Roles/Top_icon.webp"];

    const randomizarRoles = Math.floor((Math.random()) * 5);

    contenedorDeRoles.innerHTML = `<img class= "imagenesroles" src ="${rutaDeRoles[randomizarRoles]}">
`;
})

divBoton.addEventListener("click", () => {

    const rutaDeItems = ["/fotos/Objetos/espadavioleta.webp", "/fotos/Objetos/Sterak.webp", "/fotos/Objetos/titanica.webp",
        "/fotos/Objetos/cuchillanegra.webp", "/fotos/Objetos/apariencia.webp", "/fotos/Objetos/voraz.webp", "/fotos/Objetos/promesadelcaballero.webp", "/fotos/Objetos/piedravigia.webp", "/fotos/Objetos/campana.webp",
        "/fotos/Objetos/sangunaria.webp", "/fotos/Objetos/corazondehielo.webp", "/fotos/Objetos/cotadeespinas.webp", "/fotos/Objetos/gargola.webp", "/fotos/Objetos/cadenasdeanatema.webp", "/fotos/Objetos/impulsocosmico.webp",
        "/fotos/Objetos/redencion.webp", "/fotos/Objetos/umbralsombrio.webp"];

    const rutaDeItems2 = ["/fotos/Objetos/filodelinfinito.webp", "/fotos/Objetos/liche.webp", "/fotos/Objetos/dientedenashor.webp", "/fotos/Objetos/warmog.webp", "/fotos/Objetos/purificadorquim.webp",
        "/fotos/Objetos/enfoque.webp", "/fotos/Objetos/rey.webp", "/fotos/Objetos/cemitarra.webp", "/fotos/Objetos/mazodehielo.webp", "/fotos/Objetos/huracanderunan.webp", "/fotos/Objetos/lumbria.webp",
        "/fotos/Objetos/morello.webp", "/fotos/Objetos/fuerzadelanaturaleza.webp", "/fotos/Objetos/tasaroja.webp", "/fotos/Objetos/abrazodemoniaco.webp", "/fotos/Objetos/arcoaxio.webp"];

    const rutaDeItems3 = ["/fotos/Objetos/yommu.webp", "/fotos/Objetos/cañondefuegorapido.webp", "/fotos/Objetos/bailedelamuerte.webp", "/fotos/Objetos/baculodeserafin.webp", "/fotos/Objetos/serpiente.webp", "/fotos/Objetos/randuim.webp",
        "/fotos/Objetos/recuerdos.webp", "/fotos/Objetos/ultimosuspiro.webp", "/fotos/Objetos/serylda.webp", "/fotos/Objetos/ginzo.webp", "/fotos/Objetos/navori.webp", "/fotos/Objetos/zeke.webp", "/fotos/Objetos/manamune.webp",
        "/fotos/Objetos/capadeinvierno.webp", "/fotos/Objetos/saqueador.webp", "/fotos/Objetos/bastiondeaguas.webp", "/fotos/Objetos/quimotanque.webp"]

    const rutaDeItems4 = ["/fotos/Objetos/collect.webp", "/fotos/Objetos/rabadon.webp", "/fotos/Objetos/angelguardian.webp", "/fotos/Objetos/rylai.webp", "/fotos/Objetos/mascaraabisal.webp", "/fotos/Objetos/baculodelvacio.webp", "/fotos/Objetos/bailarinespectral.webp", "/fotos/Objetos/velodebanshe.webp",
        "/fotos/Objetos/capadelanoche.webp", "/fotos/Objetos/egida.webp", "/fotos/Objetos/zhonya.webp", "/fotos/Objetos/placadelhombre.webp",
        "/fotos/Objetos/sojin.webp", "/fotos/Objetos/cierraespada.webp", "/fotos/Objetos/rompecascos.webp", "/fotos/Objetos/tormenta.webp"]

    const rutaDeItemsMiticos = ["/fotos/Objetos/ecodeluden.webp", "/fotos/Objetos/shurelya.webp", "/fotos/Objetos/cercenadoroscuro.webp", "/fotos/Objetos/Trinidad.webp", "/fotos/Objetos/arcoescudo.webp", "/fotos/Objetos/matakraken.webp",
        "/fotos/Objetos/fuerzadelviento.webp", "/fotos/Objetos/bebedor.webp", "/fotos/Objetos/eclipse.webp", "/fotos/Objetos/liandry.webp",
        "/fotos/Objetos/draktar.webp", "/fotos/Objetos/rompeavances.webp", "/fotos/Objetos/agrietador.webp", "/fotos/Objetos/hieloeterno.webp", "/fotos/Objetos/piedralunar.webp", "/fotos/Objetos/garra.webp", "/fotos/Objetos/provel.webp", "/fotos/Objetos/jaksho.webp",
        "/fotos/Objetos/cosechador.webp", "/fotos/Objetos/solari.webp", "/fotos/Objetos/guantelete.webp", "/fotos/Objetos/mandatoimperial.webp", "/fotos/Objetos/corona.webp", "/fotos/Objetos/varadelasedades.webp"];


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

    const rutaDeSummoners = ["/Summoners/Tp.webp", "/Summoners/ex.webp", "/Summoners/barrera.webp", "/Summoners/ignite.webp", "/Summoners/purificar.webp"];
    const rutaDeSummonersInamovible = ["/Summoners/Flash.webp", "/Summoners/fantsamal.webp", "/Summoners/curar.webp", "/Summoners/Smite.webp"];
    const randomizarSummoners1 = Math.floor((Math.random()) * 4);
    const randomizarSummoners2 = Math.floor((Math.random()) * 5)

    contenedorDeSummoners.innerHTML = `<div class = "Summoners"><img class= "imgsumm1" src = "${rutaDeSummonersInamovible[randomizarSummoners1]}"> 
         <img class = "imgsumm2" src= "${rutaDeSummoners[randomizarSummoners2]}"> 
     </div>
       
     
     `
})






