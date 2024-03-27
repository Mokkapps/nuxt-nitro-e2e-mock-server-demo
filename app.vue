<script setup lang="ts">
const { data: users } = await useFetch("/api/users");
</script>

<template>
  <div
    class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8"
    data-testid="users-container"
  >
    <UCard v-for="user of users" :key="user.id" data-testid="user-card">
      <template #header>
        {{ user.name }}
      </template>

      <div class="flex flex-col gap-4">
        <span>Email: {{ user.email }}</span>
        <span>Phone: {{ user.phone }}</span>
      </div>
    </UCard>
  </div>
</template>
