import Container from "../../ui/Container"

const InfoCard07 = () => {
    const code =`<div
  className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
>
  <div className="flex flex-row justify-between w-full">
    <div className="flex flex-row justify-between w-full">
      <p className="text-xs">John Doe</p>
      <p className="text-xs">June 1, 2000</p>
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <h3 className="text-xl font-bold">Great Experience!</h3>

    <div className="text-xs">
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
      </div>
    </div>
  </div>

  <div className="text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
    odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros.
  </div>
</div>`
  return (
    <Container code={code}>
<div
  className="flex flex-col gap-2 dark:text-white max-w-md mx-auto w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
>
  <div className="flex flex-row justify-between w-full">
    <div className="flex flex-row justify-between w-full">
      <p className="text-xs">John Doe</p>
      <p className="text-xs">June 1, 2000</p>
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <h3 className="text-xl font-bold">Great Experience!</h3>

    <div className="text-xs">
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
      </div>
    </div>
  </div>

  <div className="text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
    odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros.
  </div>
</div>
    </Container>
  )
}
export default InfoCard07