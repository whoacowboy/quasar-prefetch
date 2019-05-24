import axios from 'axios'

export function loadData (context) {
  const uri = 'https://api.thecatapi.com/v1/images/search'
  axios.get(uri).then((response) => {
    context.commit('set', response.data[0])
  }, (error) => {
    console.log('There was an error', error)
  })
}
