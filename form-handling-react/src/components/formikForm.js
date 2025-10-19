import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          alert("Registration Successful (Formik)!");
          resetForm();
        }}
      >
        <Form>
          {/* Username */}
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          {/* Email */}
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          {/* Password */}
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
