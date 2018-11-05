import React from "react";
import { Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const EntityActionBar = props => {
  const { mode, handlers } = props;
  const buttons =
    mode === "VIEW" ? (
      <React.Fragment>
        <Button onClick={handlers.editButton}>
          <FontAwesomeIcon icon="edit" />
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Button onClick={handlers.deleteButton}>
          <FontAwesomeIcon icon="trash-alt" />
        </Button>
        <Button onClick={handlers.cancelButton}>
          <FontAwesomeIcon icon="ban" />
        </Button>
        <Button onClick={handlers.saveButton}>
          <FontAwesomeIcon icon="check" />
        </Button>
      </React.Fragment>
    );

  return <Row className="entityActionBar">{buttons}</Row>;
};

export default EntityActionBar;
