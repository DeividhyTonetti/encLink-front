const genereteLink = async(data) => {
  try {
    const response =
      await fetch(`${process.env.REACT_APP_BASE_URL}/createLink`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({"url": data}),
      });
 
    return response.json();;
  } catch (error) {
    console.log('Erro: ', error);
  }
}

const getHits = async(data) => {

}


export {
  genereteLink,
  getHits,
}