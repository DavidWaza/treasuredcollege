import React from "react";
// import { useRouter } from 'next/router'

import ResponsiveHeader from "dna-responsive-nav";
import "semantic-ui-css/semantic.min.css";
import "dna-responsive-nav/dist/dna-rn.css";
import navStyles from "../../styles/Header.module.css";
// import Logo from '../../images/logo.jpg'

const links = (
  <ul>
    <li key="blog-menu">
      <a
        className={`${navStyles.links}`}
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/#about`}
      >
        About Us
      </a>
    </li>
    <li key="about-menu">
      <a
        className={`${navStyles.links}`}
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/academics`}
      >
        Academics
      </a>
    </li>
    <li key="playground-menu">
      <a
        className={`${navStyles.links}`}
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/events`}
      >
        Activities
      </a>
    </li>
    <li key="mistakes">
      <a
        className={`${navStyles.links}`}
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/portal`}
      >
        Portal
      </a>
    </li>
  </ul>
);

const handleSearch = (kw) => {
  if (kw) {
    const url = "https://deniapps.com/search?kw=" + encodeURIComponent(kw);
    window.open(url, "_blank");
  }
};

const Nav = () => {
  return (
    <ResponsiveHeader
      siteName="Treasured Heritage College"
      links={links}
      //   logo={Logo}
      handleSearch={handleSearch}
    />
  );
};

export default Nav;
