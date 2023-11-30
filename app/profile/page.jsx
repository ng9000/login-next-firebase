"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { PaddleLoader } from "@/PaddleLoader";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
      // if (!user) {
      //   router.push("/");
      // }
    };
    checkAuthentication();
  }, [user]);

  // if (!loading) {
  // }
  // const handleOpen = () => {
  //   Paddle.Checkout.open()
  // }
  return (
    <div className="p-4">
      <PaddleLoader />
      <button
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        onClick={() => {
          Paddle.Checkout.open({
            vendor: 15663,
          });
        }}
      >
        Buy
      </button>
      {loading ? (
        <Spinner />
      ) : user ? (
        <p>
          Welcome, {user.displayName} - you are logged in to the profile page -
          a protected route.
        </p>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default page;
