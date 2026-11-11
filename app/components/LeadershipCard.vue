<script setup lang="ts">
import type { LeadershipMember } from '~/data/leadership'

defineProps<{ member: LeadershipMember }>()

const hideBrokenImage = (event: Event) => {
  const image = event.target
  if (image instanceof HTMLImageElement) image.style.display = 'none'
}
</script>

<template>
  <article class="leadership-card">
    <div class="leadership-avatar">
      <span>{{ member.initials }}</span>
      <img :src="member.image" :alt="member.imageAlt" loading="lazy" decoding="async" @error="hideBrokenImage">
    </div>
    <div class="leadership-card-copy">
      <span class="leadership-group">{{ member.group }}</span>
      <h3>{{ member.name }}</h3>
      <strong>{{ member.title }}</strong>
      <p>{{ member.description }}</p>
    </div>
  </article>
</template>
