<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  number: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <article class="content-card h-100">
    <div v-if="number" class="step-badge">{{ number }}</div>
    <div v-else-if="icon" class="feature-icon">
      <i :class="['bi', icon]" aria-hidden="true"></i>
    </div>
    <div v-if="number && icon" class="feature-icon feature-icon-inline">
      <i :class="['bi', icon]" aria-hidden="true"></i>
    </div>
    <h3 :class="{ 'mb-2': !compact, 'mb-1': compact }">{{ title }}</h3>
    <p class="mb-0">{{ text }}</p>
  </article>
</template>
