import { PageLayout, Input, PasswordInput } from "components/common";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    event.persist();
    setFormFields((s) => ({
      ...s,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
