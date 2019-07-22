<template>
  <div class="d-flex" id="wrapper">
    <Sidebar></Sidebar>
    <div id="page-content-wrapper">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

export default {
  components: {
    Sidebar,
    Navbar,
    Content
  }
};
</script>

<style>
</style>
