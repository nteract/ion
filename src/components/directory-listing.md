```jsx
var contents = [
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

<div>
  <GroupedDirectoryListings contents={contents} basepath={"/"} />
</div>;
```
