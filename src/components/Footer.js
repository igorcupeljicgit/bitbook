import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small mt-5">
      <div className="footer-copyright text-center py-3">
        <span className="text-white" style={{ opacity: "0.5" }}>
          &copy; {new Date().getFullYear()} Copyright
        </span>{" "}
        <span className="text-white">PROJECT-X</span>
      </div>
    </footer>
  );
};

export default Footer;
