import axios from "axios"

const state = {
    categories: [],
    note: {},
}

const getters = {
    getAllCategories: (state) => state.categories,
    getNote: (state) => id => {
        for( var index in state.categories){
            if (state.categories[index]._id === id){
                return state.categories[index]; //.content to get the content of the note and .title to get the title of the note
            }    
        } 
    }
};

const actions = {
    async setCategories({ commit }){
        const response = await axios.get ("http://postit.wac.under-wolf.eu/notes");
        commit('setMyCategories', response.data.notes)
    },
    async addCategory ({ commit }, title){
        var response = await axios.post ("http://postit.wac.under-wolf.eu/notes",  {title, content:[]});
        response = await axios.get(`http://postit.wac.under-wolf.eu/notes/${response.data.note_id}`);
        commit('addMyCategory', response.data.note);
    },
    async deleteCategory ({ commit }, id) {
        await axios.delete(`http://postit.wac.under-wolf.eu/notes/${id}`);
        commit('deteleMyCategory', id)
    },
    async editNote ({ commit }, updatenote) {
        await axios.put(`http://postit.wac.under-wolf.eu/notes/${updatenote.id}`, updatenote);
        commit('editMyNote', updatenote)
    },
    async addNote ({ commit }, updatenote){
        await axios.put(`http://postit.wac.under-wolf.eu/notes/${updatenote.id}`, updatenote);
        commit('addMyNote', updatenote)
    }
};

const mutations = {
    setMyCategories: (state, categories) => {
        //for (var i=0; i<categories.length; i++){
        //    if (categories[i].content == [null]) {
        //        console.log(categories[i].content);
        //        categories[i].content = [];
        //    }
        //}
        state.categories = categories;
    },
    addMyCategory: (state, newCategory) => (state.categories.push(newCategory)),
    deteleMyCategory: (state, id) => (state.categories = state.categories.filter(category => category._id !== id)),
    editMyNote: (state, updatenote) => { // delete note
        if (updatenote === 'object' && updatenote !== null) {
            return true;
        }
        else {
            return false;
        }
    },
    addMyNote: (updatenote) => {
        if (updatenote === 'object' && updatenote !== null) {
            return true;
        }
        else {
            return false;
        }
    },
}
   
export default {
    state,
    getters, 
    actions,
    mutations
};