export const set = (state, data) => {
  console.log('hit mutations', data)
  if (data) {
    state.username = data.id
    state.avatar_url = data.url
  }
}
