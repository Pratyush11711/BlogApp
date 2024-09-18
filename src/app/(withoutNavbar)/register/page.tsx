"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Use fetch to make a POST request
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Send user data as JSON
      });

      // Handle the response
      if (!response.ok) {
        const errorMessage = await response.json();
        toast.error(errorMessage.message || "Failed to register");
        return;
      }

      // Show success message
      toast.success("User registered successfully!");

      // If the request is successful, navigate to the login page
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <>
      <div className="flex h-[100vh] items-center justify-center bg-black">
        <div className="w-3/4 md:max-w-md md:w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
            Welcome To BlogApp
          </h2>
          <p className="text-neutral-300 text-md max-w-sm mt-2 dark:text-neutral-300">
            Already have an account?...
            <Link className="text-blue-500" href="/login">
              Login
            </Link>
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-neutral-300">
                  Username
                </Label>
                <Input
                  id="firstname"
                  placeholder="Enter your username"
                  type="text"
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className="text-neutral-300">
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className="text-neutral-300">
                Password
              </Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
