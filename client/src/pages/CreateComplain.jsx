import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateComplain() {
  let navigate = useNavigate();
  const initialValues = {
    Name: "",
    email: "",
    ComplainDetail: "",
    Department:""
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("You must input a Name!"),
    email: Yup.string().required(),
    ComplainDetail: Yup.string().required(),
    Department:Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/complains", data).then((response) => {
      navigate("/");
      alert("Thanks for Submitting Complain")
    });
  };
  return (<>
    <div className="nav " style={{backgroundColor:"#79E0EE"}}>
    
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style={{paddingLeft:"#35px"}}>
      <span className="fs-4" style={{fontWeight:"600"}} >SmartLink Holdings</span>
    </a>
   </div>
    <div className="createComplainPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Name: </label>
          <ErrorMessage name="Name" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateComplain"
            name="Name"
            placeholder="(Ex. Your name...)"
          />
          <label>email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateComplain"
            name="email"
            type="email"
            placeholder="(Ex. Your email...)"
          />
          <label>Complaint: </label>
          <ErrorMessage name="ComplainDetail" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateComplain"
            name="ComplainDetail"
            placeholder="(Ex. your complain...)"
          />
          <label>Department: </label>
          <ErrorMessage name="Department" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateComplain"
            name="Department"
            placeholder="(Ex. your department...)"
          />

          <button type="submit"> Create Complain</button>
        </Form>
      </Formik>
    </div>
    </>
  );
}

export default CreateComplain;