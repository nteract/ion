// @flow
import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Elevation } from "../src/constants";
import { Card } from "../src";

describe("Card", () => {
  it("renders a div with elevation prop", () => {
    const component = shallow(
      <div>
        <Card elevation={Elevation.LOWEST}>
          <code>[1]</code>Test
        </Card>
        <Card elevation={Elevation.MEDIUM}>
          <code>[2]</code>The
        </Card>
        <Card elevation={Elevation.HIGHEST}>
          <code>[3]</code>Cards
        </Card>
      </div>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
