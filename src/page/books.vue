<template>
  <div class="books-bg">
    <div id="books-list">
      <!-- <login-input style="float: left;margin-left: 40px;"></login-input> -->
      <books></books>
    </div>
  </div>
</template>

<script>

import Books from '../components/books'

export default {
  name: 'books-list',
  components: {Books},
  data () {
    return {
    }
  },
  methods:{

  }
}

</script>

<style scoped>
  .books-bg{
    width: 100%;
    height: 100%;
  }
  #books {
    width: 400px;
    height: 300px;
    margin: auto;
    background: aliceblue;
    border-radius: 8px;
    top: 30%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>
