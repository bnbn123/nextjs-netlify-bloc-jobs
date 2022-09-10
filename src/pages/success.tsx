import Layout from "components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SuccessPerson from "../../public/images/success-person.svg";

export default function Success() {
  const router = useRouter();
  setTimeout(() => {
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }, 3000);
  return (
    <Layout>
      <section className="success-container w-full flex max-w-3xl mx-auto items-center">
        <div>
          <SuccessPerson />
        </div>
        <div>
          <h1>
            Success! Thank you for submitting to us.
            <span className="fancy">.</span>
            <span className="fancy-1">.</span>
          </h1>
          <h2>
            You'll be <strong>redirected</strong> soon, or click here.
          </h2>
        </div>
      </section>
    </Layout>
  );
}
