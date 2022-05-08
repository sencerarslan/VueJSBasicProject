
<template>
    <UserC :posts="posts"/>
</template>

<script> 
import UserC from '@/components/UserC';
import axios from 'axios';
export default {
  name: 'HomeP',
  data:()=>({
    posts:[],
  }),
  components:{
    UserC
  },
  created(){
    axios.get('http://localhost:5000/users').then(response=>{
      this.posts = response.data;
    })
  }
}
</script>
