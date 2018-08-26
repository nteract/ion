// @flow
import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { TextArea, Intent } from "../src";

describe("TextArea", () => {
  it("renders a simple text area", () => {
    const component = shallow(
      <TextArea fill={true} large={4} intent={Intent.primary} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
