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
