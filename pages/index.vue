<script>
export default {
  data() {
    return {
      topic: "",
      slug: "",
      text: "",
      loading: false,
    };
  },
  methods: {
    slugify() {
      //   const { value } = topic;
      this.slug = this.topic
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    },
    handleInput(e) {
      this.topic = e.target.value;
      this.slugify();
      //   console.log(slug.value);
    },
    async generateText(e) {
      e.preventDefault();
      this.loading = true;
      const body = JSON.stringify({
        slug: this.slug,
        topic: this.topic,
      });
      try {
        const res = await fetch("/write", {
          method: "POST",
          body,
        });
        let data = await res.json();
        if (data) {
          this.text = data.api;
          this.loading = false;
        }
        // console.log(this.text);
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
    gotoPage() {
      this.$router.push(`/blog/${this.slug}`);
    },
  },
};
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <form @submit="generateText" class="w-full">
      <label for="topic" class="">
        <input
          name="topic"
          type="text"
          class="border-2 border-gray-300 w-4/5"
          :value="topic"
          @input="handleInput($event)"
          required
        />
      </label>
      <button
        type="submit"
        class="bg-gradient-to-tr via-teal-400 to-teal-900 from-cyan-500 text-white p-1 my-5 text-sm capitalize rounded cursor-pointer hover:to-teal-300 hover:from-teal-800 ease-in-out hover:px-2"
      >
        {{ loading ? "loading..." : "generate" }}
      </button>
    </form>
    <div class="w-full relative" v-if="text">
      <textarea
        name="textOutput"
        id="textOutput"
        class="border-2 border-gray-300 w-4/5 px-4 pt-14 pb-3"
        rows="15"
        readonly
        :value="text"
      ></textarea>
      <div class="bg-gray-800 w-4/5 text-gray-50 absolute top-0 p-3">
        <div class="float-right">
          <span class="mr-5 cursor-pointer" @click="gotoPage"> preview </span>
          <span class="">copy</span>
        </div>
      </div>
    </div>
  </div>
</template>
