import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID W2shFBxWx72TR2TqJBfqpxl4_zQxwXRDenwk1l246Js",
    },
    params: {
      query: term,
    },
  });

  //   console.log(response);
  return response.data.results;
};

export default searchImages;
