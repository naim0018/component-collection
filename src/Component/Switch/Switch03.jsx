import Container from "../../ui/Container"

const Switch03 = () => {
    const code=`<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
  <div className="group peer relative ring-2 bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600 rounded-full outline-none duration-1000 after:duration-300 w-24 h-12 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-[#0D2B39] peer-checked:after:rotate-180 after:bg-[conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)] after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-125">
  </div>
</label>`
  return (
    <Container code={code}>
        <div className="flex items-center justify-center">
<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
  <div className="group peer relative ring-2 bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600 rounded-full outline-none duration-1000 after:duration-300 w-24 h-12 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-[#0D2B39] peer-checked:after:rotate-180 after:bg-[conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)] after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-125">
  </div>
</label>
        </div>
    </Container>
  )
}
export default Switch03