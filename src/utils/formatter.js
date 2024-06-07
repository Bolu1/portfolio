import { Fragment } from "react";

export function formatText(text) {
    return text.split('\n').map((line, index) => (
      <Fragment key={index}>
        {line}
        <br />
      </Fragment>
    ));
  }
  