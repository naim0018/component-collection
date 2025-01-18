import { useEffect, useRef } from "react";
import Container from "../../ui/Container";
import "./Slider01.css";

const Slider01 = () => {
  const code = `import { useEffect, useRef } from 'react';

const Slider01 = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    
    const handleAnimationEnd = () => {
      slider.style.animation = 'none';
      slider.style.transform = 'translateX(0)';
      slider.offsetHeight; // Force reflow
      slider.style.animation = 'slideLeft 30s linear infinite';
    };

    slider.addEventListener('animationend', handleAnimationEnd);

    return () => {
      slider.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="font-sans m-0 p-0 overflow-x-hidden">
      <div className="bg-[#2b215e] flex items-center justify-center mx-auto">
        <div>
          <div className="relative w-[70%] mx-auto overflow-hidden text-white md:w-full">
            <style>
             {/* 
                @-webkit-keyframes slideLeft {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-300%);
                  }
                }
                \\@keyframes slideLeft {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-300%);
                  }
                }
              */}
            </style>
            <div 
              ref={sliderRef}
              className="flex w-full animate-[slideLeft_30s_linear_infinite] hover:animate-none"
              style={{
                animation: 'slideLeft 30s linear infinite',
                willChange: 'transform'
              }}
            >
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                Refer & Get $75. <a href="#" className="font-normal text-[#f2f2f2] underline">Refer a Friend</a>
              </div>
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                Up to $600 Off the Greatest Sleep Ever Invented™. <a href="#" className="font-normal text-[#f2f2f2] underline">Learn More</a>
              </div>
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                As Low As 0% APR. Buy Now, Pay Over Time. <a href="#" className="font-normal text-[#f2f2f2] underline">Get Started</a>
              </div>
              {/* Clone first slides for seamless infinite animation */}
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                Refer & Get $75. <a href="#" className="font-normal text-[#f2f2f2] underline">Refer a Friend</a>
              </div>
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                Up to $600 Off the Greatest Sleep Ever Invented™. <a href="#" className="font-normal text-[#f2f2f2] underline">Learn More</a>
              </div>
              <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                As Low As 0% APR. Buy Now, Pay Over Time. <a href="#" className="font-normal text-[#f2f2f2] underline">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider01;`;
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleAnimationEnd = () => {
      slider.style.animation = "none";
      slider.style.transform = "translateX(0)";
      slider.offsetHeight; // Force reflow
      slider.style.animation = "slideLeft 30s linear infinite";
    };

    slider.addEventListener("animationend", handleAnimationEnd);

    return () => {
      slider.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <Container code={code}>
      <div className="font-sans m-0 p-0 overflow-x-hidden">
        <div className="bg-[#2b215e] flex items-center justify-center mx-auto">
          <div>
            <div className="relative w-[70%] mx-auto overflow-hidden text-white md:w-full">
              <style>
                {`
                  @-webkit-keyframes slideLeft {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-300%);
                    }
                  }
                  \\@keyframes slideLeft {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-300%);
                    }
                  }
                `}
              </style>
              <div
                ref={sliderRef}
                className="flex w-full animate-[slideLeft_30s_linear_infinite] hover:animate-none"
                style={{
                  animation: "slideLeft 30s linear infinite",
                  willChange: "transform",
                }}
              >
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  Refer & Get $75.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Refer a Friend
                  </a>
                </div>
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  Up to $600 Off the Greatest Sleep Ever Invented™.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Learn More
                  </a>
                </div>
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  As Low As 0% APR. Buy Now, Pay Over Time.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Get Started
                  </a>
                </div>
                {/* Clone first slides for seamless infinite animation */}
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  Refer & Get $75.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Refer a Friend
                  </a>
                </div>
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  Up to $600 Off the Greatest Sleep Ever Invented™.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Learn More
                  </a>
                </div>
                <div className="flex-none w-full text-center py-5 text-[15px] font-medium md:text-sm">
                  As Low As 0% APR. Buy Now, Pay Over Time.{" "}
                  <a href="#" className="font-normal text-[#f2f2f2] underline">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slider01;
