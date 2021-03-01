import React from "react";
import { Segment } from "./components/Segment";
import { Placeholder } from "./components/Placeholder";
import { Heading } from "./components/Heading";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";

export class Content extends React.Component {
  render() {
    return (
      <Segment>
        <Heading>Summary</Heading>
        <Placeholder />
        <Divider />
        <Button>Click Me</Button>
      </Segment>
    );
  }
}
