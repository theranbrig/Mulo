import Head from 'next/head';
import { CircleLoader } from 'react-spinners';
import { useState, useEffect, useContext } from 'react';
import ItemPageStyles from '../components/styles/ItemPageStyles';
import Layout from '../components/Layout';
import data from '../static/data';
import ProjectCard from '../components/ProjectCard';
import { products } from '../static/data';
import { CartContext } from '../components/context/CartContext';

const Item = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const { addToCart, cartError, setCartError } = useContext(CartContext);
  const calculateMoney = amount => `$${amount / 100}`;

  useEffect(() => {
    setLoading(true);
    const pageItem = products.filter(product => {
      console.log(product.id);
      console.log(query.id);
      return product.id === query.id;
    });
    setCartError(null);
    setItem({ ...pageItem[0] });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Layout>
        <ItemPageStyles>
          <div className='loading-page'>
            <h1>
              Loading <span>Mulo</span> Product
            </h1>
            <div className='spinner'>
              <CircleLoader sizeUnit='px' size={200} color='#70e979' />
            </div>
          </div>
        </ItemPageStyles>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>MULO | View Item</title>
      </Head>
      <ItemPageStyles>
        {item.name === null ? (
          <h1>Oops...Item Not Found</h1>
        ) : (
          <>
            <h1>{item.name}</h1>
            <div className='item-information'>
              <div className='left-content'>
                <img src={item.image} />
                <h3>
                  Try it on with your phone with <span>Mulo AR</span>.
                </h3>
                <p>{item.about}</p>
              </div>
              <div className='right-content'>
                <h3 className='original-price'>
                  Original Price: <span>{calculateMoney(item.originalPrice)}</span>
                </h3>
                <h3 className='discounted-price'>
                  Discounted Price: <span>{calculateMoney(item.price)}</span>
                </h3>
                <h3 className='rating'>
                  Rating: <span>{item.rating}</span>
                </h3>
                {!item.problems.length ? (
                  <div className='defects'>
                    <h3>No Defects</h3>
                  </div>
                ) : (
                  <div className='defects'>
                    <h3>Defects:</h3>
                    <ul>
                      {item.problems.map(problem => (
                        <li>{problem}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className='buttons'>
                  {cartError && <h3 className='cart-error'>{cartError}</h3>}
                  <button className='add-button' onClick={() => addToCart(item.id)}>
                    Add To Cart
                  </button>
                  <button className='offer-button' disabled={!item.canOffer}>
                    Make An Offer
                  </button>
                </div>
                <div className='more-information'>
                  <h3>
                    About your <span>Mulo</span> purchase.
                  </h3>
                  <ul>
                    <li>
                      100% Happiness Guarantee. If you aren't happy with your item, return it for
                      free. No questions asked.
                    </li>
                    <li>
                      Sizes are approximate. Since they are used items they may have changed sizes
                      by washing and wearing. Want to see how it looks on you? Check out how it
                      looks on you with <span>Mulo AR</span>.
                    </li>
                    <li>Items are hand inspected and photographed by us. See it as it is.</li>
                    <li>Free shipping for orders of $50.</li>
                    <li>
                      We ship all products in environmentally friendly containers. It is 100%
                      recycled material and 100% compostable.
                    </li>
                    <li>
                      <p>
                        <span>About our Rating System:</span>
                      </p>
                      <ul>
                        <li>
                          <span>100</span>: New with the tags on.
                        </li>
                        <li>
                          <span>90-99</span>: Like New - A few small imperfections.
                        </li>
                        <li>
                          <span>80-89</span>: Great Condition - Looks good. Most couldn't tell it's
                          used.
                        </li>
                        <li>
                          <span>70-79</span>: Good Condition - It looks well worn, but adds to the
                          style.
                        </li>
                        <li>
                          <span>60 and Lower</span>: Like New - It has been well worn and loved, but
                          that is why you are here anyways.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </ItemPageStyles>
    </Layout>
  );
};

export default Item;
