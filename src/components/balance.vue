<template>

<group title="账户余额">
    <p :class="[total>0?pos:neg]">{{total}}</p>
</group>
</template>

<script>
import  { Group } from 'vux'
export default {
  props:['total'],
  data(){
    return {
      pos:'pos',
      neg:'neg'
    }
  },
  components:{
    Group
  }
}
</script>

<style scoped>
.neg {
  padding: 1em;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 3em;
  color: #04BE02;
  background-color: #ffffff;
}
.pos{
  padding: 1em;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 3em;
  color: #ff2400;
  background-color: #ffffff;
}

</style>
