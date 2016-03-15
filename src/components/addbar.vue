<template>
  <div>
    <group title="记账信息">
      <alert :show.sync="show" title="提示">{{msg}}</alert>
      <radio :options="[ '支出', '收入' ]"  :value.sync="balance"></radio>
      <x-input title="金额" placeholder="填写金额" :value.sync="count" type="number" :required=true></x-input>
      <textarea :max=10 placeholder="请填写备注信息" :value.sync="memo" :required=true></textarea>
    </group>
    <x-button type="warn" text="记账" @click="addBillClick"></x-button>

  </div>

</template>

<script>
import {
  XButton,
  Radio,
  Group,
  Input as XInput,
  Textarea,
  Alert
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
    Textarea,
    Alert
  },
  data: function () {
    return {
          balance:'支出',
          count:0,
          memo:'',
          date:Date.now(),
          show:false,
          msg:''

        }
  },
  props:['total'],
  methods: {
    // change(value) {
    //   console.log('change:', value)
    // },
    addBillClick(){
      var _this = this;
      // _this.count = _this.balance.trim()=='收入'?_this.count:-_this.count;
      if(_this.balance&&_this.count&&_this.memo){
        var count = _this.balance=='收入'?_this.count:-_this.count;
        itemsRef.push({
          balance:_this.balance,
          count:_this.count,
          memo:_this.memo,
          date:moment(Date.now()).format('YYYY-MM-DD')
        });

        totalRef.set({
          total:Number(_this.total)+Number(count)
        });
        _this.balance='支出';
        _this.count='';
        _this.memo='';
        _this.show=true;
        _this.msg = '咻，发出去喽';
      }else{
        _this.show=true;
        _this.msg = '信息填完整再发';
      }

    }

  }
}
</script>
