'use client'
import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='px-4 py-12 bg-gray-200'>
      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h4 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Components
              </h4>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Elements
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Forms
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Commerces
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Navigation
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h4 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Contacts
              </h4>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Github
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Facebook
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Twitter
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                   LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h4 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Customization
              </h4>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Settings
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Themes
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    Plugins
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="#">
            <FaGithub size={20} className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
          <a href="#">
            <FaFacebook size={20} className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
          <a href="#">
            <FaTwitter size={20} className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
          <a href="#">
            <FaLinkedin size={20} className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
          <a href="#">
            <FaInstagram size={20} className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by thejayadad
        </div>
      </div>
    </footer>
  );
}

export default Footer;
