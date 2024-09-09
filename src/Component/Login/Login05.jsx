import Container from "../../ui/Container";

const Login05 = () => {
  const code = `<div className="bg-black h-screen  flex items-center justify-center">
        <div className="flex items-center justify-evenly  w-full">
          <h2 className="text-white text-7xl font-semibold ">Welcome Back !</h2>
          <div className="relative">
            <div className="absolute -translate-x-[10rem] -translate-y-[10rem] size-[302px] rounded-full bg-gradient-to-t from-[#530061] to-[#0D0A30]"></div>
            <div className="absolute translate-x-80 translate-y-[40rem] size-[220px] rounded-full bg-gradient-to-t from-[#530061] to-[#0D0A30]"></div>
            {/* Card  */}
            <div className="w-[28rem] pt-20 pb-10 px-12  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="text-white text-4xl font-semibold ">Login</p>
              <p className="text-white font-medium">Glad you&apos;re back!</p>
              <div className="space-y-2 pt-5">
                <label htmlFor="" className="text-white">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="p-4  w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
              </div>
              <div className="space-y-2 pt-5">
                <label htmlFor="" className="text-white">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="p-4  w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
              </div>
              <div className="space-y-2 pt-5">
                <input
                  type="checkbox"
                  placeholder="Password"
                  className=" bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
                <label htmlFor="" className="text-white pl-2">
                  Remember Me
                </label>
              </div>

              <button className="mt-5 text-white text-[20px] font-semibold w-full rounded-lg px-[14px] py-[10px] bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475]">
                Login
              </button>
              <p className="text-white font-medium py-2">Forgot password ?</p>
              {/* divider */}
              <span className="relative flex justify-center items-center pt-10">
                <span className="h-[2px] flex-1 bg-[#4D4D4D]"></span>
                <span className=" text-[#4D4D4D] px-4 font-medium">Or</span>
                <span className="h-[2px] flex-1 bg-[#4D4D4D]"></span>
              </span>
              {/* icons */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </button>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                </button>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    className="rounded-full"
                    viewBox="0 0 256 256"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(8,8)">
                        <path d="M15,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="">
                <p className="text-white text-center py-5">Don&lsquo;t have an account ? SignUp</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  return (
    <Container code={code}>
      <div className="bg-black h-screen  flex items-center justify-center">
        <div className="flex items-center justify-evenly  w-full">
          <h2 className="text-white text-7xl font-semibold ">Welcome Back !</h2>
          <div className="relative">
            <div className="absolute -translate-x-[10rem] -translate-y-[10rem] size-[302px] rounded-full bg-gradient-to-t from-[#530061] to-[#0D0A30]"></div>
            <div className="absolute translate-x-80 translate-y-[40rem] size-[220px] rounded-full bg-gradient-to-t from-[#530061] to-[#0D0A30]"></div>
            {/* Card  */}
            <div className="w-[28rem] pt-20 pb-10 px-12  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="text-white text-4xl font-semibold ">Login</p>
              <p className="text-white font-medium">Glad you&apos;re back!</p>
              <div className="space-y-2 pt-5">
                <label htmlFor="" className="text-white">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="p-4  w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
              </div>
              <div className="space-y-2 pt-5">
                <label htmlFor="" className="text-white">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="p-4  w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
              </div>
              <div className="space-y-2 pt-5">
                <input
                  type="checkbox"
                  placeholder="Password"
                  className=" bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white"
                />
                <label htmlFor="" className="text-white pl-2">
                  Remember Me
                </label>
              </div>

              <button className="mt-5 text-white text-[20px] font-semibold w-full rounded-lg px-[14px] py-[10px] bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475]">
                Login
              </button>
              <p className="text-white font-medium py-2">Forgot password ?</p>
              {/* divider */}
              <span className="relative flex justify-center items-center pt-10">
                <span className="h-[2px] flex-1 bg-[#4D4D4D]"></span>
                <span className=" text-[#4D4D4D] px-4 font-medium">Or</span>
                <span className="h-[2px] flex-1 bg-[#4D4D4D]"></span>
              </span>
              {/* icons */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </button>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                </button>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    className="rounded-full"
                    viewBox="0 0 256 256"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(8,8)">
                        <path d="M15,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="">
                <p className="text-white text-center py-5">Don&lsquo;t have an account ? SignUp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Login05;
