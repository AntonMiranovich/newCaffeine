import styled from 'styled-components';
import bg_coffe_short from '../../assets/Group8.png';
import bg_coffe_beans from './assets/CoffeBeansBackground.png';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg';
import twitter from './assets/twitter.svg';

const BackgroundFooter = styled.div`
  background-image: url(${bg_coffe_short});
  width: 100%;
  height: 374px;
  background-size: cover;
  background-position: center;
  margin-top: 82px;
`;
const BackgroundCoffeBeans = styled.div`
  background-image: url(${bg_coffe_beans});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 66px;
    padding: 162px 2% 50px;

    .info_text {
      display: flex;
      flex-direction: column;
      max-width: 380px;
      gap: 20px;

      h1 {
        font-family: Clicker Script;
        font-size: 54px;
        font-weight: 400;
        color: #ffffff;
      }

      p {
        font-family: Playfair Display;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }

      .images {
        display: flex;
        gap: 20px;

        /* .facebook{
          width: $width;
          height: $height;
          -webkit-mask: $path no-repeat 50% 50%;
          mask: $path no-repeat 50% 50%;
          mask-size: cover;
          -webkit-mask-size: cover;
          background-color: $color;

          &:hover {
            background-color: $hover-color;
            cursor: pointer;
          }
        }
        .instagram{
          width: $width;
          height: $height;
          -webkit-mask: $path no-repeat 50% 50%;
          mask: $path no-repeat 50% 50%;
          mask-size: cover;
          -webkit-mask-size: cover;
          background-color: $color;

          &:hover {
            background-color: $hover-color;
            cursor: pointer;
          }
        }
        .youtube{
          width: $width;
          height: $height;
          -webkit-mask: $path no-repeat 50% 50%;
          mask: $path no-repeat 50% 50%;
          mask-size: cover;
          -webkit-mask-size: cover;
          background-color: $color;

          &:hover {
            background-color: $hover-color;
            cursor: pointer;
          }
        }
        .twitter{
          width: $width;
          height: $height;
          -webkit-mask: $path no-repeat 50% 50%;
          mask: $path no-repeat 50% 50%;
          mask-size: cover;
          -webkit-mask-size: cover;
          background-color: $color;

          &:hover {
            background-color: $hover-color;
            cursor: pointer;
          }
        } */
      }
    }

    .info_menu {
      display: flex;
      justify-content: space-between;
      gap: 66px;

      h2 {
        font-family: Playfair Display;
        font-size: 26px;
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 55px;
      }

      p {
        font-family: Playfair Display;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
      }

      &:hover {
        background-color: $hover-color;
        cursor: pointer;
      }

      .info_contact,
      .info_company,
      .info_about {
        max-width: 332px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      .info_contact {
        h2 {
          margin-bottom: 31px;
        }
      }
    }
  }
`;
const Footer = () => {
  return (
    <>
      <BackgroundFooter />
      <BackgroundCoffeBeans>
        <div className="wrapper">
          <div className="info_text">
            <h1>Bean Scene</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="images">
              <img src={facebook} className="facebook" alt="facebook" />
              <img src={instagram} className="instagram" alt="instagram" />
              <img src={youtube} className="youtube" alt="youtube" />
              <img src={twitter} className="twitter" alt="twitter" />
            </div>
          </div>
          <div className="info_menu">
            <div className="info_about">
              <h2>About</h2>
              {['Menu', 'Features', 'News & Blogs', 'Help & Supports'].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <div className="info_company">
              <h2>Company</h2>
              {['How we work', 'Terms of service', 'Pricing', 'FAQ'].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <div className="info_contact">
              <h2>Contact Us</h2>
              {[
                'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
                '+1 202-918-2132',
                'beanscene@mail.com',
                'www.beanscene.com',
              ].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
          </div>
        </div>
      </BackgroundCoffeBeans>
    </>
  );
};
export default Footer;