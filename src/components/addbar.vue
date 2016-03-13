<template>
  <div>
    <group title="记账信息">
      <radio :options="radioitems" @change="change"></radio>
      <x-input title="金额" placeholder="填写金额"></x-input>
      <textarea :max=200 placeholder="请填写备注信息"></textarea>
      <x-button type="warn" text="记账"></x-button>
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
          radioitems: [ '支出', '收入' ]
        }
  },
  methods: {
    change: function (value) {
      console.log('change:', value)
    }
  }
}
</script>
