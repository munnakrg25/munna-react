import { reviews } from "./data";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const previousReview = () => {
    let currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }
    setCurrentIndex(currentIndex);
  };

  const nextReview = () => {
    let currentIndex = currentIndex + 1;
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }
    setCurrentIndex(currentIndex);
  };

    const randomReview = () => {
      const ids = Math.floor(Math.random() * reviews.length);
      setCurrentIndex(ids);
    };

  return (
    <div className="app">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <article className="review">
            <div className="img-container">
              <img src={currentReview.image} alt={currentReview.name} id="person-img" />
            </div>
            <h4 id="author">{currentReview.name}</h4>
            <p id="job">{currentReview.job}</p>
            <p id="info">{currentReview.text}</p>
            <div className="button-container">
              <button className="prev-btn" onClick={previousReview}>
                &#8592;
              </button>
              <button className="next-btn" onClick={nextReview}>
                &#8594;
              </button>
            </div>
            <button className="random-btn" onClick={randomReview}>
              Surprise Me
            </button>
          </article>
        </section> 
      </main>
    </div>
  );
}
export default App;



