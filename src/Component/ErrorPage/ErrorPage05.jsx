import Container from "../../ui/Container";

const ErrorPage05 = () => {
  const code = `<div className="w-full h-screen bg-[#FA7C70] flex items-center justify-center ">
            <div className="bg-[#F4E4D5] size-[820px] rounded-full flex flex-col items-center justify-center">
            <div className=" relative flex items-center justify-center">
                <p className="text-[200px] font-black ">404</p>
                <img className="w-[100px] h-[182px] absolute translate-y-10 translate-x-2" src="https://i.imgur.com/Uigyxzm.png" alt="" />
            </div>
            <div className=" text-center space-y-5">
            <p className="text-[42px] font-extrabold">Looks like you are lost.</p>
            <p className="font-extrabold">Oops! The page you are looking for does not exist. It might have been moved or deleted</p>
            </div>
            <div className="relative mt-20">
            <button className="uppercase w-[262px] h-[52px] relative z-10 border-2 border-black bg-white text-base font-bold">
              Back to home
            </button>
            <div className="w-[262px] h-[52px] absolute top-1 left-1 bg-[#FA7C70] border-2 border-black"></div>
          </div>
            </div>
        </div>`;
  return (
    <Container code={code}>
      <div className="w-full h-screen bg-[#FA7C70] flex items-center justify-center ">
        <div className="bg-[#F4E4D5] size-[820px] rounded-full flex flex-col items-center justify-center">
          <div className=" relative flex items-center justify-center">
            <p className="text-[200px] font-black ">404</p>
            <img
              className="w-[100px] h-[182px] absolute translate-y-10 translate-x-2"
              src="https://i.imgur.com/Uigyxzm.png"
              alt=""
            />
          </div>
          <div className=" text-center space-y-5">
            <p className="text-[42px] font-extrabold">
              Looks like you are lost.
            </p>
            <p className="font-extrabold">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted
            </p>
          </div>
          <div className="relative mt-20">
            <button className="uppercase w-[262px] h-[52px] relative z-10 border-2 border-black bg-white text-base font-bold">
              Back to home
            </button>
            <div className="w-[262px] h-[52px] absolute top-1 left-1 bg-[#FA7C70] border-2 border-black"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ErrorPage05;
