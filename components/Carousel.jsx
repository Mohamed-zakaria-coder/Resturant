import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselImages = [
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
    // image:
    //   "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_640.jpg",
  },
  {
    id: 2,
    name: "Category 2",
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
    // image:
    //   "https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberries-2960533_640.jpg",
  },
  {
    id: 3,
    name: "Category 3",
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
    },
    {
      id: 4,
      name: "Category 4",
      image:
        "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
        // image:
        //   "https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_640.jpg",
      },
      {
        id: 5,
        name: "Category 5",
        image:
          "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
        // image:
    //   "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_640.jpg",
  },
];

function Carousel() {
  const settings = {
    autoplay: true, // autoplay
    autoplaySpeed: 3000, // autoplay speed
    dots: true, // Hide the dots
    infinite: true, // Enable infinite loop
    speed: 500, // Set the slide transition speed to 500ms
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    adaptiveHeight: true, // Automatically adjust height based on current slide
    arrows: false,
    
  };

  return (
      <Slider {...settings}>
        {CarouselImages.map((category) => (
          <div
            key={category.id}
          >
            {/* <h3 className="m-0 text-3xl text-center">{category.name}</h3> */}
            <img
              className="carousel-image"
              src={category.image}
              alt={category.name}
            />
          </div>
        ))}
      </Slider>
  );
}

export default Carousel;
