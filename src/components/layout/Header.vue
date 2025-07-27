<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center border-bottom">
      <ul class="nav nav-pills">
        <li class="nav-item"><router-link :to="ROUTE_NAMES.LOGS" class="nav-link">Logs</router-link></li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import {ROUTE_NAMES} from '@/constants/routeNames.js'
</script>
