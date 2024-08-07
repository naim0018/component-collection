import Container from "../../ui/Container";

const Button13 = () => {
  const code = `<button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
          <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
            Magic !
          </span>
          <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>`;
  return (
    <Container code={code}>
      <div className="flex justify-center">
        <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
          <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
            Magic !
          </span>
          <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </Container>
  );
};
export default Button13;
