<template>  
  <v-container grid-list-xs>
  <v-table>
    <thead>
      <tr>
          <th class="text-left">User Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Age</th> 
      </tr>
    </thead>
    <tbody>
        <tr @click="post_detail(item._id)" v-for="item in posts" :key="item._id">
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.age }}</td>
      </tr>
    </tbody>
  </v-table> 
  </v-container> 
</template>

<script>
export default{
  name:'UserC',
  props:["posts"],
  methods:{
    post_detail(id){
      this.$router.push('/user/'+id);
    }
  }
}
</script>

<style scoped>

</style>
