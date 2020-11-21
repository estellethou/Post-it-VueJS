<template>
  <div class="categories d-flex flex-wrap">
    <div v-bind:key="category.id" v-for="category in filterCategories()">
      <div class="card text bg-warning mb-3 item" style="max-width: 25rem">
        <div class="card-header header d-flex justify-content-between">
          <div class="title">
            {{ category.title }}
          </div>
          <router-link :to="`/${category._id}`">
            <img
              src="../../static/assets/more.png"
              width="25"
              height="25"
              alt="dot"
              class="more"
            />
          </router-link>
        </div>
        <div class="card-body card-style">
          <div
            class="subcard"
            v-bind:key="value.id"
            v-for="value in category.content"
          >
           {{ value }}
          </div>
          <div id="add-post-it">
            <AddNote v-bind:category="category" />
          </div>
        </div>
      </div>
    </div>

    <div class="addNote input-group mb-3">
      <input
        v-model="titleCategory"
        type="text"
        class="form-control"
        placeholder="Add new category"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button
          @click="addtitleCategory"
          class="btn btn-outline-secondary"
          type="button"
        >
          + Add Category
        </button>
      </div>
    </div>

    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AddNote from "../components/AddNote.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  watch: { //watching a specific data source and applies side effects in a separate callback function
    $route: {
      // immediate:true tells Vue to check the watched property $route when the component is created.
      immediate: true,
      //The handler property is the function that is executed when a changes occurs to the property we are watching
      handler: function (newVal) { 
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  components: {
    AddNote,
  },
  data() {
    return {
      showModal: false, // showModal is set to false to prevent the modal from being displayed when we first load the page.
      newPostit: null,
      titleCategory: "",
    };
  },
  methods: {
    ...mapActions(["addCategory"]),
    ...mapActions(["setCategories"]),
    addtitleCategory(e) {
      e.preventDefault();
      if (!this.titleCategory) {
        return;
      }
      this.addCategory(this.titleCategory);
      this.titleCategory = "";
    },
    filterCategories(){
      for (var cat_index in this.getAllCategories) {
        if (this.getAllCategories[cat_index].title == null){
          this.getAllCategories[cat_index].title = "<invalid title>";
        }
        for (var note_index in this.getAllCategories[cat_index].content){
          if (this.getAllCategories[cat_index].content[note_index] == null){
            this.getAllCategories[cat_index].content[note_index] = "<invalid note>";
          }
        }
      }
      return this.getAllCategories;
    }
  },
  computed: mapGetters(["getAllCategories"]),
  created() {
    this.setCategories();
  },
};
</script>

<style lang="scss">
.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.6);

  .modal-content {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255);
  }
}

.add-post-it {
  border: dotted 1px;
  border-radius: 20px;
  margin: 0.4rem;
  padding: 0.5rem;
  width: 100%;
  background-color: white;
  color: grey;
}

.add-post-cat {
  width: 100%;
  height: 2rem;
  border: dotted 1px;
  border-radius: 20px;
  color: grey;
  text-align: center;
}

.card-style {
  background: white;
  border: #e1ad01 solid 2px;
  border-radius: 15px;
}

.item {
  border-radius: 20px;
  margin: 2rem;
}

.subcard {
  display: flex;
  flex-direction: row;
  word-break: break-all
}

.header {
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.title {
  width: 80%
}

.main {
  margin: 0rem;
  flex-direction: row;
  justify-content: space-around;
}

.categories {
  display: flex;
  flex-direction: row;
}
</style>