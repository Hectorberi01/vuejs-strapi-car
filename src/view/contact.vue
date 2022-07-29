<template>
    <div style="width: 100%;height:100%">
        <div class="contact_container">
            <div class="contact_image">
                <div class="picteur_contact">
                    <!--<img src="https://americarprestige.com/wp-content/uploads/2018/03/shutterstock_577653901-uai-1032x1626.jpg" alt="">-->
                </div>
            </div>
            <div class="contact_form">
                <div class="contact_form_row1">
                    <div class="form_row1">
                        <P><strong>Adresse </strong>: 5 rue de Castiglione – 75001 Paris</P>
                        <P><strong>Tél </strong>: +33 (0)1 53 45 30 26</P>
                        <P><strong>Portable</strong>: +33 (0)6 69 91 26 39 ou +33 (0)6 42 42 53 94</P>
                        <P><strong>Fax</strong>: +33(0)1 53 45 27 01</P>
                        <P><strong>Mail :</strong><a href=""> cliquez ici</a></P>
                        <P><strong>RCS PARIS 498 537 661</strong></P>
                    </div>
                </div>
                <div class="contact_form_row2">
                <div id="contact-form" class="contact-form">
                        <!--<div class="separator"></div>-->
                        <!--<div v-if="isSending" class="loading">Sendig...</div>-->
                        <form class="form" @submit="onSubmit">
                            <input required name="name" v-model='name' placeholder="name" type="text" autocomplete="off">
                            <input required name="firstnam" v-model='prenom' placeholder="Prenom" type="text" autocomplete="off">
                            <input required name="Tel" v-model='prenom' placeholder="Tel" type="text" autocomplete="off">
                            <input required name="email" v-model="email" placeholder="E-mail" type="email" autocomplete="off">
                            <textarea name="message" v-model="message" rows="4" placeholder="Message"></textarea>
                            <button class="button">ENVOYER LE MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <p style="text-align:left ;">
              Situés au cœur de Paris à 50 mètres de la prestigieuse place Vendôme, carrefour de l’hôtellerie de luxe, de la grande gastronomie, des plus grands représentants de la haute couture et de la joaillerie, mais aussi du monde des affaires,
               nos bureaux vous offrent un service de qualité en toute discrétion et sécurité.  
            </p>
        </div>
        <div class="My-Map">
            <Map/>
        </div>       
    </div>
      

   <!--  <div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="1080" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=france%20paris&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a>
            <br>
            <a href="https://www.embedgooglemap.net">custom map for website</a>
        </div>
    </div>-->
  
</template>
<script>
import Map from '../componentes/map.vue'
export default{
    data: () => ({
        name: "",
        prenom: "",
        email: "",
        message: "",
        tel: "",
        isSending: false,
        component: [
            Map
        ]
    }),
    components: { Map }
}
</script>
<style>
    @import '../style/contactform.css';
    .mapouter{position:relative;text-align:right;height:500px;width:1080px;}
    .gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1080px;}
    .contact_container{
        width: 100%;
        height: 1000px;
        display: grid;
        grid-template-columns: 50% 50%;
        /*background-color: aliceblue;*/
    }
    .contact_form{
        width: 100%;
        display: grid;
        grid-template-rows: 40% 60%;
    }
    .form_row1{
        width: 80%;
        height: 80%;
        margin-top: 5%;
        margin-left: 10%;
        text-align: left;
        
        /*background-color: blueviolet;*/
    }
   /* .contact_form_row1{
        /*background-color: aqua;
    }*/
    .contact_form_row2{
        
        color: aliceblue;
    }
    .contact_image{
        padding-top: 50px;
        padding-left: 20%;
    }
    .picteur_contact{
        height: 900px;
        width: 90%;
        background-image: url("https://americarprestige.com/wp-content/uploads/2018/03/shutterstock_577653901-uai-1032x1626.jpg");
       /* background-color: black;*/
       background-size: cover;
       position: relative;
    }
    strong{
        color: white;
    }
  
    a{
        color: rgb(239, 208, 171);
    }
    .My-Map{
        margin-left: 5%;
        width: 90%;
        height: 500px;
        
    }
</style>