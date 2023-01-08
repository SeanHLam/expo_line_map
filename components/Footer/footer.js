import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  const position = [49.28594, -123.11129];
  return (
    <div className=" justify-evenly w-full bg-darkBlue flex  p-4">
      <div className="  flex flex-col m-3">
        <h3 className=" text-4xl font-Heebo text-offWhite">
          About the Project
        </h3>
        <p className=" mb-2 text-xl font-DMSans text-offWhite">
          This page maps out Translink's expo line on a map <br></br> 
          using the Leaflet JS library. It's also frog themed <br></br>
          for all of the frog enthusiasts out there!

        </p>
      </div>

      <div className="flex flex-col m-3">
        <h3 className=" text-4xl font-Heebo text-offWhite">Resources</h3>
        <a
          href="https://leafletjs.com/"
          target="_blank"
          className="font-DMSans text-offWhite  hover:underline"
        >
          Leaflet JS Library
        </a>
        <a
          href="https://www.translink.ca/schedules-and-maps/skytrain?page=1"
          target="_blank"
          className="font-DMSans text-offWhite  hover:underline"
        >
          Translink map of the Expo Line
        </a>
      </div>

      <div className="flex flex-col m-3">
        <h3 className="  text-4xl font-Heebo text-offWhite">Socials</h3>
        <div className="flex justify-center">
            <SocialIcon target="_blank" bgColor='#51AA3C' className='mr-2 scale-100 hover:scale-95 transition-all' url="https://github.com/SeanHLam" />
            <SocialIcon target="_blank" bgColor='#51AA3C' className=' mr-2 scale-100 hover:scale-95 transition-all' url="https://www.instagram.com/seanhlam/?hl=en" />
            <SocialIcon target="_blank" bgColor='#51AA3C' className=' mr-2 scale-100 hover:scale-95 transition-all' url="https://www.linkedin.com/in/sean-lam-a72656192/" />
        </div>
      </div>    

      <div></div>
    </div>
  );
}
