<template>
  <div id="app">
    <div class="zj">
       <p><router-link to="/testA">go to foo</router-link></p>
      <p><router-link to="/testB">go to bar</router-link></p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
