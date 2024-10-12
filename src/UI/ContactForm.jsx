import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../data/zodValidator";
import { Button } from "../UI/Button";
import { AfterSubmit, Form, FormError, FormGrid, FormRow, Input, Label, Textarea } from "../UI/FormElements";
import { Spinner } from "./Spinner";
import { dictionary } from '../data/dictionary';
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


const formVariants = {
    initial: {
        y: 75,
        opacity: 0,
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.8,
        }
    }
}

const gridExitVariants = {
    gridExit: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const exitVariants = {
    initial: {
        y: "100%",
        opacity: 0,
        zIndex: -10
    },

    animateAfterSubmit: {
        y: 0,
        opacity:1,
        zIndex: 10,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    },

    exitAfterSubmit: {
        opacity: 0,
        zIndex: -10,
        transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function ContactForm({ targetRef, language }) {
    const {contact, button} = dictionary;
    const {register, handleSubmit, reset, formState: {isSubmitting, isDirty, isValid, errors: formErrors}} = useForm({ mode: "onBlur", resolver: zodResolver(contactSchema)});
    
    const formRef = useRef(null);
    const afterSubmitRef = useRef(null);

    const isInView = useInView(targetRef, {once: true, amount: 0.2});
    const controls = useAnimation();


    async function handleFormSubmit(event) {
        event.preventDefault();

        // TODO: making the template dynamic depending on the browser locale
        // if locale === "en" ? TEMPLATE_ID_EN : TEMPLATE_ID_AR
        // TODO: adding the domain URL in emaijs service after deploying the app.

        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {publicKey: PUBLIC_KEY});

        result.status === 200 ? handleAfterSubmitStyles("success") : handleAfterSubmitStyles("error");
    }

    async function handleAfterSubmitStyles(styleType) {
        controls.start("gridExit");

        if (styleType === "success") {
            formRef.current.style.boxShadow = "0px 0px 3.5rem var(--neon-green)";
            afterSubmitRef.current.children[0].innerText = "Thank you for your email."
        }
        
        else {
            formRef.current.style.boxShadow = "0px 0px 3.5rem var(--neon-red)";
            afterSubmitRef.current.children[0].innerText = "Something went wrong, Please try to send your email again";
        }

        await controls.start("animateAfterSubmit");
        reset();
        await controls.start("exitAfterSubmit");
        formRef.current.style.boxShadow = "var(--shadow-md)";

    }

    return (
        <Form ref={formRef} variants={formVariants} initial="initial" animate={isInView ? "animate" : ""} onSubmit={handleSubmit(handleFormSubmit)}>
            
            <AnimatePresence>
                <FormGrid variants={gridExitVariants} exit={controls}>
                    <FormRow className="col-start-1 col-end-2">
                        <Label htmlFor="name">{contact.nameLabel[language]}</Label>
                        <Input required type="text" name="name" id="name" 
                            {...register("name")}
                        />
                        <FormError role="alert" aria-live="assertive" aria-atomic="true"
                                    hasError={!!formErrors?.name?.message}>
                            {formErrors?.name?.message[language] || ""}
                        </FormError>
                    </FormRow>

                    <FormRow className="col-start-2 -col-end-1">
                        <Label htmlFor="email">{contact.emailLabel[language]}</Label>
                        <Input required type="email" name="email" id="email" 
                            {...register("email")}
                        />
                        <FormError role="alert" aria-live="assertive" aria-atomic="true"
                                    hasError={!!formErrors?.email?.message}>
                            {formErrors?.email?.message[language] || ""}
                        </FormError>
                    </FormRow> 

                    <FormRow className="col-start-1 -col-end-1">
                        <Label htmlFor="details">{contact.messageLabel[language]}</Label>
                        <Textarea required name="details" id="details"
                            {...register("details")}
                            />
                        <FormError role="alert" aria-live="assertive" aria-atomic="true"
                                    hasError={!!formErrors?.details?.message}>
                            {formErrors?.details?.message[language] || ""}
                        </FormError>
                    </FormRow>

                    <FormRow className="col-auto">
                        <Button disabled={!isDirty || !isValid} type='submit'>
                        {isSubmitting ? <Spinner/> : `${button.send[language]}`}
                        </Button>
                    </FormRow>             
                </FormGrid>
            </AnimatePresence>

            <AnimatePresence>
                <AfterSubmit ref={afterSubmitRef} variants={exitVariants} initial="initial" animate={controls} exit={controls}>
                    <p>thhhhanksuuu</p>
                </AfterSubmit>
            </AnimatePresence>

      </Form>
    )
}

