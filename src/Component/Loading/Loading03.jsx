import Container from "../../ui/Container";

const Loading03 = () => {
  const code = `<div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"></div>
          <div className="w-5  h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
          <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"></div>
        </div>`;
  return (
    <Container code={code}>
      <div className="flex justify-center">
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"></div>
          <div className="w-5  h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
          <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"></div>
        </div>
      </div>
    </Container>
  );
};
export default Loading03;
