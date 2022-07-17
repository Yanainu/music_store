// eslint-disable-next-line arrow-body-style
export const getData = (endpoint) => {
  return fetch(endpoint).then((result) => result.json()).then((data) => data.data);
};

export const formatProductsData = (receivedData) => {
  const resultArray = receivedData.map((item) => ({
    name: item.attributes.name,
    price: item.attributes.price,
    description: item.attributes.description,
    colors: item.attributes.colors,
    img: item.attributes.img,
    id: item.id,
  }));
  return resultArray;
};

export const formatArticlesData = (receivedData) => {
  const resultArray = receivedData.map((item) => ({
    title: item.attributes.title,
    subhead: item.attributes.subhead,
    theme: item.attributes.theme,
    imageUrl: item.attributes.imageUrl,
    id: item.id,
  }));
  return resultArray;
};

export const formatOneProductData = (receivedData) => {
  const resultObject = {
    name: receivedData.attributes.name,
    price: receivedData.attributes.price,
    description: receivedData.attributes.description,
    colors: receivedData.attributes.colors,
    id: receivedData.id,
    img: receivedData.attributes.img,
  };
  return resultObject;
};

export const formatOneLessonData = (receivedData) => {
  const resultObject = {
    title: receivedData.attributes.title,
    subhead: receivedData.attributes.subhead,
    imageUrl: receivedData.attributes.imageUrl,
    id: receivedData.id,
  };
  return resultObject;
};

export const getDetailsById = (id, route) => {
  const receivedData = getData(`http://localhost:1337/api/${route}/${id}`);
  return receivedData;
};

export const backendUrl = 'http://localhost:1337';

export const saveJwtTokenToLocalStorage = (response) => {
  response.json().then((data) => {
    localStorage.setItem('currentJwt', data.jwt);
    console.log('jwt in storage', data.jwt);
  });
};
