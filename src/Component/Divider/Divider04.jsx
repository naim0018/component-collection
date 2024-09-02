import Container from "../../ui/Container";

const Divider04 = () => {
    const code=`<span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
        <span className="pl-6">Lorem, ipsum dolor</span>
      </span>`
  return (
    <Container code={code}>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
        <span className="pl-6">Lorem, ipsum dolor</span>
      </span>
    </Container>
  );
};

export default Divider04;
