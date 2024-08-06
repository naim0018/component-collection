import Container from "../../ui/Container"

const Switch05 = () => {
    const code=`<label
  className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
  htmlFor="switch"
>
  <input className="peer sr-only" id="switch" type="checkbox" />

  <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

  <span
    className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0"
  >
    <span
      className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"
    >
    </span>
  </span>
</label>`
  return (
    <Container code={code}>
        <div className="flex justify-center">
<label
  className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
  htmlFor="switch"
>
  <input className="peer sr-only" id="switch" type="checkbox" />

  <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

  <span
    className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0"
  >
    <span
      className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"
    >
    </span>
  </span>
</label>
        </div>
    </Container>
  )
}
export default Switch05