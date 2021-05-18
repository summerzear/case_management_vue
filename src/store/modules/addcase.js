import { addCase } from '@/api/table'

const state = {
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
}

const mutations = {
  add(state, datalist) {
    return new Promise(resolve => {
      resolve()
    })
  }
}

const actions = {
  add(state, datalist) {
    const { name } = datalist
    return new Promise((resolve, reject) => {
      addCase({
        page: 1,
        per_page: 10,
        query: {
          case_id: '',
          case_name: name,
          business_id: '',
          module_id: '',
          editor: '',
          edit_time: '',
          case_content: ''
        }
      }).then(response => {
        const { data } = response
        console.log(data)
        resolve()
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
