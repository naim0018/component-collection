import Container from "../../ui/Container";

const Button04 = () => {
  const code = `<button
  className="cursor-pointer transition-all duration-500 hover:shadow-[0_15px_50px_-15px_#13b6da] p-[12px] rounded-[24px] flex gap-4 bg-gradient-to-r from-[#2891c5] to-[#13b6da]"
>
  <svg
    className="h-12 w-12 bg-[#0a0a0a] shadow-xl rounded-full p-3"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
      fill="#F0F0F0"
    ></path>
  </svg>
  <span className="text-[1.9rem] font-bold text-white pr-3">Play Now</span>
</button>`;
  return (
    <Container code={code}>
      <div className="flex justify-center">
        <button className="cursor-pointer transition-all duration-500 hover:shadow-[0_15px_50px_-15px_#13b6da] p-[12px] rounded-[24px] flex gap-4 bg-gradient-to-r from-[#2891c5] to-[#13b6da]">
          <svg
            className="h-12 w-12 bg-[#0a0a0a] shadow-xl rounded-full p-3"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
              fill="#F0F0F0"
            ></path>
          </svg>
          <span className="text-[1.9rem] font-bold text-white pr-3">
            Play Now
          </span>
        </button>
      </div>
    </Container>
  );
};
export default Button04;
