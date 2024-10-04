"use client";

import useAuthStore from "@/utils/supabase/auth-store";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { login, signup } from "./actions";

export default function LoginPage() {
  const { setUser } = useAuthStore();

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginFunction = await login(formData);
    if (loginFunction) {
      setUser(loginFunction);
      router.push("/");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signup(formData); // Call your signup function with form data
  };

  return (
    <Fieldset className="w-full">
      <Legend className={"font-lora font-bold text-center text-lg text-text"}>
        Log in to Bloom
      </Legend>
      <form method="post" onSubmit={handleLogin}>
        <Field className="relative w-4/5 sm:w-2/3 max-w-lg md:w-100 mx-auto group/email mb-3">
          <Label className={"font-lora text-text"}>Email:</Label>

          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className={clsx(
              "block w-full rounded-md bg-background ring-1 ring-outline py-2 px-5 text-text placeholder:text-outline font-lora",
              "focus:outline-none lg:hover:ring-2",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>

        <Field className="relative w-4/5 sm:w-2/3 max-w-lg mx-auto group/password">
          <Label className={"font-lora text-text"}>Password:</Label>

          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            className={clsx(
              "block w-full rounded-md bg-background ring-1 ring-outline py-2 px-5 text-text placeholder:text-outline font-lora",
              "focus:outline-none lg:hover:ring-2 data-[active]:bg-none",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>

        <div className="flex justify-center">
          <Button
            type="submit" // Use type submit for form submission
            className="rounded-full w-4/5 sm:w-2/3 max-w-lg bg-primary py-2 px-4 text-background hover:bg-secondary active:bg-accent mt-5"
          >
            Log in
          </Button>
        </div>
      </form>

      <form method="post" onSubmit={handleSignup} className="mt-5 text-center">
        <Button type="submit" className={"text-text"}>
          Sign up
        </Button>
      </form>
    </Fieldset>
  );
}
