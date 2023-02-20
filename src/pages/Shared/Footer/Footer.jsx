import React from 'react';

const Footer = () => {
    return (
      <footer className="footer grid grid-cols-2 p-10q ">
        <div>
          <span className="footer-title"></span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Accessibility</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Privacy & Terms </a>
          <a className="link link-hover">Ad Choices Advertising</a>
        </div>
        <div>
          <span className="footer-title"> </span>
          <a className="link link-hover">Business Services</a>
          <a className="link link-hover">Get the Nexus app More</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
      </footer>
    );
};

export default Footer;