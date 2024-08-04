import Container from "../../ui/Container"

const InfoCard11 = () => {
    const code=`<div className="overflow-hidden relative w-56 h-64 bg-sky-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2">
  <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current">
    <path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z" className="svg-stroke-primary">
    </path>
  </svg>
  <div className="flex flex-col items-center">
    <p className="text-xl font-extrabold">Discount</p>
    <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">Up to</p>
  </div>
  <span className="font-extrabold text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">70%</span>
  <button className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-sky-500 hover:bg-sky-500 hover:text-gray-50">Shop now</button>
  <p className="text-xs mb-1">*Variable prices</p>
</div>`
  return (
    <Container code={code}>
<div className="overflow-hidden relative w-56 mx-auto h-64 bg-sky-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2">
  <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current">
    <path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z" className="svg-stroke-primary">
    </path>
  </svg>
  <div className="flex flex-col items-center">
    <p className="text-xl font-extrabold">Discount</p>
    <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">Up to</p>
  </div>
  <span className="font-extrabold text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">70%</span>
  <button className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-sky-500 hover:bg-sky-500 hover:text-gray-50">Shop now</button>
  <p className="text-xs mb-1">*Variable prices</p>
</div>
    </Container>
  )
}
export default InfoCard11