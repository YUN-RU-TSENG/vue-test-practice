<template>
  <div>
    <button v-show="loginIn">Logout</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginIn: false
      };
    }
  };
</script>