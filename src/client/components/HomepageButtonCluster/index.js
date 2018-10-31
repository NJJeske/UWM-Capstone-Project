import React, { Component } from "react";
import { Button } from "reactstrap";

/*
 * Class component that will represent the cluster of 6 main buttons that will appear on
 * the applications homepage. These 6 buttons will direct the user to the buttons corresponding
 * page. These buttons will be "Documents", "Education", "Experience", "Projects", "Contacts", 
 * and "Timeline".
 */
export class ButtonCluster extends Component {
  render() {
    <div className="ButtonCluster">
      <div className="FirstRow">
        <Button color="Secondary">Documents</Button>;
        <Button color="Secondary">Experience</Button>;
        <Button color="Secondary">Education</Button>;
      </div>
      <div className="SecondRow">
        <Button color="Secondary">Projects</Button>;
        <Button color="Secondary">Contacts</Button>;
        <Button color="Secondary">Timeline</Button>;
      </div>
    </div>;
  }
}
