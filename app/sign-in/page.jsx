import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignInBtn from "../components/SignInBtn";
const page = () => {
  const checkAuth = cookies();
  if (checkAuth.get("auth")) {
    redirect("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInBtn />
    </main>
  );
};

export default page;
