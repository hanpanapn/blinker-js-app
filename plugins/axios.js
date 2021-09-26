export default function({ $axios, redirect,store }) {
  $axios.onError(error => {
    if (error.code === 500) {
      redirect("/sorry");
    }
  });
  $axios.onRequest(config => {
   
  });
  $axios.onResponse(response => {
  //  console.log("response", response);
    return response.data;
  });
  if (store.state.auth.token) {
    $axios.setHeader("Authorization", store.state.auth.token);
  }

  $axios.setHeader("Content-Type", "application/json");
}
