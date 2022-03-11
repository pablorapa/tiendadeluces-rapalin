import prodImg1 from '../../assets/vela1.png';
import prodImg2 from '../../assets/vela2.png';

const productList = [
    {
      id: 1,
      name: 'Vela decorativa simple',
      href: '#',
      imageSrc: prodImg1,
      imageAlt: "Vela decorativa.",
      price: 300,
    },
    {
        id: 2,
        name: 'Vela decorativa con apagavela',
        href: '#',
        imageSrc: prodImg2,
        imageAlt: "Vela con apagavela.",
        price: 380,
        stock: 0,
        initial: 0,
      }
  ];

  const productDetail = [
      {
          id: 1,
          name: 'Vela decorativa simple',
          stock: 10,
          initial: 1,
          imageSrc: prodImg1,
          description: 'Vela decorativa de soja, con fragancia vainilla.',
          details: 'Presentación en vaso de vidrio. Su diseño texturado y reflectante permite que los destellos luminosos que lo atraviesan formen sofisticadas figuras sobre la superficie donde se la coloque.',
          price: 300,
      },
      {
          id: 2,
          name: 'Vela decorativa con apagavela',
          stock: 15,
          initial: 1,
          imageSrc: prodImg2,
          description: 'Vela decorativa de soja, con fragancia vainilla. Incluye apagavela.',
          details: 'Presentación en vaso de vidrio. Su diseño texturado y reflectante permite que los destellos luminosos que lo atraviesan formen sofisticadas figuras sobre la superficie donde se la coloque.',
          price: 380,
      }
  ];

export function getProducts() {
    return productList;
}

export function getProduct(id) {
    return productDetail.filter(product => product.id === id)[0];
}
