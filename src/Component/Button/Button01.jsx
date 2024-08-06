import Container from "../../ui/Container"

const Button01 = () => {
    const code=`<button
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500 backdrop-blur-sm px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-blue-600 border border-white/20"
>
  <span className="text-lg">Shimmer</span>
  <div
    className="absolute inset-0 flex h-full w-full justify-center transform -skew-x-13 -translate-x-full transition-transform duration-300 group-hover:translate-x-full group-hover:duration-1000"
  >
    <div className="relative h-full w-10 bg-white/30"></div>
  </div>
</button>`
  return (
    <Container code={code}>
        <div className="flex justify-center">
<button
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500 backdrop-blur-sm px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-blue-600 border border-white/20"
>
  <span className="text-lg">Shimmer</span>
  <div
    className="absolute inset-0 flex h-full w-full justify-center transform -skew-x-13 -translate-x-full transition-transform duration-300 group-hover:translate-x-full group-hover:duration-1000"
  >
    <div className="relative h-full w-10 bg-white/30"></div>
  </div>
</button>
        </div>
    </Container>
  )
}
export default Button01