import { Button, Input } from "./Components";
function App() {
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
      <Button className="button">submit button</Button>
    </>
  );
}

export default App;
