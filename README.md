# ion

A React-backed UI Toolkit for nteract apps

> nteract React components, missing an Electron

```
npm install --save @nteract/ion
```


## Likely Usage

(this is README driven development at the moment)

```jsx
import {
  Card,
  Prompt,
  Source,
  Elevation,
  Input,
  Outputs
} from "@nteract/ion";

const Cell = ({ children, isSelected }) => (
  <Card elevation={isSelected ? Elevation.HIGHEST : Elevation.LOWEST}>
    {children}
  </Card>
);

ReactDOM.render(
  <Cell>
    <Input>
      <Prompt counter={1} queued />
      <Source>import this</Source>
    </Input>
    <Outputs />
  </Cell>,
  document.querySelector("root")
);
```

## Goal

Coalesce styled components across the nteract org into one nice UI kit that includes many of the basics like:

* Colors
* Typography
* Form elements
* Progress bars
* Buttons
* Button Groups
* Tooltips and Popovers
* Dropdown Menus
* Navigation Bars
* Dialogs and Alerts
* Navigation bars
* Notifications (in-app "toasts")
* Cards and Elevation

As well as common elements we support across nteract apps

* Directory Listing

As we go along, let's make a sketch file that has our components as we build them. 


## More Background

We've been building a _lot_ of components inside the nteract monorepo. It's time to make an overall UI kit that ties together what we've been doing while helping us have one consistent style guide.
