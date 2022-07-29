<template>
    <div class="container">
        <div class="les-vehicules_row">
            <!--<div class="vehicules_row1"></div>-->
            <div class="vehicules_row1">
                <div class="x">
                    <div style="margin-top:70px;"> LES 4X4</div>
                </div>
                <div class="americane">
                    <div style="margin-top:70px;">LES AMERICANES</div>
                 </div>
                <div class="berline">
                    <div style="margin-top:70px;">LES BERLINES</div>
                </div>
            </div>
            <div class="vehicules_row2">
                <div class="cabriolets">
                    <div style="margin-top:70px;">LES CABRIOLETS</div>
                </div>
                <div class="ecologiques">
                    <div style="margin-top:70px;">LES ECOLOGIQUES</div> 
                </div>
                <div class="sports">
                    <div style="margin-top:70px;">LES VOTURES DE SPORTS</div> 
                </div>
            </div>
            <div class="vehicules_row3">
                <div class="ancienne">
                    <div style="margin-top:70px;">LOCATION D'UNE VOITURE ANCIENNE</div> 
                </div>
                <div class="limousine">
                    <div style="margin-top:70px;">LOCATION D'UNE LIMOUSINE</div> 
                </div>
                <div class="vans">
                    <div style="margin-top:70px;">LOCATION DE VANS</div> 
                </div>
            </div>
        </div>
        <h2>Location d’une voiture de luxe : rapide, efficace, discret</h2>
        <div style="width:1200px ;">{{les_vehicules_paraph1}}</div>
        <h2>Louer un véhicule de luxe : 7j/7, 24 h/24</h2>
        <div style="width:1200px ;">{{les_vehicules_paraph2}}</div>
        <div class="picture1">
            <div></div>
            <div class="_image">
                <img src="https://americarprestige.com/wp-content/uploads/2019/07/location-mercedes-benz-classe-s-cabriolet-3.jpg"  alt="">
            </div>
            <div></div>
        </div>
        <div class="container"></div>
        <h2>Marques de voitures de luxe en location <br></h2>
        <p style="width:1200px ;">{{les_vehicules_paraph3}} <br></p>
        <p>Si vous ne savez pas quelle voiture louer, Americar Prestige vous offre une large sélection de véhicules 
            de luxe pour différents événements : <br>
        </p>
        <P>.Location de voiture ancienne ou location de limousine pour vos mariages</P>
        <p>.Location de voiture sportive pour une balade à Paris</p>
        <p>.Location de SUV ou de Vans de luxe pour des déplacements en grand nombre</p>
        <p>.Location de berlines ou de voitures écologiques pour des déplacements personnels ou professionnels</p>
        <p>{{les_vehicules_paraph5}} <br></p>
        <h2>Conditions de location de voiture de luxe en tant que particulier</h2>
        <p><br>{{les_vehicules_paraph4}}<br><br>{{text1}} <br><br>{{text2}}</p>
        <div class="picture2">
            <div></div>
            <div class="__image">
                <img src="https://americarprestige.com/wp-content/uploads/2019/07/location-mercedes-benz-classe-s-cabriolet-2.jpg" alt="">
            </div>
            <div></div>
        </div>
        <h2>Prix de location de voiture de luxe</h2>
        <p>{{text3}}</p>
        <p>.La marque et le modèle de la voiture en location</p>
        <p>.La durée de location de la voiture de luxe</p>
        <p>.Les options supplémentaires avec des frais supplémentaires : siège bébé, 
            location avec chauffeur, kilomètres ou heures supplémentaires, …
        </p>
        <p>{{text4}} <br> <br>{{text5}}</p>
        <p>Lire aussi : Tous savoir sur les voitures de luxe</p>
        <h2>Où louer une voiture de luxe ?</h2>
        <p>{{text6}}</p>
        <h2>Comment louer une voiture de luxe ?</h2>
        <p>Vous pouvez louer n'importe quelle voiture de luxe en ligne, à travers le formulaire 
            de location en ligne sur Americar Prestige.
        </p>
        <h2>Quel est le prix de location d'une voiture de luxe ?</h2>
        <p>{{text7}}</p>
        <h1>Tous nos véhicules de luxe en location</h1>
        <div>
             <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'


export default {

    data: () =>({
        les_vehicules_paraph1:null,
        les_vehicules_paraph2:null,
        les_vehicules_paraph3:null,
        les_vehicules_paraph4:null,
        les_vehicules_paraph5:null,
        text1: null,text2:null,text3:null,text4:null,text5:null,
        text6:null,text7:null
    }),

    beforeMount() {
       axios.get("http://localhost:1337/api/pages?populate=*").then(Response =>{
            console.log('res',Response);
            this.les_vehicules_paraph1 = Response.data.data[0].attributes.page1.lesvehiculesp1
            this.les_vehicules_paraph2 = Response.data.data[0].attributes.page1.lesvehiculesp2
            this.les_vehicules_paraph3 = Response.data.data[0].attributes.page1.lesvehiculesp3
            this.les_vehicules_paraph4 = Response.data.data[0].attributes.page1.lesvehiculesp4
            this.les_vehicules_paraph5 = Response.data.data[0].attributes.page1.lesvehiculesp5
            this.text1 = Response.data.data[0].attributes.page1.rtext1
            this.text2 = Response.data.data[0].attributes.page1.rtext2
            this.text3 = Response.data.data[0].attributes.page1.rtext3
            this.text4 = Response.data.data[0].attributes.page1.rtext4
            this.text5 = Response.data.data[0].attributes.page1.rtext5
            this.text6 = Response.data.data[0].attributes.page1.rtext6
            this.text7 = Response.data.data[0].attributes.page1.rtext7
       })
    },

}
</script>
<style>
.les-vehicules_row{
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-rows: 200px 200px 200px;
}
.vehicules_row1{
    margin-left: 50px;
    width:1200px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
}
.vehicules_row2{
    background-color: aquamarine;
    margin-left: 50px;
    width:1200px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
}
.vehicules_row3{
    background-color: bisque;
    margin-left: 50px;
    width:1200px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
}
.x{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/4x4-1.jpg");
    background-size: cover;
}
.americane{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/américaine-1.jpg");
    background-size: cover;
}
.berline{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/berlines2-2.jpg");
    background-size: cover; 
}
.cabriolets{
    background-image: url("https://americarprestige.com/wp-content/uploads/2020/11/cabriolet.jpg");
    background-size: cover; 
}
.ecologiques{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/ecologiques-1.jpg");
    background-size: cover; 
}
.sports{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/sportives-1.jpg");
    background-size: cover; 
}
.ancienne{
    background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/anciennes-1.jpg");
    background-size: cover;
}
.limousine{
    background-image: url("https://americarprestige.com/wp-content/uploads/2018/04/limousine.jpg");
    background-size: cover;
}
.vans{
    background-image: url("https://americarprestige.com/wp-content/uploads/2019/07/berlines2.jpg");
    background-size: cover;
}
.picture1{
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 25% 50% 25%;
   /* background-color: aliceblue;*/

}
.picture2{
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 25% 50% 25%;
   /* background-color: aliceblue;*/

}
._images{
    /*background-image: url("https://americarprestige.com/wp-content/uploads/2019/07/location-mercedes-benz-classe-s-cabriolet-3.jpg");*/
    background-size: cover;
}
.__images{
    
    background-size: cover;
}
p{
    position: relative;
    text-align: left;
    margin-left: 0%;
}
h2{
    text-align: left;
}
</style>