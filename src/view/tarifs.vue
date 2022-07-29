<template>

    <!--<div>
        <v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect" 
            item-key="name" class="elevation-1">
            <template v-slot:top>
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
            </template>
        </v-data-table>
    </div>-->
    <div style="height:500px;">
    bgfff
      <Excel/>
    </div>
              
</template>

<script>
import excel from '../componentes/excel.vue'
import Excel from '../componentes/excel.vue'
export default {
    data: () => ({
        /*singleSelect: false,
        selected: [],*/
        component: [
            excel
        ],
        headers: [
            { text: "Véhicule", align: "start", sortable: false, value: "name", },
            { text: "Jour (200km)", value: "calories" },
            { text: "Week-end 72H (600km)", value: "fat" },
            { text: "Semaine (1400km)", value: "carbs" },
            { text: "Km supplémentaire", value: "protein" },
            { text: "Caution", value: "iron" },
        ],
        desserts: [
            { name: "Audi Q7", calories: 159, fat: 6, carbs: 24, protein: 4, iron: "1%", },
            { name: "Audi Q8", calories: 237, fat: 9, carbs: 37, protein: 4.3, iron: "1%", },
            { name: "Bentley Bentayga", calories: 262, fat: 16, carbs: 23, protein: 6, iron: "7%", },
            { name: "BMW X5", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: "8%", },
            { name: "BMW X6", calories: 356, fat: 16, carbs: 49, protein: 3.9, iron: "16%", },
            { name: "Cadillac Escalade", calories: 375, fat: 0, carbs: 94, protein: 0, iron: "0%", },
            { name: "Hummer H2", calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: "2%", },
            { name: "Jaguar F-Pace", calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: "45%", },
            { name: "Jaguar I-Pace", calories: 452, fat: 25, carbs: 51, protein: 4.9, iron: "22%", },
            { name: "Lanborghini Urus", calories: 518, fat: 26, carbs: 65, protein: 7, iron: "6%", },
            { name: "Land Rover Range Rover", calories: 159, fat: 6, carbs: 24, protein: 4, iron: "1%", },
            { name: "Land Rover Range Rover Evoque", calories: 237, fat: 9, carbs: 37, protein: 4.3, iron: "1%", },
            { name: "Land Rover Range Rover Sport", calories: 262, fat: 16, carbs: 23, protein: 6, iron: "7%", },
            { name: "Land Rover Rang Rover Velar", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: "8%", },
            { name: "Maserati Levante", calories: 356, fat: 16, carbs: 49, protein: 3.9, iron: "16%", },
            { name: "Mercedes-Benz EQC", calories: 375, fat: 0, carbs: 94, protein: 0, iron: "0%", },
            { name: "Mercedes-Benz Classe G63 AMG", calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: "2%", },
            { name: "Mercedes-Benz GLE", calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: "45%", },
            { name: "Mercedes-Benz GLE Coupé", calories: 452, fat: 25, carbs: 51, protein: 4.9, iron: "22%", },
            { name: "Mercedes-Benz Classe GLS", calories: 518, fat: 26, carbs: 65, protein: 7, iron: "6%", },
        ],
        namecar: [
            "Audi Q7",
            "Audi Q8",
            "Bentley Bentayga",
            "BMW X5",
            "BMW X6",
            "Cadillac Escalade",
            "Hummer H2",
            "Jaguar F-Pace",
            "Jaguar I-Pace",
            "Lanborghini Urus",
            "Land Rover Range Rover",
            "Land Rover Range Rover Evoque",
            "Land Rover Range Rover Sport",
            "Land Rover Rang Rover Velar",
            "Maserati Levante",
            "Mercedes-Benz EQC",
            "Mercedes-Benz Classe G63 AMG",
            "Mercedes-Benz GLE",
            "Mercedes-Benz GLE Coupé",
            "Mercedes-Benz Classe GLS",
            "Porsche Cayennes",
            "Porsche Cayenne Coupé",
            "Porsche Macan S",
            "Rolls-Royce Cullinan",
            "Tesla Model X"
        ]
    }),
    components: { Excel }
}
</script>

<style>
li a {text-decoration : none; color : #2d2f31;}


nav {
  width : 100%; 
  background: #d9d9d9;
  margin : 40px auto; 
}

span {
  padding : 30px;
  background : #2d2f31; 
  color : white;
  font-size : 1.2em;
  font-variant : small-caps;
  cursor : pointer;
  display: block;
  text-align: left;
  width: 100%;
}

span::after {
  float: right;
  right: 10%;
  content: "+";
}

.slide {
  clear:both;
  width:100%;
  height:100%;
  overflow: hidden;
  text-align: center;
  transition: height .4s ease;
}

/*.slide li {padding : 30px;}*/

#touch {position: absolute; opacity: 0; height: 0px;}

#touch:checked + .slide {height: 0px;} 
</style>