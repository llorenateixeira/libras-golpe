<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <header class="container py-3 py-lg-4 site-header-shell">
    <nav class="navbar navbar-expand-lg px-0" aria-label="Navegação principal">
      <div class="container-fluid px-0">
        <a class="navbar-brand d-flex align-items-center gap-3 fw-bold" href="#tema">
          <span class="brand-badge">Libras</span>
          <span class="brand-text">Material visual acessível</span>
        </a>

        <button
          class="navbar-toggler border-0 shadow-none px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Abrir navegação"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="mainNav" class="collapse navbar-collapse justify-content-end">
          <div class="navbar-nav gap-lg-2">
            <a
              v-for="item in items"
              :key="item.href"
              class="nav-link fw-semibold"
              :href="item.href"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
