import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Category from './components/Category.vue'
import Notes from './components/Notes.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      component: Category,
      children: [
        {
          meta: {
            showModal: true
          },
          path: ':categoryId', //the url path is in fact /:cayegoryId (:categoryId == parameter)
          component: Notes, 
          props: true //when props is set to true, the route.params will be set as the component props
        }
      ]
    },
  ]
})
