import { Fragment } from "react";
import MauinHeader from "./main-header";

function Layout(props) {
  return (
    <Fragment>
      <MauinHeader/>
        <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
