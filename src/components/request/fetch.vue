<template>
  <div>
    <div class="title" v-title>this is Fetch component</div>
    <div class="desc">此组件只总结Fetch的相关知识</div>
    <h3>以下是用fetch请求过来的用户！</h3>
    <div class="names">
      <span v-for="user in users" :key="user.id">{{user.name}}</span>
    </div>
  </div>
</template>

<script>
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default {
  name: "Fetch",
  data () {
    return {
      users: [],
    };
  },

  components: {},

  methods: {},

  created() {
    var _this = this;
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(function(data) {
      return data.json(); //  此处是为了解决返回的数据body为readableStream的问题
    })
    .then(function(result) {
      _this.users = result.slice(0,5)
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  mounted() {}

}

</script>

<style scoped>
.names span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: cornflowerblue;
  margin: 10px;
}
</style>