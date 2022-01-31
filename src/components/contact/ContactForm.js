import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    comments: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    phone: Yup.string().required("Please enter your phone"),
    email: Yup.string().email().required("Please enter your email"),
    comments: Yup.string().required("Please enter your comment"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698731.6663646083!2d7.096700662297991!3d46.83541012300798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39c0d43a1b77%3A0x8a06a97eae310a0!2zQmVybiwgxLBzdmnDp3Jl!5e0!3m2!1str!2str!4v1641151436463!5m2!1str!2str"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>

        <Col lg={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="please type your name"
                {...formik.getFieldProps("name")}
                isInvalid={!!formik.errors.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="please type your phone"
                {...formik.getFieldProps("phone")}
                isInvalid={!!formik.errors.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="please type your email"
                {...formik.getFieldProps("email")}
                isInvalid={!!formik.errors.email}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...formik.getFieldProps("comments")}
                isInvalid={!!formik.errors.comments}
              />
            </Form.Group>
            <Button type="submit">SEND</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
