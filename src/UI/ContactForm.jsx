import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../data/zodValidator";
import { Button } from "../UI/Button";
import { BackSide, Form, FormError, FormGrid, FormRow, FrontSide, Input, Label, SidesContainer, Textarea } from "../UI/FormElements";
import { Spinner } from "./Spinner";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


export default function ContactForm() {
    const formRef = useRef();
    const {register, handleSubmit, reset, formState: {isSubmitting, isDirty, isValid, errors: formErrors}} = useForm({ mode: "onBlur", resolver: zodResolver(contactSchema)});

    async function handleFormSubmit() {
        // TODO: making the template dynamic depending on the browser locale
        // if locale === "en" ? TEMPLATE_ID_EN : TEMPLATE_ID_AR
        // TODO: adding the domain URL in emaijs service after deploying the app.

        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {publicKey: PUBLIC_KEY});

        if(result.status !== 200) throw new Error("something went wrong");

        reset();
        // TODO: using controls, show thankyou element using animation and set a time of 3s then use animationPresence
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}>

            <SidesContainer>
                <FrontSide>
                    {/* <FormRow>
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
                    </FormRow> */}

                    <FormGrid>
                    <FormRow className="col-start-1 col-end-2">
                        <Label htmlFor="name">Name:</Label>
                        <Input required type="text" name="name" id="name" 
                            {...register("name")}
                        />
                        <FormError hasError={!!formErrors?.name?.message}>
                            {formErrors?.name?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow className="col-start-2 -col-end-1">
                        <Label htmlFor="email">Email:</Label>
                        <Input required type="email" name="email" id="email" 
                            {...register("email")}
                        />
                        <FormError hasError={!!formErrors?.email?.message}>
                            {formErrors?.email?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow className="col-start-1 -col-end-1">
                        <Label htmlFor="details">Tell me about your project:</Label>
                        <Textarea required name="details" id="details"
                            {...register("details")}
                            />
                        <FormError hasError={!!formErrors?.details?.message}>
                            {formErrors?.details?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow className="col-auto">
                        <Button disabled={!isDirty || !isValid}>
                        {isSubmitting ? <Spinner/> : "Send"}
                        </Button>
                    </FormRow>
                        
                    </FormGrid>


                </FrontSide>
                <BackSide>
                <span>Thank you for your email.</span>
                </BackSide>
            </SidesContainer>

      </Form>
    )
}

