  <template>
  <!-- <template v-for="item in items">
    <record :record-item = "item"></record>
  </template> -->
  <group  title="收支记录">
      <cell v-for="item in items" :title="item.memo+'/'+item.date">
    <!-- <ul v-for="item in items"> -->
        <!-- <li> -->
        <div slot="value">
          <span :class="[item.balance=='收入'?style.pos:style.neg]">{{item.balance+' '+item.count}}</span>
        </div>
      <!-- </li> -->
    <!-- </ul> -->
      </cell>
  </group>
  </template>

<script>
import {
  Group,
  Cell
} from 'vux';
export default {
  props:['items'],
  data(){
    return {
      style:{
        pos:'pos',
        neg:'neg'
      }
    }
  },
  components:{
    Group,Cell
  }
}
</script>

<style scoped>
.neg {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  color: #04BE02;
  background-color: #ffffff;
}
.pos{
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  color: #ff2400;
  background-color: #ffffff;
}
</style>
