import Container from "../../ui/Container"

const Switch01 = () => {
    const code =`<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
  <div className="group peer ring-0 bg-gray-50 border-2 border-gray-900 rounded-full outline-none duration-700 after:duration-200 w-24 h-12  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-900 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1  peer-checked:after:translate-x-12 peer-hover:after:scale-95">

    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute  top-1 left-12 fill-green-600 w-10 h-10">
 <path d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z" className="svg-fill-primary">
 </path>
</svg>

    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute top-1 left-1 fill-red-600  w-10 h-10">
 <path fillRule="evenodd" d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z">
 </path>
</svg>
  </div>
</label>`
  return (
    <Container code={code}>
        <div className="flex items-center justify-center">
<label className="relative inline-flex items-center  cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
  <div className="group peer ring-0 bg-gray-50 border-2 border-gray-900 rounded-full outline-none duration-700 after:duration-200 w-24 h-12  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-900 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1  peer-checked:after:translate-x-12 peer-hover:after:scale-95">

    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute  top-1 left-12 fill-green-600 w-10 h-10">
 <path d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z" className="svg-fill-primary">
 </path>
</svg>

    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute top-1 left-1 fill-red-600  w-10 h-10">
 <path fillRule="evenodd" d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z">
 </path>
</svg>
  </div>
</label>
        </div>
    </Container>
  )
}
export default Switch01