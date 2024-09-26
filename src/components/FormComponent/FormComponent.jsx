import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormComponent.module.scss"; 

const FormComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    date: Yup.date().required("Date is required"),
    comment: Yup.string().min(5, "Comment must be at least 5 characters long"),
  });

  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data Submitted:", values);
    resetForm();
    alert("Form successfully submitted!");
  };

  const today = new Date();

  return (
    <div className={styles["form-container"]}>
      <h2>Book your campervan now</h2>
      <h3>Stay connected! We are always ready to help you.</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values, isValid, isSubmitting }) => (
          <Form>
            <div>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                className={styles.input}
              />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <DatePicker
                selected={values.date}
                onChange={(val) => setFieldValue("date", val)}
                dateFormat="dd/MM/yyyy"
                minDate={today}
                placeholderText="Booking date*"
                
              />
              <ErrorMessage name="date" component="div" className={styles.error} />
            </div>

            <div>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
                className={styles.input}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" disabled={!isValid || isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
