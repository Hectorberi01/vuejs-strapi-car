<template>
    <div id="app">
        <div class="after_nav_image"></div>
        <div class="container">
            <div  class=""><h1><br><br>{{titre}}</h1></div>
            <p><br><br><br><strong>{{soustitre1}}</strong><br><br><br></p>
            <strong>{{paragraphe1}}</strong>
            <div><br><h2><strong>{{soustitre2}}</strong></h2><br><strong>{{paragraphe2}}</strong></div>

            <div class="conteneur">
            <div class="conteneur_gauche">
                <div class="image_conteneur_gauche">
                    <button squared variant="outline-secondary" class="btn_containeur" >VÉHICULES AVEC CHAUFFEUR</button>
                </div>
            </div>
            <div class="conteneur_droit">
                <div class="conteneur_haut">
                <div class="image_conteneur_haut">
                    <div><button squared variant="outline-secondary" class="btn_containeur">SPOTIVES</button></div>
                </div>
                </div>
                <div class="conteneur_bas">
                <div class="image_conteneur_bas">
                    <div><button squared variant="outline-secondary" class="btn_containeur">MARIAGE</button></div>
                </div>
                </div>
            </div>
            </div>
            <!--------------------------------->
    
            <h2><br><br><strong>{{soustitre3}}</strong><br></h2>
            <p><strong>{{paragraphe3}}</strong><br></p>
            <p><br><strong>{{paragraphe4}}</strong></p>
            <p><br><br><strong>{{paragraphe5}}</strong></p>
        </div>
        <!--carousel-->
        <Carousel/>
        <!---->
        <div class="container_image_gif"></div>
        <Carousel1/>
    </div>
</template>
<script>
    import axios from 'axios'
    import Carousel from '../componentes/carousel.vue';
    import Carousel1 from '../componentes/carousel1.vue';

    export default {
        name: "app",
        data: () => ({
            titre:null,
            soustitre1:null,soustitre2:null,soustitre3:null,
            paragraphe1:null,paragraphe2:null,paragraphe3:null,paragraphe4:null,paragraphe5:null,
            model: null,contact:null,about:null,
            carousel: [],
        }),
        beforeMount() {
            axios.get("http://localhost:1337/api/pages?populate=*").then(Response =>{
                console.log('page',Response);
                this.titre = Response.data.data[0].attributes.page1.titre1;
                this.soustitre1 = Response.data.data[0].attributes.page1.st1;
                this.soustitre2 = Response.data.data[0].attributes.page1.st2;
                this.soustitre3 = Response.data.data[0].attributes.page1.st3
                this.paragraphe1 = Response.data.data[0].attributes.page1.paraphe1
                this.paragraphe2 = Response.data.data[0].attributes.page1.paraphe2
                this.paragraphe3 = Response.data.data[0].attributes.page1.paraphe3
                this.paragraphe4 = Response.data.data[0].attributes.page1.paraphe4
                this.paragraphe5 = Response.data.data[0].attributes.page1.paraphe5
            }).catch(error =>{
                console.log(error)
            });
        },
        components: { Carousel, Carousel1 }
  
    }
</script>
<style>
    @import '../style/app.css';
    .container_image_gif{
    height: 500px;
    width: 100%;
    background-image: url("https://americarprestige.com/wp-content/uploads/2018/04/fefe.jpg");
    background-size: cover;
    background-position: center;
    }
    .after_nav_image{
    height: 700px;
    width: 100%;
    transform: translate3d(0px, 0px, 0px);
    background-image: url("https://americarprestige.com/wp-content/uploads/2021/11/DSC_70682-1-1-e1637855969238.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
    .btn_container{
    color: rgb(239, 208, 171);
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    }
    h1{
    color:  rgb(239, 208, 171);
    }
</style>