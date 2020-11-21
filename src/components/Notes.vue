<template>
  <div class="note-info">
    <router-link to="/">X</router-link>
    <h2 class="d-flex justify-content-center">
      {{ getNote(categoryId).title }}
    </h2>
    <div
      v-for="(post, post_index) in getNote(categoryId).content"
      v-bind:key="post.id"
    >
      <div class="item d-flex justify-content-between align-items-center">
        <input readonly="readonly" style="font-size: 1.5rem" :value="post" />
        <button
          type="button"
          class="btn btn-sm btn-outline-danger"
          @click="onClick(getNote(categoryId), post_index)"
        >
          Delete note
        </button>
      </div>
    </div>
    <router-link :to="`/`">
      <button
        type="button"
        class="btn btn-danger"
        @click="deleteMyCategory(categoryId)"
      >
        Delete category
      </button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["categoryId"],
  data() {
    return {
      title: "",
      newNote: "",
    };
  },
  methods: {
    ...mapActions(["deleteCategory"]),
    deleteMyCategory(categoryId) {
      this.deleteCategory(categoryId);
    },
    ...mapActions(["editNote"]),
    onClick(note, index_note) {
      var arrayNote = note.content;
      arrayNote.splice(index_note, 1);
      const updatenote = {
        id: note._id,
        title: note.title,
        content: arrayNote,
        index: index_note,
      };
      this.editNote(updatenote);
    },
  },
  computed: mapGetters(["getNote"], ["getAllCategories"]),
};
</script>

<style lang="scss" scoped>
.note-info {
  padding: 16px;
}
</style>