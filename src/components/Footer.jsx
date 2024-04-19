import React from 'react';
import { Logo } from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-zinc-100 ">
      
        <div className="flex p-14 gap-16 justify-between">
          <div className="col-span-1 md:col-span-2">
            <Logo color={"#ea4b8b"}/>
            <p className="mt-4 text-sm w-[20vw] mb-4">Dribble is the world's leading community for creatives to share, grow, and get hired</p>
            <div className="space-y-4">


            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex gap-1 space-x-2">
            <a href="#" className="text-medium "><FontAwesomeIcon icon={faDribbble}/></a>
              <a href="#" className="text-medium "><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="text-medium "><FontAwesomeIcon icon={faFacebook}/></a>
              <a href="#" className="text-medium "><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="text-medium "><FontAwesomeIcon icon={faPinterest}/></a>
            </div>
          </div>
          </div>

          
          <section className="flex gap-6 flex-wrap">
            <div className='flex flex-col gap-1'>
              <h3 className="text-sm font-semibold">For Designers</h3>
              <a href="#" className="text-medium text-sm">Go Pro!</a>
              <a href="#" className="text-medium text-sm">Explore design work</a>
              <a href="#" className="text-medium text-sm">Overtime podcast</a>
              <a href="#" className="text-medium text-sm">Playoffs</a>
              <a href="#" className="text-medium text-sm">Weekly warm-Up</a>
              <a href="#" className="text-medium text-sm">Refer a Friend</a>
            </div>

            <div className='flex flex-col gap-1'>
              <h3 className="text-sm font-semibold">Hire designers</h3>
              <a href="#" className="text-medium text-sm">Post a job opening</a>
              <a href="#" className="text-medium text-sm">Post a freelance project</a>
              <a href="#" className="text-medium text-sm">Search for desingers</a>
            </div>

            <div className='flex flex-col gap-1'>
              <h3 className="text-sm font-semibold">Company</h3>
              <a href="#" className="text-medium text-sm">About</a>
              <a href="#" className="text-medium text-sm">Features</a>
              <a href="#" className="text-medium text-sm">Blog</a>
              <a href="#" className="text-medium text-sm">Careers</a>
              <a href="#" className="text-medium text-sm">Support</a>
              <a href="#" className="text-medium text-sm">Testimonials </a>
              <a href="#" className="text-medium text-sm">API</a>
            </div>

            
            <div className='flex flex-col gap-1'>
              <h3 className="text-sm font-semibold">Directories</h3>
              <a href="#" className="text-medium text-sm">Design Jobs</a>
              <a href="#" className="text-medium text-sm">Designers for hire</a>
              <a href="#" className="text-medium text-sm">Freelance designers for hire</a>
              <a href="#" className="text-medium text-sm">Tags</a>
              <a href="#" className="text-medium text-sm">Places</a>
              <a href="#" className="text-medium text-sm">Design Industry Trends</a>
            </div>

            <div className='flex flex-col gap-1'>
              <h3 className="text-sm font-semibold">Design Resources</h3>
              <a href="#" className="text-medium text-sm">Freelancing</a>
              <a href="#" className="text-medium text-sm">Design Hiring</a>
              <a href="#" className="text-medium text-sm">Design Portfolio</a>
              <a href="#" className="text-medium text-sm">Design Education</a>
              <a href="#" className="text-medium text-sm">Creative Process</a>
              <a href="#" className="text-medium text-sm">Design Industry Trends</a>
            </div>
            
          </section>



          
        
      </div>


      <div className="">
        <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8 text-sm">
          &copy; 2023 Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
