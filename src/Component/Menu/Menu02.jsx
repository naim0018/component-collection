import Container from "../../ui/Container";

const Menu02 = () => {
    const code=`<label className="flex flex-col gap-2 w-8">
          <input className="peer hidden" type="checkbox" />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>`
  return (
    <Container code={code}>
      <div className="flex justify-center">
        <label className="flex flex-col gap-2 w-8">
          <input className="peer hidden" type="checkbox" />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </div>
    </Container>
  );
};
export default Menu02;
