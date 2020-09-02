
<template>
  <div id="app">
      <Home></Home>
      <Aboutme></Aboutme>
  </div>
</template>

<script>
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";
export default {
  components: {
    Aboutme,
    Home
  },
  name: "App",
};
</script>
