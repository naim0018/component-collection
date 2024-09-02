import Container from "../../ui/Container";

const Divider03 = () => {
    const code=`<span className="flex items-center">
        <span className="pr-6">Lorem, ipsum dolor</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>`
  return (
    <Container code={code}>
      <span className="flex items-center">
        <span className="pr-6">Lorem, ipsum dolor</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </Container>
  );
};

export default Divider03;
