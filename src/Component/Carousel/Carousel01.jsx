import { useCallback, useEffect, useState } from "react";
import Container from "../../ui/Container";

const code = `export default function Carousel01() {
  const carouselData = [
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    title: "First slide label", 
    description: "Some representative placeholder content for the first slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    title: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
];

  const [currentSlider, setCurrentSlider] = useState(0);
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1
      ),
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <div className="relative border">
          {/* <!--Carousel indicators--> */}
          <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
            <button
              type="button"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            ></button>
            <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
            <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
          </div>
          {/* <!--Carousel items--> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className={\`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none \${
                  index === currentSlider ? "block" : "hidden"
                }\`}
              >
                <img
                  src={slide.img}
                  className="block w-full"
                  alt={\`Slide \${index + 1}\`}
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">{slide.title}</h5>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            onClick={prevSlider}
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            onClick={nextSlider}
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
    )
}`;

const carouselData = [
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    title: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
];

const Carousel01 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1
      ),
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <Container code={code}>
      <div className="">
        <div className="relative border">
          {/* <!--Carousel indicators--> */}
          <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
            <button
              type="button"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            ></button>
            <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
            <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
          </div>
          {/* <!--Carousel items--> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                  index === currentSlider ? "block" : "hidden"
                }`}
              >
                <img
                  src={slide.img}
                  className="block w-full"
                  alt={`Slide ${index + 1}`}
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">{slide.title}</h5>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            onClick={prevSlider}
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            onClick={nextSlider}
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Carousel01;
