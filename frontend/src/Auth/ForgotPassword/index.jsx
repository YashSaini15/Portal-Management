import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../Utils/utils";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BaseURL}/forgotPass/forgot-password`,
        { email },
      );
      setMessage(response.data.status);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="containerOne bg-dark" style={{ margin: "9% auto" }}>
      <h3 className="headOne">FORGOT PASSWORD</h3>
      <Form className="m-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formGroupEmail">
          <Form.Label className="fw">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-dark text-white"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button
            className="fw"
            variant="success"
            type="submit"
           
          >
            SEND
          </Button>

          <Button
            className="fw"
            variant="secondary"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </div>{" "}
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
