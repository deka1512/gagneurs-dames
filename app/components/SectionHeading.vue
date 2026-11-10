<script setup lang="ts">
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

const props = withDefaults(defineProps<SectionHeadingProps>(), {
  centered: false,
})
</script>

<template>
  <div class="section-heading" :class="{ 'is-centered': props.centered }">
    <span v-if="props.eyebrow" class="eyebrow">{{ props.eyebrow }}</span>
    <h2>{{ props.title }}</h2>
    <p v-if="props.description">{{ props.description }}</p>
  </div>
</template>
