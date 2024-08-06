import Container from "../../ui/Container"

const Switch04 = () => {
    const code =`<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
    <div className="peer rounded-br-2xl rounded-tl-2xl outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['No'] after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white">
  </div>
</label>`
  return (
    <Container code={code}>
        <div className="flex justify-center">
<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox"/>
    <div className="peer rounded-br-2xl rounded-tl-2xl outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['No'] after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white">
  </div>
</label>
        </div>
    </Container>
  )
}
export default Switch04