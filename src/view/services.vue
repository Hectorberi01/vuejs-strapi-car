<template>
<div class="">
    <div class="main_container">
        <div class="container_child">
            <div class="child_card" style="text-align: center;  ">
                <h2>LOCATION DE VOITURES DE LUXE</h2>
                <p>{{service1}}</p>
            </div>
        </div>
        <div class="container_child1">
            <div class="child_card" style="text-align: center; ">
                <br><br><br><br>
                <h2>LOCATION DE VOITURES AVEC CHAUFFEURS</h2>
                <p>{{service2}}</p>
            </div>
        </div>
        <div class="container_child2">
            <div class="child_card" style="text-align: center; ">
                <h2>LOCATION DE VOITURE MARIAGE</h2>
                <p>{{service3}}</p>
                <div class="child_child">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="container_child3">
            <div class="child_card" style="text-align: center; ">
                <h2>ROADTRIP</h2>
                <p>{{service4}}</p>
            </div>
        </div>
        <div class="container_child4">
            <div class="child_card" style="text-align: center; ">
                <h2>GESTION AUTOMOBILE</h2>
                <p>{{service5}}</p>
            </div>
        </div>
        <div class="container_child5">            
            <div class="child_card" style="text-align: center; ">
                <h2>SHOOTING & EVÉNEMENTIEL</h2>
                <p>{{service6}}</p>
            </div></div>
        <div class="container_child6"></div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
    export default{
        data: () => ({
            service1:null,service2:null,service3:null,service4:null,
            service5:null,service6:null
        }),
        beforeMount() {
            axios.get("http://localhost:1337/api/pages?populate=*").then(Response =>{
                console.log('page',Response);
                this.service1 = Response.data.data[0].attributes.page1.sercive1
                this.service2 = Response.data.data[0].attributes.page1.sercive2
                this.service3 = Response.data.data[0].attributes.page1.sercive3
                this.service4 = Response.data.data[0].attributes.page1.sercive4
                this.service5 = Response.data.data[0].attributes.page1.sercive5
                this.service6 = Response.data.data[0].attributes.page1.sercive6
            }).catch(error =>{
                console.log(error)
            })
        }
    }
  
</script>
<style>
    .main_container{
        width: 100%;
    }
    .container_child{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2018/03/lambo-uai-2064x1376.jpg");
        background-size: cover;
        opacity: 0.4;
    }
    .child_card{
        position: relative;
        margin: 0%;
        width: 40%;
        margin-left: 30%;
        padding-top: 200px;
        color: white;
        opacity: 20;
       
    }
    .child_child{
        width: 80%;
        height: 100px;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .container_child1{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/shutterstock_542911441-uai-2064x1376.jpg");
        background-size: cover;
        position: relative;
        opacity: 0.8;
    }
    .container_child2{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2018/03/shutterstock_367271384-uai-2064x1242.jpg");
        background-size: cover;
        opacity: 0.8;
    }
    .container_child3{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/shutterstock_631461902-uai-2064x1378.jpg");
        background-size: cover;
        opacity: 0.8;
    }
    .container_child4{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2013/01/shutterstock_548871100-uai-2064x1376.jpg");
        background-size: cover;
        opacity: 0.8;
    }
    .container_child5{
        width: 100%;
        height: 700px;
        background-image: url("https://americarprestige.com/wp-content/uploads/2020/09/fondshooting-1-scaled-uai-2064x1583.jpg");
        background-size: cover;
        opacity: 0.8;
    }
    p{
        
        font-size: 20px;
    }
    
</style>