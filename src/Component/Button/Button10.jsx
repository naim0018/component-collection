import Container from "../../ui/Container";

const Button10 = () => {
    const code=`<button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
          Hover me!
        </button>`
  return (
    <Container code={code}>
      <div className="flex justify-center">
        <button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
          Hover me!
        </button>
      </div>
    </Container>
  );
};
export default Button10;
