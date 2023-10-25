"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import GoogleLogin from "../GoogleLogin";

const FormSchema = z
  .object({
    email: z.string().min(1, "Email is required!").email("Invalid email!"),
    username: z
      .string()
      .min(2, "Username is required!")
      .max(15, "Username must have than 15 characters!"),
    password: z
      .string()
      .min(1, "Password is required!")
      .min(8, "Password must have than 8 characters!"),
    confirmPassword: z.string().min(1, "Password confirmation is required!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // hata mesajını görmek istediğim yer
    message: "Password do not match!",
  });

const Signup = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Sign up
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-zinc-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-zinc-400">
        or
      </div>
      <GoogleLogin>Sign up with Google</GoogleLogin>
      <p className="text-center text-md text-gray-600 mt-5">
        Already have an account?
        <Link className="text-blue-500 hover:underline ml-1" href="/login">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default Signup;
