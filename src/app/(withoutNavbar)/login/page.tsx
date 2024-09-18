"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import React Hot Toast

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    username: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      // Show error toast for invalid credentials
      toast.error("Invalid username or password");
      return;
    }

    const data = await response.json();
    toast.success("Logged in successfully!"); // Success toast
    router.push("/");
    return data;
  };

  return (
    <>
      {/* Toaster to display toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex h-[100vh] items-center justify-center bg-black">
        <div className="w-3/4 md:max-w-md md:w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black ">
          <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
            Welcome To BlogApp
          </h2>
          <p className="text-neutral-300 text-md max-w-sm mt-2 dark:text-neutral-300">
            Don't have an account?...<Link className="text-blue-500" href="/register">SignUp</Link>
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="username" className="text-neutral-300">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className="text-neutral-300">Password</Label>
              <Input
                id="password"
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
                placeholder="••••••••"
                type="password"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login &rarr;
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
