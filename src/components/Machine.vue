<template>
<div>
    <p :style="{color: choose ? green : red}" @click="change">{{machineName}}</p>
</div>
    
</template>

<script>
export default {
    props:{
        picked:{
            type:Boolean,
            required:false,
            default:false
        },
        machineName:{
            type:String,
            required:true

        }
    },
    data(){
        return{
            name:'placeholder',
            choose: this.picked
        }
    },
    methods:{
        change(){
            this.choose  = !this.choose
      
    }



    }
    
}
</script>

<style scoped>
div{
    margin-right:10px  !important
}


</style>