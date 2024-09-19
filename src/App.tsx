import { Button, Container, Input } from "./Components";
function App() {
  const handleClick = (): void => {
    console.log("Hello");
  };
  return (
    <>
      <h1>Let's get started!</h1>
      <Input id={"12"} type="text" label="First Name" />
      <Input id={"13"} type="number" label="age" />
      <Button
        href="https://github.com/KaranMeghe"
        target="_blank"
        className="button"
      >
        click this link
      </Button>
      <br /> <br />
      <Button className="button">submit button</Button> <br /> <br />
      <Container as={Button} className="button" onClick={handleClick}>
        Polymorphic Component
      </Container>
      <br /> <br />
      <Container as={"a"} href="https://www.google.com" target="_blank">
        click me
      </Container>
    </>
  );
}

export default App;
