<template>
<div class="sliders">
	<div class="slide-track">
		<div class="slide" v-for="link in links">
			<img v-bind:src="link.img" alt="" height="85" width="85" />
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name:"app",
    data:() => ({
        links:[
            {index:1,img:"https://americarprestige.com/wp-content/uploads/2020/11/badge-weddingawards_fr_FR.jpg"},
            {index:2,img:"https://americarprestige.com/wp-content/uploads/2018/03/1200px-Desperados_Logo-uai-516x362.png"},
            {index:3,img:"https://americarprestige.com/wp-content/uploads/2018/03/1200px-M6_2009-uai-516x399.png"},
            {index:4,img:"https://americarprestige.com/wp-content/uploads/2018/03/2000px-American_Express_logo-uai-516x516.png"},
            {index:5,img:"https://americarprestige.com/wp-content/uploads/2018/03/2000px-Tesla_Motors-uai-516x666.png"},
            {index:6,img:"https://americarprestige.com/wp-content/uploads/2018/03/TF1-logo-uai-516x290.png"},
            {index:7,img:"https://americarprestige.com/wp-content/uploads/2018/03/Visa-Infinite-Logo-uai-516x413.png"},
            {index:8,img:"https://americarprestige.com/wp-content/uploads/2018/03/97cbeb_d3f49d41f46c444ba990cb8baeb4f5fc-1.gif"},
            {index:9,img:"https://americarprestige.com/wp-content/uploads/2018/03/csm_LOGO-RAPHAEL_20CM_01_098a910425-1-uai-516x389.jpg"},
            {index:10,img:"https://americarprestige.com/wp-content/uploads/2018/03/logo_johnpaulHD-1.png"},
            {index:11,img:"https://americarprestige.com/wp-content/uploads/2018/03/logo_leshotelsparticuliers-1-uai-516x108.png"},
            {index:12,img:"https://americarprestige.com/wp-content/uploads/2018/03/logo-vinci_114083_wide-1-uai-516x232.jpg"},
            {index:13,img:"https://americarprestige.com/wp-content/uploads/2018/03/meurice1-1-uai-516x350.bmp"},
            {index:14,img:"https://americarprestige.com/wp-content/uploads/2020/11/badge_white_fr.png"},
        ]
    }),
  }
</script>

<style>

    /*Animation*/
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7))}
    }


    /* Styling*/
    .sliders {
        background: rgb(2, 0, 0);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
        height: 150px;
        margin: auto;
        overflow:hidden;
        position: relative;
        width: 100%;
        border-bottom-color: black;

    }

    .slider::after {
        content:"";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
    }

    .slider::after {
        right: 0;
        top: 0;
        
            transform: rotateX(360deg);
        /*transform: translate3d(-1846px, 0px, 0px); transition: all 0.2s ease 0s;*/
    }

    .slider::before {
        left: 0;
        top: 0;
    }
    
    .slide{
        height: 100px;
        width: 250px;
        background-size: cover;
    }
    .slide-track {
        --animationSpeed: 40s;
        animation: scroll 40s linear infinite;
        display: flex;
        width: calc(250px * 14);
    }

   
</style>