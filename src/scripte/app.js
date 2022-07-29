import axios from "axios";
export default {
    name: 'app',
    data: () => ({ 
      model: null,
      bloc1:null,
      bloc2:null,
      bloc3:null,
      carousel:[],
      links: [
        'NEWSLETTER',
        'About Us',
        'Contact Us',
      ],
       cards: [
          { title: 'Pre-fab homes', src: './images/rr.jpg', flex: 12 },
          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        
    }),
  
     beforeMount(){
      axios.get('http://localhost:1337/api/bloc1?populate=*').then(Response => {
      console.log('bloc1',Response);
        this.bloc1=Response.data.data.attributes.text;
      }).catch(error=>{
          console.log(error);
        });
      axios.get('http://localhost:1337/api/bloc2?populate=*').then(Response => {
      console.log('bloc2',Response);
        this.bloc2=Response.data.data.attributes.text;
      }).catch(error=>{
          console.log(error);
        });
      axios.get('http://localhost:1337/api/bloc3?populate=*').then(Response => {
      console.log('bloc3',Response);
        this.bloc3=Response.data.data.attributes.text3;
      }).catch(error=>{
          console.log(error);
        });  
        // TABLEAU
        const tableau =[0,1,2,3,4,5,6,7,8,9]
      tableau.forEach(element => {
            axios.get('http://localhost:1337/api/carousel?populate=*').then(Response => {
            //console.log('images',Response);
            this.carousel[element]=Response.data.data.attributes.carousel.data[element].attributes.url;
            console.log(this.carousel[element])
            }).catch(error=>{
              console.log(error);
            });
      });
    }
  }