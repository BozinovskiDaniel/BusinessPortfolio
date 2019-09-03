import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <header>
          <div className="nav">
            <h3 className="logo">CataniasCreations</h3>
            <img src={require('./hamburger.png')} alt="menu" height="30px" width="30px" />
          </div>
        </header>


        <main>

          <section className="page charlieCatania">
            <div className="details">
              <h1>Charlie Catania</h1>
              <h2>Creator</h2>
              <p>30/08/2019</p>
            </div>

            <div className="hero charliePhoto">
              <img className="model-left" src={require('./3.jpg')} alt="model" width="175" height="400" />
              <img className="model-right" src={require('./4.jpg')} alt="model" width="175" height="400" />
            </div>
          </section>


          <section className="page tiannaCatania">
            <div className="details">
              <h1>Tianna Catania</h1>
              <h2>Writer</h2>
              <p>30/08/2019</p>
            </div>

            <div className="hero tiannaPhoto">
              <img className="model-left" src={require('./1.jpg')} alt="model" width="175" height="400" />
              <img className="model-right" src={require('./2.jpg')} alt="model" width="175" height="400" />
            </div>
          </section>


          <section className="page danielBozinovski">
            <div className="details">
              <h1>Daniel Bozinovski</h1>
              <h2>Engineer</h2>
              <p>30/08/2019</p>
            </div>

            <div className="hero danielPhoto">
              <img className="model-left" src={require('./5.jpg')} alt="model" width="175" height="400" />
              <img className="model-right" src={require('./6.jpg')} alt="model" width="175" height="400" />
            </div>
          </section>

          <div className="pages">
            <div className="pages-1">
              <h3>01</h3>
              <svg
                classnName="slideActive"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>

            </div>

            <div className="pages-2">
              <h3>02</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>

            </div>

            <div className="pages-3">
              <h3>03</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>

            </div>

          </div>



        </main>
      </div>

    </div>
  );
}

export default App;
