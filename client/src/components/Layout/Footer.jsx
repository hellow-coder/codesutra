import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        {/* Left side with Copyright */}
        <span>© {new Date().getFullYear()} CodeSutra. All rights reserved.</span>
      </div>
      <div className="flex space-x-4">
        {/* Right side with Links */}
        <span>Terms</span>
        <span>Privacy</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Footer;