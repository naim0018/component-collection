import Container from "../../ui/Container";

const ErrorPage06 = () => {
  const code = `<div className="flex items-center justify-evenly">
        <img className="w-[770px] h-[910px] " src="https://i.imgur.com/xIxUYGT.png" alt="" />
        <div className=" w-[460px] space-y-14">
            <p className="uppercase text-8xl font-extrabold text-[#566FA7]">oops!</p>
            <p className="text-5xl font-medium text-[#566FA7] ">Looks like bigfoot has broken the link</p>
        <button className="uppercase py-4 px-16 text-white bg-[#566FA7] rounded-lg">Back to homepage</button>
        </div>
        </div>`;
  return (
    <Container code={code}>
      <div className="flex items-center justify-evenly">
        <img
          className="w-[770px] h-[910px] "
          src="https://i.imgur.com/xIxUYGT.png"
          alt=""
        />
        <div className=" w-[460px] space-y-14">
          <p className="uppercase text-8xl font-extrabold text-[#566FA7]">
            oops!
          </p>
          <p className="text-5xl font-medium text-[#566FA7] ">
            Looks like bigfoot has broken the link
          </p>
          <button className="uppercase py-4 px-16 text-white bg-[#566FA7] rounded-lg">
            Back to homepage
          </button>
        </div>
      </div>
    </Container>
  );
};
export default ErrorPage06;
