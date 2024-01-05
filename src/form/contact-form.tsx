"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { POST_Contact, POST_Contact_Params } from "@/api/POST_Contact";
import { useAppDispatch } from "@/redux/store";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("სახელი აუცილებელია"),
    email: Yup.string().email("არასწორი ფორმატი").required("ელ. ფოსტა აუცილებელია"),
    subject: Yup.string().required("სათაური აუცილებელია"),
    message: Yup.string().required("შეტყობინება აუცილებელია"),
  });

  const handleSubmit = async (values: POST_Contact_Params, { resetForm }: FormikHelpers<POST_Contact_Params>) => {
    try {
      await POST_Contact(values, dispatch);
      resetForm();
    } catch (error) {}
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-md-6">
              <div className="contact__form-input">
                <Field type="text" placeholder="სახელი" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-md-6">
              <div className="contact__form-input">
                <Field type="email" placeholder="ელ. ფოსტა" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="contact__form-input">
                <Field type="text" placeholder="სათაური" name="subject" />
                <ErrorMessage name="subject" component="div" className="error" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="contact__form-input">
                <Field as="textarea" placeholder="შეტყობინება" name="message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="contact__btn">
                <button type="submit" className="e-btn">
                  გაგზავნა
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
