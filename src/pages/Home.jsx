import React from "react";

export default function Home() {
  return (
    <div className="mt-[10%] ml-[10%] ">
      <a className="mb-[10%]" href="/signin">
        Sign in page
      </a>{" "}
      <br />
      <a className="mb-[10%]" href="/register">
        Register page
      </a>{" "}
      <br />
      <a className="mb-[10%]" href="/password-reset">
        Password reset
      </a>
    </div>
  );
}
