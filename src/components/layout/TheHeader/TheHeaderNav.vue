<template>
  <nav>
    <ul class="flex lg:justify-end justify-center mt-6 lg:mt-0 flex-wrap">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex flex-nowrap uppercase"
      >
        <router-link
          to="/"
          class="text-white text-sm px-2 py-4 cursor-pointer"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>
