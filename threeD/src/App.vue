<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0}
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}
#app{
  height: 100%;
  width: 100%;
}
</style>
