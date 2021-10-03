<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">REDES 2</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/reportes" class="nav-link">Ver reportes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Reporte</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
