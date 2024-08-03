import Container from "../../ui/Container"

const ErrorPage01 = () => {
  const code = `        <div className="grid h-screen place-content-center bg-white px-4">
  <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
</div>`
  return (
<Container code={code}>
<div className="grid h-screen place-content-center bg-white px-4">
  <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
</div>
</Container>
    
  )
}
export default ErrorPage01