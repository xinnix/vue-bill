<template>
  <div>
    <group title="记账信息">
      <radio :options="[ '支出', '收入' ]"  :value.sync="balance"></radio>
      <x-input title="金额" placeholder="填写金额" :value.sync="count"></x-input>
      <textarea :max=10 placeholder="请填写备注信息" :value.sync="memo"></textarea>
      <x-button type="warn" text="记账" @click="addBillClick"></x-button>
      <button>
    </group>
  </div>

</template>

<script>
import {
  XButton,
  Radio,
  Group,
  Input as XInput,
  Textarea
} from 'vux';

var Wilddog = require("wilddog");
var moment = require('moment');
var ref = new Wilddog("https://vue-bill.wilddogio.com/");
var itemsRef = ref.child('items');
var totalRef = ref.child('total');

export default {
  components: {
    Radio,
    XButton,
    Group,
    XInput,
    Textarea
  },
  data: function () {
    return {
          balance:'',
          count:0,
          memo:'',
          date:Date.now()
        }
  },
  props:['total'],
  methods: {
    // change(value) {
    //   console.log('change:', value)
    // },
    addBillClick(){
      var _this = this;
      itemsRef.push({
        balance:_this.balance,
        count:_this.count,
        memo:_this.memo,
        date:moment(Date.now()).format('YYYY-MM-DD')
      });

      totalRef.set({
        total:_this.total+_this.count
      });
      _this.balance='';
      _this.count='';
      _this.memo='';
    }

  }
}
</script>
