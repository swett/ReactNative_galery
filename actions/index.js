import axios from "axios"

export const actionGetImages = () => async (dispatch) => {
  function onSuccess(success) {
    dispatch({ type: "FETCH_IMAGES", payload: success })
  }

  let URL = "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"

  axios.get(URL)
    .then(response => { onSuccess(response.data) })
    .catch(error => { console.log(error) })

}


/* 
axios.get(URL)
            .then(response => {
                setImages(response.data)
            })
            .catch(error => {
                console.log(error)
            })
*/