<template>
    <header>
      <div class="header_card">
        <div class="lang">
          <b-dropdown text="Language »"  style="color:rgb(239, 208, 171) ;">
            <b-dropdown-item >
              <div class="flag">
                 <div class="chine"></div>
                 <div class="english"></div>
                 <div class="portugal"></div>
                 <div class="russie"></div>
              </div>
            </b-dropdown-item>
          </b-dropdown>
          </div>
        <div class="card_logo">
            <img src="https://americarprestige.com/wp-content/uploads/2016/11/logotest2.png" alt="" class="image">
        </div>
        <div>
          <ul>
            <li style="cursor:pointer ;" @click="goto('Home')">SOCIETE</li>
            <li style="cursor:pointer ;" @click="goto('les_vehicules')">LES VEHICULES </li>
            <li style="cursor:pointer ;" @click="goto('tarifs')">TARIFS</li>
            <li style="cursor:pointer ;" @click="goto('services')">SERVICES</li>
            <li><a href="">ACTUALITE</a></li>
            <li style="cursor:pointer ;" @click="goto('contact')">CONTACT</li>
          </ul>
        </div>
      </div>
      
    </header>
</template>
<script>
export default{
  data: () => ({
  }),

  methods: {
    goto(path){
      console.log(path)
      this.$router.push({
        name:path
      });
      
    }
  },
}
</script>

<style>
.header_card{
  height: 300px;
  width: 100%;
}
.card_logo{
  height: 170px;
  width: 80%;
  margin-left: 10%;
  margin-top: 25px;
  /*background-color: aliceblue;*/
}
.lang{
  height: 25px;
  width: 90px;
  color:  rgb(239, 208, 171);
  margin-right: 40px;
  position: relative;
  left: 1350px;

}
.image{
  width: 137.61px;
  height: 120px;
}
a:link {
  text-decoration: none;
  color: aliceblue;
}

/* visited link 
a:visited {
  color: green;
}*/

/* mouse over link */
a:hover {
  color: rgb(244, 225, 57);
}

/* selected link */
a:active {
  color: rgb(244, 225, 57);
}
.flag{
  width: 120px;
  height: 20px;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px;
}
.russie{
  background-image: url("//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png");
  background-size: cover;
 
  position: relative;
}
.chine{
  background-image: url("//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png");
  background-size: cover;
   margin-right: 5px;
}
.portugal{
  background-image: url("//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png");
  background-size: cover;
  margin-right: 5px;

}
.english{
  background-image: url("//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/800px-Flag_of_the_United_Kingdom.png");
  background-size: cover;
  margin-right: 5px;
}
</style>