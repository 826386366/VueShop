<template>
  <div>
      <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="/">主页</a>
                <slot></slot>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'NavBread',
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
