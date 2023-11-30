"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { RemoveCookie } from "../action";
import { UserAuth } from "../context/AuthContext";
const LogOutBtn = () => {
  const { logOut } = UserAuth();

  const router = useRouter();

  const logout = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      RemoveCookie();
      router.refresh();
      //router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="block float-right">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogOutBtn;
