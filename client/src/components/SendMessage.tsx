import EmojiPicker from "emoji-picker-react";
import { Formik, Field, Form } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createMessage } from "../service/message";
import { Message, MessageForm } from "../types/messageType";
import Button from "./Button";
import Emoji from "./Emoji";
import Input from "./Input";

type FormValues = {
  username: string;
  text: string;
};

type SendMessageProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
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
      .catch(err => console.log(err))
      .finally(()=>{
        actions.resetForm()
      })
  };

  return (
    <StyledSendMessage>
      <Formik<MessageForm>
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
        {({ isSubmitting, errors, setFieldValue, values}) => {
          const [emoji, setEmoji] = useState('');

          useEffect(() => {
            setFieldValue('text', values.text.concat(emoji) , false);
          }, [emoji]);

          return (
            <Form>
              <Emoji setEmoji={setEmoji}/>
              <div className="inputs">
                <Input
                  id="username"
                  name="username"
                  placeholder="Username"
                  className={errors.username ? "error" : ""}
                />
                {}
                <Input
                  id="text"
                  name="text"
                  placeholder="Message"
                  className={errors.text ? "error" : ""}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    </StyledSendMessage>
  );
};

const StyledSendMessage = styled.div`
  padding: 1rem 0;
  form {
    display: flex;
  }
  .inputs {
    flex: 1;
  }
`;

export default SendMessage;
