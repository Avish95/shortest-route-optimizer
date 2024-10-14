<script setup lang="ts">
import HeaderText from './components/HeaderText.vue'
import CalculatorWrapper from './components/CalculatorWrapper.vue'
</script>

<template>
  <header class="header">
    <HeaderText />
  </header>
  <main class="main-centered">
    <CalculatorWrapper />
  </main>
</template>

<style scoped>
.main-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

}

.header {
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

@media (max-width: 1200px) {
  .header {
    top: 3rem;
  }
  .main-centered {
    padding: 0.75rem;
  }
}

/* Media Query for Screens Up to 900px */
@media (max-width: 900px) {
  .header {
    top: 2rem;
  }

  main {
    width: 100%;
  }
}
</style>
