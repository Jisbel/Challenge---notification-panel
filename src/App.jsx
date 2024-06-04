import { useEffect, useRef } from 'react';
import {Mark} from './assets/images/img.js'
import {Angela} from './assets/images/img.js'
import {Jacob} from './assets/images/img.js'
import {Risky} from './assets/images/img.js'
import {Kimberly} from './assets/images/img.js'
import {Chess} from './assets/images/img.js'
import {Nathan} from './assets/images/img.js'
import {Anna} from './assets/images/img.js'
function App() {
 
  const numberElement = useRef(null);

  useEffect(() => {
    const markAll = document.querySelector('#mark-all');
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
      post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.remove('not-read');
        updateNotifications();
      });
    });

    markAll.addEventListener('click', () => {
      const notReadElements = document.querySelectorAll('.not-read');

      notReadElements.forEach(notReadElement => {
        notReadElement.classList.remove('not-read');
      });

      updateNotifications();
    });

    const updateNotifications = () => {
      const notReadElementsActual = document.querySelectorAll('.not-read');
      if (numberElement.current) {
        numberElement.current.innerText = notReadElementsActual.length;
      }
    };

    updateNotifications();

    return () => {

      posts.forEach(post => {
        post.removeEventListener('click', () => {
          post.querySelector('.not-read').classList.remove('not-read');
          updateNotifications();
        });
      });

      markAll.removeEventListener('click', () => {
        const notReadElements = document.querySelectorAll('.not-read');

        notReadElements.forEach(notReadElement => {
          notReadElement.classList.remove('not-read');
        });

        updateNotifications();
      });
    };
  }, []);
  return (
    <>
         <section className="main px-6 py-4 md:w-[730px] my-0 mx-auto">
      <div className="notifications flex justify-between mb-6">
        <h3 className="font-extrabold text-darkJungleGreen text-xl tracking-wide">
          Notifications <span className="bg-saintPatrickBLue text-white inline-block w-8 h-7 text-center rounded-md" id="number">3</span>
        </h3>
        <p className="text-payneGrey text-sm font-medium cursor-pointer hover:text-saintPatrickBLue" id="mark-all">Mark all as read</p>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Mark} alt="Mark Webber" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Mark Webber</span>
            <span> reacted to your recent post </span>
            <span className="reaction font-bold hover:text-saintPatrickBLue">My first tournament today!</span>
            <span className="status not-read"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">1m ago</p>
        </div>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex gap-3 p-4 mb-3 m-auto text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Angela} alt="Angela Gray" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Angela Gray</span>
            <span> followed you </span>
            <span className="status not-read"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">5m ago</p>
        </div>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Jacob} alt="Jacob Thompson" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Jacob Thompson</span>
            <span> has joined your group </span>
            <span className="reaction font-bold hover:text-saintPatrickBLue">Chess Club</span>
            <span className="status not-read"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">1 day ago</p>
        </div>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Risky} alt="" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Rizky Hasanuddin</span>
            <span> sent you a private message</span>
            <span className="status"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">5 days ago</p>
          <div className="message-container border-solid border border-gainsboro rounded-md p-4 mt-3 hover:bg-aliceBlue">
            <p className="message">
              Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having
              lots of fun and improving my game.
            </p>
          </div>
        </div>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] relative bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Kimberly} alt="" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Kimberly Smith</span>
            <span> commented on your picture</span>
            <span className="status"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">1 week ago</p>
        </div>
        <img className="picture w-10 h-10 absolute right-4" src={Chess} alt="" />
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Nathan} alt="" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Nathan Peterson</span>
            <span> reacted to your recent post </span>
            <span className="reaction font-bold hover:text-saintPatrickBLue">5 end-game strategies to increase your
              win rate</span>
            <span className="status"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">2 weeks ago</p>
        </div>
      </div>

      <div className="post md:text-[1rem] min-w-[343px] bg-ghostWhite rounded-lg flex mb-3 m-auto gap-3 p-4 text-sm cursor-pointer text-payneGrey">
        <img className="w-10 h-10" src={Anna} alt="" />
        <div>
          <p>
            <span className="name font-bold text-darkJungleGreen hover:text-saintPatrickBLue">Anna Kim</span>
            <span> left the group </span>
            <span className="reaction font-bold hover:text-saintPatrickBLue"> Chess Club</span>
            <span className="status"></span>
          </p>
          <p className="time text-manatee font-medium text-sm">2 weeks ago</p>
        </div>
      </div>
      </section>
      <div className="attribution text-sm text-center mb-11 font-bold">
    Challenge by <a className="text-saintPatrickBLue" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a className="text-saintPatrickBLue"  href="https://github.com/Jisbel">Jisbel Rodriguez</a>.
  </div>
    </>
  )
}

export default App
