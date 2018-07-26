// @flow
import * as React from "react";

import TimeAgo from "@nteract/timeago";

type LastSavedProps = {
  lastModified: Date
};

export class LastSaved extends React.Component<LastSavedProps, null> {
  static defaultProps = {
    lastModified: new Date()
  };

  render() {
    return (
      <td className="timeago">
        <TimeAgo date={this.props.lastModified} />
        <style jsx>{`
          .timeago {
            text-align: right;
            color: #6a737d;
            padding-right: 10px;
          }
        `}</style>
      </td>
    );
  }
}
