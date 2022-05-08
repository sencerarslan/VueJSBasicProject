<template>
  <v-container grid-list-xs>
    <router-link to="/">Back</router-link>
  <v-card
    class="mx-auto"
    width="400" 
  >
    <template v-slot:title>{{posts.username}}</template> 
    <v-card-text>
      {{posts.email}} | {{posts.age}}
    </v-card-text>
  </v-card>
  </v-container> 
</template>

<script>

import axios from 'axios';
export default {
    name:'UserDetail',
    props:["user"],
    data:()=>({
        posts:{},
    }),
    created(){  
        axios.get('http://localhost:5000/users/'+this.$route.params.id).then(response=>{  
            this.posts = response.data;
        });
    }
}
</script>
