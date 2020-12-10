<template>
<div class="overflow">
<machine v-for="(name, index) in list1" :key="index" 
 :machine-name="name"
></machine> 
</div>

<div class="overflow">
<machine v-for="(name, index) in list2" :key="index" 
 :machine-name="name"
></machine> 
</div>
<div class="overflow">
<machine v-for="(name, index) in list3" :key="index" 
 :machine-name="name"
></machine>  
</div>
<div class="overflow">
<machine v-for="(name, index) in list4" :key="index" 
 :machine-name="name"
></machine> 
</div>
<div class="overflow">
<machine v-for="(name, index) in list5" :key="index" 
 :machine-name="name"
></machine> 
</div>
<div class="overflow">
<machine v-for="(name, index) in list6" :key="index" 
 :machine-name="name"
></machine> 
</div>

<button @click="getMachines">Start</button>


 
</template>


<script>
import axios from 'axios';
export default {
  data(){
    return{
      info:null,
      list1:['Laser Cutter'],
      list2:null,
      list3:null,
      list4:null,
      list5:null,
      list6:null,

    }
  },

  methods:{
    getMachines(){
       axios
      .get('http://mkrspcbackend.herokuapp.com/getCategories/104')
      .then(response => this.info = response.data)
      console.log(this.info)
      
  
      this.list1 = this.info[0]
      this.list2 = this.info[1]
      this.list3 = this.info[2]
      this.list4 = this.info[3]
      this.list5 = this.info[4]
      this.list6 = this.info[5]

    },
    

  },
  
  
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


.overflow {
  background-color: #eee;
  width: 200px;
  height: 400px;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  display:inline-block;
  margin-right:20px;
}


</style>
