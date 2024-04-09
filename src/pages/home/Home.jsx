import {
  useState,
  useEffect
} from 'react';
import { getAllProducts } from 'global/api/endpoint';
import { Slider, BestAuthor, Loader, Carousel } from 'components';



export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      if (productsData) {
        setProducts(productsData);
      }
    }
    fetchProducts();
  }, []);
  return (

    <div className='hero__item'>
      <div className='slider_item'>
        {products.length > 0 ?
          <Slider>
            {products.map((product, index) => (
              <div key={`product-${index}`}>
                <img src={product.img} alt='' />
              </div>
            ))}
          </Slider>
          : <Loader />}
        <BestAuthor products={products} />
        <Carousel />
      </div>
    </div>
  );
}