<template>
<div class="slider">
	<div class="slide-track">
		<div class="slide" v-for="link in links">
			<img v-bind:src="link.img" alt=""  height="80" width="80"/>
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name:"app",
    data:() => ({
        links:[
            {index:1,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-audi.jpg"},
            {index:2,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-aston-martin.jpg"},
            {index:3,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-bentley.jpg"},
            {index:4,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-bmw.jpg"},
            {index:5,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-bugatti.jpg"},
            {index:6,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-cadillac.jpg"},
            {index:7,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-chevrolet.jpg"},
            {index:8,img:"https://americarprestige.com/wp-content/uploads/2018/04/chrisler.jpg"},
            {index:9,img:"https://americarprestige.com/wp-content/uploads/2019/07/logo-citroen.jpg"},
            {index:10,img:"https://americarprestige.com/wp-content/uploads/2018/04/dodge.jpg"},
            {index:11,img:"https://americarprestige.com/wp-content/uploads/2018/04/excalibur.jpg"},
            {index:12,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-ferrari.jpg"},
            {index:13,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-ford.jpg"},
            {index:14,img:"https://americarprestige.com/wp-content/uploads/2018/04/hummer.jpg"},
            {index:15,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-jaguar.jpg"},
            {index:16,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-range-rover.jpg"},
            {index:17,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-lamborghini.jpg"},
            {index:18,img:"https://americarprestige.com/wp-content/uploads/2018/04/lincoln.jpg"},
            {index:19,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-mclaren.jpg"},
            {index:20,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-maserati.jpg"},
            {index:21,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-maybach.jpg"},
            {index:22,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-mercedes.jpg"},
            {index:23,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-porsche.jpg"},
            {index:24,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-rolls-royce.jpg"},
            {index:25,img:"https://americarprestige.com/wp-content/uploads/2017/01/logo-tesla.jpg"},
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
    .slider {
        background: rgb(5, 0, 0);
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
    }
    .slide-track {
        --animationSpeed: 40s;
        animation: scroll 40s linear infinite;
        display: flex;
        width: calc(250px * 14);
    }

   
</style>