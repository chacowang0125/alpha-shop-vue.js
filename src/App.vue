<template>
  <div id="alpha-shop">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'  //js在node_module已經指定預設路徑
import 'bootstrap/dist/css/bootstrap.min.css' //css

export default {
  name: 'App'
}
</script>