import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Headet';
import Footer from './components/Footer/Footer';
import img from './assets/coffeeimage.png';
import coffee from './assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png';
import coffeeMenu1 from './assets/coffeeMenu1.svg';
import coffeeMenu2 from './assets/coffeeMenu2.svg';
import coffeeMenu3 from './assets/coffeeMenu3.svg';
import coffeeMenu4 from './assets/coffeeMenu4.svg';
import coffee_beans from './assets/coffeebeans.png';
import badge from './assets/badge.png';
import coffee_cup from './assets/coffeecup.png';
import best_price from './assets/bestprice.png';
import cup from './assets/cup3.png';
import rectangle from './assets/Group8.png';
import kavichki from './assets/kavichji.png';
import avatar from './assets/randomMan.png';
import leftArrow from './assets/left.png';
import rightArrow from './assets/right.png';
import { useEffect, useState } from 'react';

const coffies = [
  { id: 1, title: 'Cappuccino', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu4 },
  { id: 2, title: 'Chai Latte', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu3 },
  { id: 3, title: 'Macchiato', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu2 },
  { id: 4, title: 'Expresso', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu1 },
];

const advantages = [
  { id: 1, title: 'Supreme Beans', description: 'Beans that provides great taste', icon: coffee_beans },
  { id: 2, title: 'High Quality', description: 'We provide the highest quality', icon: badge },
  { id: 3, title: 'Extraordinary', description: 'Coffee like you have never tasted', icon: coffee_cup },
  { id: 4, title: 'Affordable Price', description: 'Our Coffee prices are easy to afford', icon: best_price },
];

const sliderObj = [
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....`,
    name: `Jonny Thomas`,
    profession: `Project Manager`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim doloremque perspiciatis nostrum inventore consequuntur dicta exercitationem! Optio debitis maxime explicabo ab ad, fugiat voluptas?`,
    name: `Jon Smith`,
    profession: `Front`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta nam quia minima, fugiat totam ratione distinctio voluptatum iure consequatur quisquam dicta alias reiciendis placeat harum architecto neque cum pariatur.`,
    name: `Anton`,
    profession: `Dev`,
  },
  {
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorem officia veniam dolor nobis voluptates necessitatibus vero, porro nulla labore.`,
    name: `Jonny Thomas`,
    profession: `HR`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci harum, tempora perferendis amet delectus?  Ipsa adipisci harum, tempora perferendis amet delectus?  Ipsa adipisci harum, tempora perferendis amet delectus?`,
    name: `Thomas`,
    profession: `Project Manager`,
  },
];

const Global = createGlobalStyle`
 *{
   margin: 0;
   padding: 0; 
   box-sizing: border-box;
   font-style: normal;
   color: #707070;
   font-family:'Playfair Display';
   font-size: 20px;
   font-weight: 400;
 }

  a {
    text-decoration: none;
  }
`;

const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .landing {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 5% 0;
    max-width: 1220px;

    p {
      font-family: ' Playfair Display';
      font-size: 22px;
      font-weight: 500;
      color: #ffffff;
      max-width: 527px;
    }

    h1 {
      font-family: Clicker Script;
      font-size: 220px;
      font-weight: 400;
      line-height: 290.58px;
      color: #ffffff;
      max-width: 527px;
    }
  }
`;
const BlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1220px;
  margin: auto;
  padding: 150px 0;
  gap: 90px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }

  h2 {
    font-family: 'Playfair Display';
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: 'Playfair Display';
    font-size: 20px;
    font-weight: 400;
  }
`;

const Menu = styled.div`
  max-width: 1220px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-family: 'Playfair Display';
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: 'Playfair Display';
    font-size: 20px;
    font-weight: 400;
    color: #603809;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;

    .item {
      background-color: #fff9f1;
      border: 1px solid #f9c06a;
      max-width: 280px;
      max-height: 364px;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }

      .itemInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 14px 0 42px;

        h3 {
          font-family: 'Playfair Display';
          font-size: 22px;
          font-weight: 600;
          color: #603809;
        }

        p {
          font-family: 'Playfair Display';
          font-size: 16px;
          font-weight: 400;
          color: #1e1e1e;
        }

        .price {
          font-family: 'Playfair Display';
          font-size: 18px;
          font-weight: 700;
          color: #603809;
        }
      }
    }
  }
`;

const Button = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font-family: 'Playfair Display';
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto;
  gap: 20px;

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
  }

  .advantages_content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .advantages_card {
      border: 1px solid #f9c06a6b;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #fff9f1;
      padding: 36px 43px;
      transition: transform 0.3s ease;
      &:hover {
        background-color: #ffeed8;
        transform: scale(1.1);
      }

      .coffee_beans,
      .badge,
      .coffee_cup,
      .best_price {
        width: 88px;
        height: 88px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      h3 {
        font-family: Playfair Display;
        font-size: 22px;
        font-weight: 700;
        color: #603809;
        margin: 25px auto 8px;
      }
    }
  }
  .important {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 700;
    color: #603809;
  }
`;
const BackgroundInfo = styled.div`
  background-image: url(${rectangle});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5% 0;
    max-width: 1220px;

    .wrapperLeft {
      display: flex;
      flex-direction: column;
      gap: 22px;
      max-width: 575px;

      h1 {
        font-family: 'Playfair Display';
        font-size: 54px;
        font-weight: 700;
        color: #ffffff;
      }

      p {
        font-family: 'Playfair Display';
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .imgWrapperRight {
      background-image: url(${cup});
      width: 300px;
      height: 467px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 5% 0;
  gap: 45px;
  max-width: 1220px;

  h2 {
    font-family: 'Playfair Display';
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: 'Playfair Display';
    font-size: 20px;
    font-weight: 400;
  }

  .slider {
    border: 1px solid #f9c06a6b;
    background-color: #fff9f1;
    max-width: 80%;
    height: 524px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;

    .quotes {
      background-image: url(${kavichki});
      background-size: cover;
      background-position: center;
      width: 103px;
      height: 75px;
      position: absolute;
      left: 20px;
      top: 20px;
    }

    p {
      font-family: 'Playfair Display';
      font-size: 18px;
      font-weight: 600;
      color: #707070;
      margin: 129px 0 28px 0;
      max-width: 80%;
      line-height: 36px;
    }

    h2 {
      font-family: 'Playfair Display';
      font-size: 32px;
      font-weight: 700;
      color: #603809;
    }

    .proff {
      font-family: 'Playfair Display';
      font-size: 20px;
      font-weight: 400;
      color: #707070;
      margin: 5px 0 101px 0;
    }

    .avatar {
      background-image: url(${avatar});
      background-size: cover;
      background-position: center;
      width: 112px;
      height: 112px;
      position: absolute;
      bottom: -56px;
    }

    .arroyWrapperRight {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 82px;
      border-radius: 12px;
      background-color: #f9c06a;
      position: absolute;
      right: -41px;
      top: 43%;
    }

    .arroyWrapperLeft {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 82px;
      border-radius: 12px;
      background-color: #f9c06a;
      position: absolute;
      left: -41px;
      top: 43%;
    }
  }
`;

const App = () => {
  const [count, setCount] = useState(1);

  const nextSlide = () => {
    count === sliderObj.length - 1 ? setCount(0) : setCount(count + 1);
  };

  const lastSlide = () => {
    count === 0 ? setCount(sliderObj.length - 1) : setCount(count - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Global />

      <BackgroundPreview>
        <Header />
        <div className="landing">
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <Button>Order Now</Button>
        </div>
      </BackgroundPreview>

      <BlockInfo>
        <div className="content">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
            have ever tasted.
          </p>
          <Button>Order Now</Button>
        </div>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </BlockInfo>

      <Menu>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        <div className="content">
          {coffies.map((el, index) => (
            <div key={index} className="item">
              <div>
                <img src={el.img} alt="coffee" />
              </div>
              <div className="itemInfo">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p className="price">{el.price}</p>
                <Button>Order Now</Button>
              </div>
            </div>
          ))}
        </div>
      </Menu>

      <Advantages>
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="advantages_content">
          {advantages.map(el => (
            <div className="advantages_card" key={el.id}>
              <img src={el.icon} alt="" />
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
        <p>Great ideas start with great coffee, Lets help you achieve that</p>
        <p className="important">Get started today.</p>
        <Button>Join Us</Button>
      </Advantages>

      <BackgroundInfo>
        <div className="wrapper">
          <div className="wrapperLeft">
            <h1>Get a chance to have an Amazing morning</h1>
            <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
            <Button>Order Now</Button>
          </div>
          <div className="imgWrapperRight"></div>
        </div>
      </BackgroundInfo>

      <Slider>
        <div>
          <h2>Our coffee perfection feedback</h2>
          <p>Our customers has amazing things to say about us</p>
        </div>

        <div className="slider">
          <div className="quotes" />
          <div className="arroyWrapperRight" onClick={() => nextSlide()}>
            <img src={rightArrow} alt="" />
          </div>
          <p>{sliderObj[count].description}</p>
          <h2>{sliderObj[count].name}</h2>
          <p className="proff">{sliderObj[count].profession}</p>
          <div className="arroyWrapperLeft" onClick={() => lastSlide()}>
            <img src={leftArrow} alt="" />
          </div>
          <div className="avatar" />
        </div>
      </Slider>

      <Footer />
    </>
  );
};

export default App;
