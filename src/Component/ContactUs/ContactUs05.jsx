import Container from "../../ui/Container";

const ContactUs05 = () => {
  const code = `<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow Your Business?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our newsletter to receive the latest tips and trends in digital marketing.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="max-w-lg flex-1 px-5 py-2 rounded-md" placeholder="Enter your email" type="email" />
                  <button className="bg-black text-white px-5 py-2 rounded-md">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>`;
  return (
    <Container code={code}>
      <div className="flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Grow Your Business?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our newsletter to receive the latest tips and trends in
                  digital marketing.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="max-w-lg flex-1 px-5 py-2 rounded-md"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="bg-black text-white px-5 py-2 rounded-md">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ContactUs05;
