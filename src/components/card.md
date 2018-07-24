It's a card!

```jsx
<Card>
  <pre style={{ padding: "20px" }}>test content</pre>
</Card>
```

Cards can be raised to 4 different elevations and default to "lying flat" on the page.

```jsx
var { Elevation } = require("..");

<div className="cards">
  <Card elevation={Elevation.none}>
    <pre style={{ padding: "20px" }}>test content</pre>
  </Card>
  <Card elevation={Elevation.low}>
    <pre style={{ padding: "20px" }}>test content</pre>
  </Card>
  <Card elevation={Elevation.middle}>
    <pre style={{ padding: "20px" }}>test content</pre>
  </Card>
  <Card elevation={Elevation.high}>
    <pre style={{ padding: "20px" }}>test content</pre>
  </Card>
  <Card elevation={Elevation.highest}>
    <pre style={{ padding: "20px" }}>test content</pre>
  </Card>
  <style>
    {`
    .cards > * {
      margin: 30px 0;
    }

    `}
  </style>
</div>;
```
