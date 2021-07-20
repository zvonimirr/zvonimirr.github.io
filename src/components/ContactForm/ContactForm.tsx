import axios from "axios";
import { validate } from "email-validator";
import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { toast } from "react-toastify";
import { PageContainer } from "../Global/GlobalComponents";
import {
  Container,
  Form,
  Input,
  InputContainer,
  InputLabel,
  Label,
  SubmitButton,
  TextArea,
} from "./ContactFormComponents";
import { Pipedream } from "./ContactFormConstants";
import { NotificationType } from "./ContactFormTypes";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const textAreaHeightLimit = window.innerHeight - 600;

  const createNotification = (
    message: string,
    notificationType: NotificationType = NotificationType.INFO
  ) => {
    switch (notificationType) {
      case NotificationType.INFO:
        toast.info(message);
        break;

      case NotificationType.ERROR:
        toast.error(message);
        break;

      case NotificationType.SUCCESS:
        toast.success(message);
        break;

      case NotificationType.WARNING:
        toast.warning(message);
        break;

      default:
        break;
    }
  };

  const onSubmitContactForm = async () => {
    // Check if the name is valid.
    if (name.length < 1) {
      createNotification("Please enter your name.", NotificationType.ERROR);
      return;
    } else if (!validate(email)) {
      createNotification(
        "Please a valid e-mail address.",
        NotificationType.ERROR
      );
      return;
    } else if (message.length < 1) {
      createNotification("Please enter a message.", NotificationType.ERROR);
      return;
    }
    setIsSubmitting(true);
    // Send the message to the server.
    try {
      await axios.post(Pipedream.webhookUrl, {
        name,
        email,
        message,
      });

      createNotification(
        "Your message has been sent.",
        NotificationType.SUCCESS
      );
    } catch {
      createNotification(
        "A problem has occurred while sending the message.",
        NotificationType.WARNING
      );
    }
    setIsSubmitting(false);
  };

  return (
    <PageContainer>
      <Container>
        <Label>
          <IoMdContact />
          <span>Contact me</span>
        </Label>
        <Form>
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={isSubmitting}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>E-mail</InputLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled={isSubmitting}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>Message</InputLabel>
            <TextArea
              rows={3}
              value={message}
              onInput={(e) => {
                (e.target as HTMLElement).style.height = "";
                (e.target as HTMLElement).style.height =
                  Math.min(
                    (e.target as HTMLElement).scrollHeight,
                    textAreaHeightLimit
                  ) + "px";
              }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              disabled={isSubmitting}
            ></TextArea>
          </InputContainer>

          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              if (!isSubmitting) {
                onSubmitContactForm();
              }
            }}
            isSubmitting={isSubmitting}
          >
            Send message
          </SubmitButton>
        </Form>
      </Container>
    </PageContainer>
  );
}

export default ContactForm;
