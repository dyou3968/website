import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import BTGCover from "../images/btg-cover.png";
import FadeIn from "react-fade-in";

export default function Layout({ children }) {
  return (
    <div>
      <FadeIn>
        <Helmet>
          <title>Home Page | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Navigation/>
        <div>
          {children}
        </div>
        <Footer/>
      </FadeIn>
    </div>
  )
}