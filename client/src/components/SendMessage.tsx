import { Formik, Field, Form } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { createMessage } from "../service/message";

type FormValues = {
  username: string;
  text: string;
};

const SendMessage = () => {
  const initialValues: FormValues = { username: "", text: "" };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await createMessage(values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Formi</h1>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: { username?: string, text?:string } = {};

          if (!values.username) {
            errors.username = "Required";
          }

          if (!values.text) {
            errors.text = "Required";
          }

          return errors;
        }}
        onSubmit={handleSubmit}>
        {({ isSubmitting, errors }) => (
          <Form>
            <Field
              id="username"
              name="username"
              placeholder="Username"
            />
            {errors.username ? <div>{errors.username}</div> : null}
            <Field
              id="text"
              name="text"
              placeholder="Message"
            />
            {errors.text ? <div>{errors.text}</div> : null}
            <button
              type="submit"
              disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendMessage;
