// src/PhotoCarousel.js
import Slider from 'react-slick'; // Import the slick slider
const PhotoCarousel = () => {
  const image = require(`./${"alexframe.jpg"}`)
  // Image URLs
  const images = [
'https://i.ytimg.com/vi/SfiY05s6ROs/maxresdefault.jpg',
'https://img.freepik.com/premium-photo/indian-wedding-pooja_96696-144.jpg?ga=GA1.1.1452308990.1718728952&semt=ais_hybrid',
'https://img.freepik.com/premium-photo/little-girl-pink-dress-with-words-happy-birthday-it_889688-46.jpg?ga=GA1.1.1452308990.1718728952&semt=ais_hybrid',
'https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?ga=GA1.1.1452308990.1718728952&semt=ais_hybrid',
'https://lncphotography.in/wp-content/uploads/2022/02/006-scaled.jpg',
'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
image,
];

  const settings = {
    dots: true, // Show dots to indicate position
    infinite: true, // Enable infinite looping
    speed: 500, // Speed of transition
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
  };

  return (
    <div className="carousel-container">
        <h1><i>Gallery</i></h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
