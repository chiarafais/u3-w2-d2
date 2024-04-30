import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function WelcomeAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading> Welcome! Benvenuti in EpiBooks!</Alert.Heading>
      </Alert>
    );
  }
}

export default WelcomeAlert;
