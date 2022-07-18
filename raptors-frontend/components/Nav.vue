<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Raptors</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <NuxtLink to="/gallery" class="nav-link" activeClass="active">Gallery</NuxtLink>
        <NuxtLink to="/teams" class="nav-link" activeClass="active">Teams</NuxtLink>
        <NuxtLink to="/events" class="nav-link" activeClass="active">Events</NuxtLink>
        <NuxtLink to="/news" class="nav-link" activeClass="active">News</NuxtLink>
        <NuxtLink to="/about" class="nav-link" activeClass="active">About us</NuxtLink>
      </div>
    </div>
  </div>
</nav>
</template>


<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>