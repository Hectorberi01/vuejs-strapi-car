<template>
    <div class="footer_row">
        <div class="conteneur_footer">
            <div class="footer_form">
                <div class="container_form">
                    <label for="input-with-list"><strong>NEWSLETTER</strong></label>
                    <b-form-input  list="input-email" placeholder="Votre email" id="input-with-list"></b-form-input>
                    <b-button squared variant="outline-secondary" class="btn">S'INSCRIRE</b-button>
                </div>
            </div>
            <div class="footer_about">
                A PROPOS
               <div class="container_about">
                    <strong> {{about}}</strong>
               </div>
            </div>
            <div class="footer_contact">
                 CONTACT
               <div class="container_contact">
                    <strong> {{contact}}</strong>
               </div>
            </div>
        </div>
        <div class="footer_row1">
            <div class="row">© 2019 Americar Prestige | Conditions générales | Mentions légales | Plan du site </div>
            <div class="row_icon">
                <div><b-icon icon="facebook"></b-icon></div>
                <div><b-icon icon="instagram"></b-icon></div>
                <div><b-icon icon="twitter"></b-icon></div>
            </div>
        </div>
        <div class="footer_row2">americarprestige.com est évalué 4,9/5 par 140 clients sur Google My Business</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({ 
    about:null,
    contact:null
  }),

    beforeMount() {
         axios.get("http://localhost:1337/api/piedspages?populate=*").then(Response => {
        console.log("contact", Response);
        this.contact = Response.data.data[0].attributes.Piedspages[0].Contact;
        this.about = Response.data.data[0].attributes.Piedspages[0].About;
        }).catch(error => {
            console.log(error);
        });
    },
}
</script>

<style>
@import '../style/footer.css';
</style>