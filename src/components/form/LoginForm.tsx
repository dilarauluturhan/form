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

const FormSchema = z.object({
  email: z.string().min(1, "Email is required!").email("Invalid email!"),
  password: z
    .string()
    .min(1, "Password is required!")
    .min(8, "Password must have than 8 characters!"),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
        </div>
        <Button className="w-full mt-6" type="submit">
          Login
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-zinc-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-zinc-400">
        or
      </div>
      <p className="text-center text-md text-gray-600 mt-2">
        If you don&apos;t have an account, please.
        <Link className="text-blue-500 hover:underline ml-1" href="/signup">
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default LoginForm;
