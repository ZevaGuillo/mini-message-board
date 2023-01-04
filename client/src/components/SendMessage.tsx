import { Formik, Field, Form } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { createMessage } from "../service/message";
import { Message } from "../types/messageType";
import Button from "./Button";
import Input from "./Input";

type FormValues = {
  username: string;
  text: string;
};

type SendMessageProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
};

const SendMessage = ({ setMessages }: SendMessageProps) => {
  const initialValues: FormValues = { username: "", text: "" };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await createMessage(values)
      .then(res => {
        console.log(res);
        setMessages(m => [...m!, res.messageDB]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: { username?: string; text?: string } = {};

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
            <Input
              id="username"
              name="username"
              placeholder="Username"
            />
            {errors.username ? <div>{errors.username}</div> : null}
            <Input
              id="text"
              name="text"
              placeholder="Message"
            />
            {errors.text ? <div>{errors.text}</div> : null}
            <Button
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendMessage;
