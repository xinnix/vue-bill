<template>
  <div style="text-align:center;">
    <p :class=""><span>{{recordItem.type}}</span>/<span>{{recordItem.count}}</span>/<span>{{recordItem.date}}</span></p>
    <p :class="">{{recordItem.memo}}</p>
  </div>
</template>

<script>
export default {
  props:['recordItem']
}
</script>

<style scoped>

</style>
