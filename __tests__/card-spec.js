// @flow
import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Card, Elevation } from "../src";

describe("Card", () => {
  it("renders a div with elevation prop", () => {
    const component = shallow(
      <div>
        <Card elevation={Elevation.low}>
          <code>[1]</code>Test
        </Card>
        <Card elevation={Elevation.middle}>
          <code>[2]</code>The
        </Card>
        <Card elevation={Elevation.high}>
          <code>[3]</code>Cards
        </Card>
      </div>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
