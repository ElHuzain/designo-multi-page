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

const ContactForm = () => {

    const form = useForm();

    const onSubmit = () => {
        console.log("Submitted.");
    }

    return (
        <MaxWidthContainer bottomMargin={true} expands={true}>
            <section className="py-[72px] px-5 bg-primary text-white flex flex-col gap-12 sm:rounded-[15px]    ">
                <div className="text-center sm:text-left space-y-8">
                    <h1 className="text-[32px] sm:text-[48px] font-[400]">Contact Us</h1>
                    <p className="font-[300]">{"Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."}</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name" {...form.register('username', { required: true })} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>


                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email Address" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>


                        <FormItem>
                            <FormControl>
                                <Input placeholder="Phone" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>


                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Your Message" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                        <Button className="w-fit h-fit self-center px-[47px] py-[18px]" type="submit" variant="secondary">Submit</Button>
                    </form>
                </Form>

            </section>
        </MaxWidthContainer >
    )
}

export default ContactForm