import { useForm, useFormState } from "react-hook-form";
import { Button } from "../UI/Button";
import { Form, FormError, FormRow, Input, Label, Textarea } from "../UI/FormElements";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../data/zodValidator";
import { Spinner } from "./Spinner";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";


export default function ContactForm() {
    const formRef = useRef();
    const {register, handleSubmit, reset, formState: {isSubmitting, isDirty, isValid, errors: formErrors}} = useForm({ mode: "onBlur", resolver: zodResolver(contactSchema)});

    async function handleFormSubmit() {
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
        // TODO: making the template dynamic depending on the browser locale
        // if locale === "en" ? TEMPLATE_ID_EN : TEMPLATE_ID_AR
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {publicKey: PUBLIC_KEY});

        if(result.status !== 200) throw new Error("something went wrong");
        reset();
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}>
            <FormRow>
                <Label htmlFor="name">Name:</Label>
                <Input required type="text" name="name" id="name" 
                    {...register("name")}
                />
                <FormError hasError={!!formErrors?.name?.message}>
                    {formErrors?.name?.message || ""}
                </FormError>
            </FormRow>

            <FormRow>
                <Label htmlFor="email">Email:</Label>
                <Input required type="email" name="email" id="email" 
                    {...register("email")}
                />
                <FormError hasError={!!formErrors?.email?.message}>
                    {formErrors?.email?.message || ""}
                </FormError>
            </FormRow>

            <FormRow>
                <Label htmlFor="details">Tell me about your project:</Label>
                <Textarea required name="details" id="details"
                    {...register("details")}
                    />
                <FormError hasError={!!formErrors?.details?.message}>
                    {formErrors?.details?.message || ""}
                </FormError>
            </FormRow>

            <FormRow>
                <Button disabled={!isDirty || !isValid}>
                {isSubmitting ? <Spinner/> : "Send"}
                </Button>
            </FormRow>
      </Form>
    )
}

