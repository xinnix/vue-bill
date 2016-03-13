  <template>
  <template v-for="item in items">
    <record :record-item = "item"></record>
  </template>
  </template>

<script>
import   record  from './record'
export default {
  props:['items'],
  data(){

  },
  components:{
    record
  }
}
</script>

<style scoped>

</style>
