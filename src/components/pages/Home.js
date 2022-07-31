import React from 'react';
import 'bulma/css/bulma.min.css';



export default function Home() {
  return (
    <div>
      <section class="main has-background-grey-lighter">
        <div class="main-body">
          <p class="title">Shane Wilmes</p>
        </div>
      </section>
      <section class="section is-medium has-background-info-light">
        <h1 class="title">About Me</h1>
        <h2 class="subtitle">
        Hello, my name is Shane Wilmes. I am in training to become a Full Stack Developer. I grew up in the midwest and now live in Colorado.
        I have a variety of work experience and am excited to start in the the tech industry.  I will have received a Full Stack Developer 
        certification from Denver University by September, 2022.
        </h2>
      </section>
      {/* add a footer */}
    </div>
    
  );
}
