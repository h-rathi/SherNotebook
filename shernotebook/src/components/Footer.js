import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Himanshu Rathi | All rights reserved.</p>
        <ul style={linkListStyle}>
          <li><a  style={linkStyle}>Privacy Policy</a></li>
          <li><a  style={linkStyle}>Terms of Service</a></li>
          <li><a  style={linkStyle}>Contact Us</a></li>
        </ul>
        <div style={socialStyle}>
          <a href="https://www.linkedin.com/in/himanshu-rathi-070124176/" style={socialLinkStyle}>Linkedin</a>
          <a href="https://github.com/h-rathi" style={socialLinkStyle}>Github</a>
          <a href="https://www.instagram.com/thehimanshurathi/" style={socialLinkStyle}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 15px',
};

const linkListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const socialStyle = {
  marginTop: '15px',
};

const socialLinkStyle = {
  color: '#fff',
  marginRight: '10px',
  textDecoration: 'none',
};

export default Footer;
