<template>
  <div class="addNote input-group mb-3">
    <input
      v-model="newPostit"
      v-on:keyup.enter="onSubmit(getNote(category._id))"
      class="form-control"
      placeholder="Add new task"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddNote",
  data() {
    return {
      newPostit: "",
    };
  },
  props: ["category"],
  methods: {
    ...mapActions(["addNote"]),
    onSubmit(note) {
      var arrayNote = note.content;
      arrayNote.push(this.newPostit);
      const newNote = {
        id: note._id,
        title: note.title,
        content: arrayNote,
      };
      this.addNote(newNote);
      this.newPostit = "";
    },
  },
  computed: mapGetters(["getNote"], ["getAllCategories"]),
};
</script>

<style scoped lang="scss">
</style>
