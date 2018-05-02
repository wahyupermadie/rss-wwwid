<template>
  <v-container grid-list-md text-md>
    <v-progress-linear :indeterminate="true" v-if="isLoading"></v-progress-linear>
    <template v-if="!isLoading" v-for="(item,index) in items">
      <v-flex md12 :key="index" style="padding-bottom: 15px">
        <h1>{{item.title}}</h1>
        <h3>{{item.author}} {{item.datePublish}}</h3>
        <img 
          v-lazyload
            class="lazy"
            src="../assets/placeholder.png"
            :data-src="item.thumbnail"
            data-err="../assets/broken-image.jpg">
        <p v-html="item.paragraf"></p>
        
         <div class="text-xs-center">
          <v-chip v-for="(category,index) in item.categories" :key="index">{{category}}</v-chip>
        </div>
        <v-divider style="height: 10px !important;"></v-divider>
      </v-flex>
    </template>
  </v-container>
</template>

<script>
const REGEX_FIRST_PARAGRAPH = /<p>.*.<\/p>\n</g
import axios from 'axios'
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoading:'',
      items: [],
      WWWID_URL:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'
    }
  },
  created:function(){
      this.getData()
  },
  methods:{
    getData(){
      this.isLoading = true;
      axios.get(`${this.WWWID_URL}`).then((response)=>{
        console.log(this.items)
          for(let i=0;i<response.data.items.length;i++){
            const paragraf = response.data.items[i].content.match(REGEX_FIRST_PARAGRAPH)
            const imgCompressed = this.convertImages(response.data.items[i].thumbnail)
            const newParagraf = paragraf[0].slice(0, -1)
                                    .replace('<p>', '<span>')
                                    .replace('</p>', '</span>')
            let data = ({
              categories : response.data.items[i].categories,
              title : response.data.items[i].title,
              author : response.data.items[i].author,
              thumbnail : imgCompressed,
              paragraf : newParagraf,
              datePublish : response.data.items[i].pubDate,
            })
            this.items.push(data)
            this.isLoading=false;
            console.log(data)
          }
      }, (err) => {
        console.log(err)
      })
    },
    convertImages(image){
      return `https://res.cloudinary.com/wahyupermadie/image/fetch/c_fill,g_auto:face,h_120,w_120,fl_force_strip.progressive/f_webp/${image}`
    },
    getFirstParagraf(content){
        $string = substr(content,0, strpos(content, "</p>")+4);
        return $string;
    }
  }
}
</script>
<style>
.lazy {
  display: block;
  margin: 1em auto;
  text-align: center;
  width: 350px;
  height: 350px;
}
</style>


