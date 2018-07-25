// @flow
import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import {
  Entry,
  Listing,
  Name,
  Icon,
  LastSaved,
  GroupedDirectoryListings
} from "../src";

describe("Listing", () => {
  it("accepts props and renders entries in directory in a table", () => {
    const component = (
      <Listing>
        <Entry>
          <Icon fileType={"directory"} />
          <Name>{"linky"}</Name>
          <LastSaved
            last_modified={
              "Fri Jun 22 2018 00:15:55 GMT-0400 (Eastern Daylight Time)"
            }
          />
        </Entry>
      </Listing>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe("Entry", () => {
  it("accepts props and renders entries in directory", () => {
    const component = shallow(
      <Entry>
        <Icon fileType={"directory"} />
        <Name>{"linky jr"}</Name>
        <LastSaved
          last_modified={
            "Fri Jun 22 2018 00:15:55 GMT-0400 (Eastern Daylight Time)"
          }
        />
      </Entry>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe("GroupedDirectoryListings", () => {
  it("accepts contents as props and renders a directory listing", () => {
    const component = shallow(
      <div>
        <GroupedDirectoryListings contents={contents} basepath={"/"} />
      </div>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});

const contents = [
  {
    type: "directory",
    mimetype: null,
    format: "json",
    content: null,
    writable: true,
    name: "photos",
    path: "#",
    created: "2018-07-25T02:02:32.242Z",
    last_modified: "2018-07-25T02:02:32.242Z"
  },
  {
    type: "notebook",
    mimetype: null,
    format: "json",
    content: null,
    writable: true,
    name: "CNN.ipynb",
    path: "#",
    created: "2018-07-25T02:02:32.242Z",
    last_modified: "2018-07-25T02:02:32.257Z"
  },
  {
    type: "file",
    mimetype: null,
    writable: true,
    format: "text",
    content: null,
    name: "node.js",
    path: "#",
    created: "2018-07-25T02:02:32.270Z",
    last_modified: "2018-07-25T02:02:32.270Z"
  }
];
