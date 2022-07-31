import React, { useState } from "react";

import { theme } from "../../../styles";
import { DeviceEnum } from "../../../utils";
import { Button } from "../../Base/Button";
import { Container } from "../../Base/Container";
import { Divider } from "../../Base/Divider";
import { Input } from "../../Base/Input";
import { Section } from "../../Base/Section";
import { Textarea } from "../../Base/Textarea";
import GoogleMaps from "../../Core/GoogleMaps/GoogleMaps";
import { Content, Detail, Form, Maps } from "./Contact.styles";

const Contact = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("message", state.message);

    fetch(process.env.GATSBY_GETFORMIO_ENDPOINT || "", {
      method: "POST",
      body: formData,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Section ref={ref} backgroundColor={theme.color.secondary + "5F"}>
      <Container>
        <Content>
          <Form onSubmit={(e) => onFormSubmit(e)}>
            <h3>Contact</h3>
            <Input
              type="text"
              name="name"
              value={state.name}
              required
              placeholder="name"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Input
              type="email"
              name="email"
              value={state.email}
              required
              placeholder="email"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Textarea
              name="message"
              rows={4}
              value={state.message}
              required
              placeholder="message"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Button
              type="submit"
              px={8}
              py={16}
              variant="outlined"
              aria-label="Send Email"
            >
              Send
            </Button>
          </Form>
          <Divider direction="vertical" breakpoints={DeviceEnum.TABLET} />
          <Maps>
            <GoogleMaps />
            <Detail>
              <table>
                <tbody>
                  <tr>
                    <td>Location</td>
                    <td>
                      <p>Jakarta, Indonesia</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <p>ibrahimtarigan@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <p>+62 812 6000 9709</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Detail>
          </Maps>
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(Contact);
