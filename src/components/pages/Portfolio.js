import React from 'react';
import 'bulma/css/bulma.min.css';
import TextEditor from '../images/TextEditor.png'
import JustParkIt from '../images/JustParkIt.png'

export default function Portfolio() {
  return (
    <div>
      <section class="main is-fluid is-size-1-mobile">
        <div class="main-body">
          <p class="title has-text-centered is-size-1">My Projects</p>
        </div>
      </section>
      <section class="section is-medium">
        <h1 class="title">My Github</h1>
        <a href='https://github.com/ShaneWilmes' target="_blank is-centered" rel="noopener noreferrer">ShaneWilmes</a>  
        </section>

        <div>
      <section class="main is-fluid is-size-1-mobile">
        <div class="main-body">
          <p class="title">My Projects</p>
        </div>
      </section>
      <section class="section is-medium">

              
        <a href='https://github.com/Noah8863/Just-Park-It' target="_blank is-centered" rel="noopener noreferrer">Just Park It</a>  
        <figure class='image is-2by1'>
          <img src={JustParkIt} alt='JustParkIt'></img>
        </figure>
        </section>
        <section class="section is-medium"></section>
      <section class="section is-medium">

              
        <a href='https://github.com/ShaneWilmes/PWA-Text-Editor-ShaneWilmes' target="_blank is-centered" rel="noopener noreferrer">PWA Text-Editor</a>  
        <figure class='image is-2by1'>
          <img src={TextEditor} alt='TextEditor'></img>
        </figure>
        </section>
        <section class="section is-medium">

              
        <a href='https://github.com/ShaneWilmes/E-Commerce-Back-End-ORM-' target="_blank is-centered" rel="noopener noreferrer">E-Commerce-Back-End-ORM</a>  
        <div>
        <a href='https://drive.google.com/file/d/1XjV3EbpJV3HOXo93XLOuwUtysfo8aSmO/view' target="_blank is-centered" rel="noopener noreferrer">Project Demo</a>  
        </div>
        
        </section>
        <section class="section is-medium">

              
        <a href='https://github.com/ShaneWilmes/Profile-Generator-' target="_blank is-centered" rel="noopener noreferrer">Team Profile Generator</a>  
        <div>
        <a href='https://drive.google.com/file/d/1Ekpwt_rypHOyXKND5G4RzFZW7UF-QQ9J/view' target="_blank is-centered" rel="noopener noreferrer">Project Demo</a>  
        </div>
        
        </section>


        

                
    </div>

                
    </div>    

    


  );
}

