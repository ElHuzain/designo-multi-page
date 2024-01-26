"use client";

import { Button } from '@/components/ui/button'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

import { Input } from '@/components/ui/input'

import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import useGetScreenWidth from '@/hooks/useGetScreenWidth';
import AnimationScroll from '@/components/ui/animationScroll';

type errorElementType = {
    condition: any
    msg: string
}

const ErrorElement = ({ condition, msg }: errorElementType) => {

    if (condition) return <span className='absolute animate-in fade-in fade-out slide-in-from-right slide-out-to-right duration-1000 top-0 right-0 flex items-center gap-2'>
        <span>{msg}</span><img alt='error' src='/assets/contact/desktop/icon-error.svg' />
    </span >
}

const ContactForm = () => {

    const form = useForm();
    const { screenWidth } = useGetScreenWidth();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    const formItemStyle = "relative";

    return (
        <MaxWidthContainer bottomMargin={true} expands={true}>
            <section className="py-[71px] overflow-hidden lg:px-[95px] relative sm:px-[58px] bg-primary text-white flex flex-col lg:flex-row gap-12 lg:gap-4 lg:justify-between sm:rounded-[15px]    ">


                {
                    screenWidth === 'mobile'
                        ? <img alt='background-decoration' src='/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg' className="absolute w-full top-0" />
                        : <img alt='background-decoration' src='/assets/contact/desktop/bg-pattern-hero-desktop.svg' className="absolute top-[-90px] left-[-90px] lg:bottom-0 lg:left-0 lg:w-[57%] object-cover" />

                }

                <AnimationScroll direction='left' className="text-center max-w-[635px] flex flex-col px-5 gap-8 justify-center sm:text-left">
                    <>
                        <h1 className="text-[32px] sm:text-[48px] font-[400]">Contact Us</h1>
                        <p className="font-[300] max-w-[440px]">{"Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."}</p>
                    </>
                </AnimationScroll>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="gap-8 px-5 lg:px-0 lg:gap-[25px] w-full lg:max-w-[380px] flex flex-col">
                        <AnimationScroll direction='right'>
                            <FormItem className="relative">
                                <FormControl>
                                    <Input placeholder="Name" {...form.register('username', { required: true, minLength: 15 })} />
                                </FormControl>
                                <ErrorElement condition={form.formState.errors.username?.type === 'required'} msg="Can't be empty" />
                                <FormMessage />
                            </FormItem>
                        </AnimationScroll>

                        <AnimationScroll direction='right'>
                            <FormItem className={formItemStyle}>
                                <FormControl>
                                    <Input placeholder="Email Address" {...form.register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                                </FormControl>
                                <ErrorElement condition={form.formState.errors.email?.type === 'required'} msg="Can't be empty" />
                                <ErrorElement condition={form.formState.errors.email?.type === 'pattern'} msg="Please use a valid email address" />
                                <FormMessage />
                            </FormItem>
                        </AnimationScroll>

                        <AnimationScroll direction='right'>
                            <FormItem className={formItemStyle}>
                                <FormControl>
                                    <Input placeholder="Phone" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </AnimationScroll>

                        <AnimationScroll direction='right'>
                            <FormItem className={formItemStyle}>
                                <FormControl>
                                    <Textarea placeholder="Your Message" {...form.register('message', { required: true, minLength: 15 })} />
                                </FormControl>
                                <ErrorElement condition={form.formState.errors.message?.type === 'required'} msg="Can't be empty" />
                                <FormMessage />
                            </FormItem>
                        </AnimationScroll>

                        <AnimationScroll direction='right'>
                            <Button className="w-fit h-fit self-center sm:self-end px-[47px] py-[18px]" type="submit" variant="secondary">Submit</Button>
                        </AnimationScroll>
                    </form>
                </Form>

            </section>
        </MaxWidthContainer >
    )
}

export default ContactForm