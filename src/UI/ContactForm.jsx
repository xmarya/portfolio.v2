import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../data/zodValidator";
import { Button } from "../UI/Button";
import { AfterSubmit, Form, FormError, FormGrid, FormRow, Input, Label, Textarea } from "../UI/FormElements";
import { Spinner } from "./Spinner";
import { useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


const rowVariants = {
    initial: {
        y: 50,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1,
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
        y: 200,
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
        transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function ContactForm({sectionRef}) {
    const {register, handleSubmit, reset, formState: {isSubmitting, isDirty, isValid, errors: formErrors}} = useForm({ mode: "onBlur", resolver: zodResolver(contactSchema)});
    
    const formRef = useRef();
    const afterSubmitRef = useRef();
    const isInView = useInView(formRef, {once: true});

    const controls = useAnimation();

    async function handleFormSubmit() {
        // TODO: making the template dynamic depending on the browser locale
        // if locale === "en" ? TEMPLATE_ID_EN : TEMPLATE_ID_AR
        // TODO: adding the domain URL in emaijs service after deploying the app.

        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {publicKey: PUBLIC_KEY});

        result.status === 200 ? handleAfterSubmitStyles("success") : handleAfterSubmitStyles("error");
    }

    async function handleAfterSubmitStyles(styleType) {
        console.log(styleType);
        controls.start("gridExit");

        if (styleType === "success") {
            sectionRef.current.style.boxShadow = "0px 0px 3.5rem var(--neon-green)";
            afterSubmitRef.current.children[0].innerText = "Thank you for your email."
            console.log("inside"+ styleType);
        }
        
        else {
            sectionRef.current.style.boxShadow = "0px 0px 3.5rem var(--neon-red)";
            afterSubmitRef.current.children[0].innerText = "Something went wrong, Please try to send your email again";
            console.log("inside"+ styleType);
        }

        await controls.start("animateAfterSubmit");
        reset();
        await controls.start("exitAfterSubmit");
        sectionRef.current.style.boxShadow = "0px 0px 3.5rem var(--neon-purple)";

    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}>
            
                <AnimatePresence>
                <FormGrid variants={gridExitVariants} exit={controls}>
                    <FormRow variants={rowVariants} initial="initial" whileInView={isInView ? "animate" : ""} className="col-start-1 col-end-2">
                        <Label htmlFor="name">Name:</Label>
                        <Input required type="text" name="name" id="name" 
                            {...register("name")}
                        />
                        <FormError hasError={!!formErrors?.name?.message}>
                            {formErrors?.name?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow variants={rowVariants} initial="initial" whileInView={isInView ? "animate" : ""} className="col-start-2 -col-end-1">
                        <Label htmlFor="email">Email:</Label>
                        <Input required type="email" name="email" id="email" 
                            {...register("email")}
                        />
                        <FormError hasError={!!formErrors?.email?.message}>
                            {formErrors?.email?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow variants={rowVariants} initial="initial" whileInView={isInView ? "animate" : ""} className="col-start-1 -col-end-1">
                        <Label htmlFor="details">Tell me about your project:</Label>
                        <Textarea required name="details" id="details"
                            {...register("details")}
                            />
                        <FormError hasError={!!formErrors?.details?.message}>
                            {formErrors?.details?.message || ""}
                        </FormError>
                    </FormRow>

                    <FormRow variants={rowVariants} initial="initial" whileInView={isInView ? "animate" : ""} className="col-auto">
                        <Button disabled={!isDirty || !isValid}>
                        {isSubmitting ? <Spinner/> : "Send"}
                        </Button>
                    </FormRow>             
                </FormGrid>
                </AnimatePresence>

            <AnimatePresence>
                <AfterSubmit ref={afterSubmitRef} variants={exitVariants} initial="initial" animate={controls} exit={controls}>
                    <p></p>
                </AfterSubmit>
            </AnimatePresence>

      </Form>
    )
}

