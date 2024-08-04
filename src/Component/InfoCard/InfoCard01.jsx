import Container from "../../ui/Container"

const InfoCard01 = () => {
    const code=`<div
  className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:dark:bg-[#0C66E4]"
>
  <h3 className="text-xl text-center">Today</h3>
  <div className="gap-4 relative">
    <svg
      viewBox="0 0 64 64"
    //   xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 scale-[110%]"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="28.33"
          y1="19.67"
          x2="21.5"
          x1="16.5"
          id="b"
        >
          <stop stopColor="#fbbf24" offset="0"></stop>
          <stop stopColor="#fbbf24" offset=".45"></stop>
          <stop stopColor="#f59e0b" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="50.8"
          y1="21.96"
          x2="39.2"
          x1="22.56"
          id="c"
        >
          <stop stopColor="#f3f7fe" offset="0"></stop>
          <stop stopColor="#f3f7fe" offset=".45"></stop>
          <stop stopColor="#deeafb" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="48.05"
          y1="42.95"
          x2="25.47"
          x1="22.53"
          id="a"
        >
          <stop stopColor="#4286ee" offset="0"></stop>
          <stop stopColor="#4286ee" offset=".45"></stop>
          <stop stopColor="#0950bc" offset="1"></stop>
        </linearGradient>
        <linearGradient
        //   xlink:href="#a"
          y2="48.05"
          y1="42.95"
          x2="32.47"
          x1="29.53"
          id="d"
        ></linearGradient>
        <linearGradient
        //   xlink:href="#a"
          y2="48.05"
          y1="42.95"
          x2="39.47"
          x1="36.53"
          id="e"
        ></linearGradient>
      </defs>
      <circle
        strokeWidth=".5"
        strokeMiterlimit="10"
        stroke="#f8af18"
        fill="url(#b)"
        r="5"
        cy="24"
        cx="19"
      ></circle>
      <path
        d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="#fbbf24"
        fill="none"
      >
        <animateTransform
          values="0 19 24; 360 19 24"
          type="rotate"
          repeatCount="indefinite"
          dur="45s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
        strokeWidth=".5"
        strokeMiterlimit="10"
        stroke="#e6effc"
        fill="url(#c)"
      ></path>
      <path
        d="M24.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#a)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M31.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#d)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          begin="-0.4s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M38.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#e)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          begin="-0.2s"
          attributeName="translate-x-8"
        ></animateTransform>
      </path>
    </svg>
    <h4
      className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150"
    >
      6°
    </h4>
  </div>
  <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
    <p className="text-sm">Heavy Raining</p>
    <p className="text-sm">50% humidity</p>
  </div>
</div>`
  return (
    <Container code={code}>
<div
  className=" mx-auto duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:dark:bg-[#0C66E4]"
>
  <h3 className="text-xl text-center">Today</h3>
  <div className="gap-4 relative">
    <svg
      viewBox="0 0 64 64"
    //   xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 scale-[110%]"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="28.33"
          y1="19.67"
          x2="21.5"
          x1="16.5"
          id="b"
        >
          <stop stopColor="#fbbf24" offset="0"></stop>
          <stop stopColor="#fbbf24" offset=".45"></stop>
          <stop stopColor="#f59e0b" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="50.8"
          y1="21.96"
          x2="39.2"
          x1="22.56"
          id="c"
        >
          <stop stopColor="#f3f7fe" offset="0"></stop>
          <stop stopColor="#f3f7fe" offset=".45"></stop>
          <stop stopColor="#deeafb" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="48.05"
          y1="42.95"
          x2="25.47"
          x1="22.53"
          id="a"
        >
          <stop stopColor="#4286ee" offset="0"></stop>
          <stop stopColor="#4286ee" offset=".45"></stop>
          <stop stopColor="#0950bc" offset="1"></stop>
        </linearGradient>
        <linearGradient
        //   xlink:href="#a"
          y2="48.05"
          y1="42.95"
          x2="32.47"
          x1="29.53"
          id="d"
        ></linearGradient>
        <linearGradient
        //   xlink:href="#a"
          y2="48.05"
          y1="42.95"
          x2="39.47"
          x1="36.53"
          id="e"
        ></linearGradient>
      </defs>
      <circle
        strokeWidth=".5"
        strokeMiterlimit="10"
        stroke="#f8af18"
        fill="url(#b)"
        r="5"
        cy="24"
        cx="19"
      ></circle>
      <path
        d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="#fbbf24"
        fill="none"
      >
        <animateTransform
          values="0 19 24; 360 19 24"
          type="rotate"
          repeatCount="indefinite"
          dur="45s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
        strokeWidth=".5"
        strokeMiterlimit="10"
        stroke="#e6effc"
        fill="url(#c)"
      ></path>
      <path
        d="M24.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#a)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M31.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#d)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          begin="-0.4s"
          attributeName="transform"
        ></animateTransform>
      </path>
      <path
        d="M38.39 43.03l-.78 4.94"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke="url(#e)"
        fill="none"
      >
        <animateTransform
          values="1 -5; -2 10"
          type="translate"
          repeatCount="indefinite"
          dur="0.7s"
          begin="-0.2s"
          attributeName="translate-x-8"
        ></animateTransform>
      </path>
    </svg>
    <h4
      className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150"
    >
      6°
    </h4>
  </div>
  <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
    <p className="text-sm">Heavy Raining</p>
    <p className="text-sm">50% humidity</p>
  </div>
</div>
{/* <div className="group before:absolute before:bg-sky-500 before:w-3 before:h-12 before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-gray-50 relative w-60 h-60 bg-sky-500 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
  <div className="w-56 h-56 bg-neutral-900 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
    <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 shadow-inner shadow-gray-50 w-52 h-52">
      <div className="group-hover:duration-300 hover:opacity-100  opacity-0 before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative   flex flex-col justify-around items-center w-44 h-40 bg-neutral-900 text-gray-50">
        <span className="">Wed, Sep 19</span>
        <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">12<span className="text-xl font-bold text-gray-50 [text-shadow:none]">:</span>58</span>
        <div className="text-gray-50 w-48 flex flex-row justify-evenly">
          <span className="text-xs font-bold">89</span>
          <div className="flex flex-row items-center">
            <svg className="w-5 h-5 fill-red-500 animate-bounce" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="" d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" fillRule="evenodd">
            </path>
            </svg>
            <svg className="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="svg-fill-primary" d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z">
            </path>
            </svg>
            <svg className="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="svg-fill-primary" d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" fillRule="evenodd">
            </path>
            </svg>
          </div>
        </div>
      </div>
      <span className="text-gray-700 text-lg font-light">fitbit</span>
    </div>
  </div>
</div> */}
    </Container>
  )
}
export default InfoCard01