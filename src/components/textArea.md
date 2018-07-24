It's a TextArea!

```jsx
<TextArea />
```

TextArea can have 4 different color intents and default to no color.

```jsx
var { Intent } = require("..");

<div className="textAreas">
  <TextArea intent={Intent.none} />
  <TextArea intent={Intent.primary} />
  <TextArea intent={Intent.success} />
  <TextArea intent={Intent.warning} />
  <TextArea intent={Intent.danger} />
  <style>
    {`
    .textAreas > * {
      margin: 30px 0;
    }

    `}
  </style>
</div>;
```

TextArea can fill the width of the parent contaier and can have large font.

```jsx
var { Intent } = require("..");

<div className="textAreas">
  <TextArea intent={Intent.primary} fill={true} />
  <TextArea intent={Intent.success} large={true} />
  <style>
    {`
    .textAreas > * {
      margin: 30px 0;
    }

    `}
  </style>
</div>;
```
