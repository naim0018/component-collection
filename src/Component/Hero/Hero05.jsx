
import Container from "../../ui/Container";

const Hero05 = () => {
  const code = `<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Boost Your Digital Presence
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Elevate your brand with our cutting-edge digital marketing solutions. Drive growth, engage customers,
                  and achieve your business goals.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>`;
  return (
    <Container code={code}>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Boost Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Elevate your brand with our cutting-edge digital marketing
                solutions. Drive growth, engage customers, and achieve your
                business goals.
              </p>
            </div>
            <div className="space-x-4">
              <button className="bg-black text-white px-5 py-2 rounded-md">
                Get Started
              </button>
              <button className="bg-white text-black px-5 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero05;
