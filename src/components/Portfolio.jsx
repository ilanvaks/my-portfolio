import { useState } from "react";
import Footer from "./Footer";
import Quote from "./Quote";



export default function Portfolio () {
  return (
    <>
      <section>
        <h1>Ilan Vaks</h1>
        <p>
          As a native of Brooklyn, New York, I have always been drawn to the dynamic and innovative world of software engineering. Upon completing this course, my objective is to secure an engaging job or internship that aligns with my passion for this field, with the ultimate goal of advancing into the exciting realm of cloud engineering. 
        <Quote/>
        </p>
      </section>

      <Footer/>
    </>
    
  )
}