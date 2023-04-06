<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async generateText() {
      try {
        const res = await fetch("/api/write");
        let data = await res.json();
        this.text = data.api;
        console.log(this.text);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
