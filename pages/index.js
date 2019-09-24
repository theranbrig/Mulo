/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React, { useContext } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HomePageStyles from '../components/styles/HomePageStyles';
import { DarkContext } from '../components/context/DarkContext';
import { UserContext } from '../components/context/UserContext';

const Home = () => {
  const { darkMode } = useContext(DarkContext);
  const { user, userLoading } = useContext(UserContext);

  return (
    <Layout>
      <Head>
        <title>MULO | Online Thrift Store</title>
      </Head>
      <HomePageStyles>
        <div className="main-content">
          <div className="side-pictures" />
          <div className="title-box">
            <h1>Mulo</h1>
            <h2>They loved it. You'll love it too.</h2>
            <button>
              <Link href="/products">
                <a>
                  Shop Now <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="divider">
          <p>
            Try it on before you buy it with <span>MULO AR</span>. <br />
            <Link href="/contact">
              <a>See Our Latest Fashion Choices</a>
            </Link>
          </p>
        </div>
        <div className="about-layout">
          <div className="about-1">
            <img src="https://images.unsplash.com/photo-1551310357-b26c1af069c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
            <h3>High-Quality</h3>
            <p>
              Lorem ipsum dolor amet organic prism whatever tumblr. Kickstarter four dollar toast kitsch jianbing.
              Enamel pin tofu green juice chambray forage 3 wolf moon austin live-edge. PBR&B succulents waistcoat +1
              letterpress gentrify. DIY pok pok heirloom echo park umami. Vegan forage four dollar toast venmo, meh
              hella bitters ennui cardigan godard kitsch before they sold out whatever.
            </p>
          </div>
          <div className="about-2">
            <img src="https://images.unsplash.com/photo-1505734169265-a86113baa6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
            <h3>Fashion Forward</h3>
            <p>
              Lorem ipsum dolor amet austin DIY vape before they sold out sartorial organic. Cronut af keffiyeh kinfolk
              lyft fixie sriracha irony. Four dollar toast farm-to-table mixtape raw denim whatever salvia. Cloud bread
              chambray jianbing, hella squid literally hot chicken fashion axe master cleanse photo booth small batch.
              Jianbing craft beer mumblecore cloud bread flexitarian kitsch. PBR&B single-origin coffee church-key put a
              bird on it, ethical brunch jean shorts.
            </p>
          </div>
          <div className="about-3">
            <img src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
            <h3>Environmentally Sustainable</h3>
            <p>
              Lorem ipsum dolor amet flannel vegan irony portland jianbing. Intelligentsia pop-up distillery ugh, street
              art woke leggings shabby chic readymade pabst paleo iPhone. Bitters franzen vinyl, you probably haven't
              heard of them narwhal la croix cornhole street art next level lo-fi prism palo santo blog adaptogen. Etsy
              pinterest flannel scenester celiac knausgaard, disrupt migas.
            </p>
          </div>
        </div>
      </HomePageStyles>
    </Layout>
  );
};

export default Home;
