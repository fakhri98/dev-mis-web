import React from "react";
import { Button, Input, Modal } from "../components";

const Example = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <div className="w-[1000px] sm:w-[600px] md:w-96 lg:w-1/3 border border-slate-500 px-4 py-10 space-y-6">
        <Input title="Username" placeholder="Input your username" />
        <Input
          title="Password"
          type="password"
          placeholder="Input your password"
          className="bg-orange-300"
        />

        <Button> Test </Button>
        <button onClick={() => setToggle(!toggle)}> Toggle </button>
        <Modal toggle={toggle}>
          <div className="p-10 space-y-8 border border-neutral-500 rounded-xl m-10 ease-in-out transition-transform">
            <Button variant="secondary"> Secondary </Button>
            <Button variant="secondary"> Secondary </Button>
            <Button variant="secondary"> Secondary </Button>
            <Button variant="secondary"> Secondary </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Example;
