import Head from 'next/head';
import { CircleLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import ItemPageStyles from '../components/styles/ItemPageStyles';
import Layout from '../components/Layout';
import data from '../static/data';
import ProjectCard from '../components/ProjectCard';
import { products } from '../static/data';

const Item = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const calculateMoney = amount => `$${amount / 100}`;

  useEffect(() => {
    setLoading(true);
    const pageItem = products.filter(product => {
      console.log(product.id);
      console.log(query.id);
      return product.id === query.id;
    });
    setItem({ ...pageItem[0] });
    console.log(pageItem[0]);
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
              Loading <span>MULO</span> Product
            </h1>
            <div className='spinner'>
              <CircleLoader sizeUnit='px' size={200} color='#17D3D3' />
            </div>
          </div>
        </ItemPageStyles>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Portfolio</title>
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
                  Try it on with your phone with <span>MULO AR</span>.
                </h3>
                <p>{item.about}</p>
              </div>
              <div>
                <h3 className='original-price'>
                  Original Price: <span>{calculateMoney(item.originalPrice)}</span>
                </h3>
                <h3 className='discounted-price'>
                  Discounted Price: <span>{calculateMoney(item.price)}</span>
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
                  <button className='add-button'>Add To Cart</button>
                  <button className='offer-button' disabled={!item.canOffer}>
                    Make An Offer
                  </button>
                </div>
                <div className='more-information'>
                  <h3>
                    About your <span>MULO</span> purchase.
                  </h3>
                  <ul>
                    <li>
                      100% Happiness Guarantee. If you aren't happy with your item, return it for
                      free. No questions asked.
                    </li>
                    <li>Items are hand inspected and photographed by us. See it as it is.</li>
                    <li>Free shipping for orders of $50.</li>
                    <li>
                      We ship all products in environmentally friendly containers. It is 100%
                      recycled material and 100% compostable.
                    </li>
                    <li>
                      Sizes are approximate. Since they are used items they may have changed sizes
                      by washing and wearing. Want to see how it looks on you? Check out with{' '}
                      <span>MULO AR</span>.
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
