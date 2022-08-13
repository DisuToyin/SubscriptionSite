import React from "react";

export default function Home() {
  return (
    <div className="mt-[10%] ml-[10%] ">
      <h2 className="font-bold">Link to pages</h2>
      <a className="mb-[10%]" href="/signin">
        Sign in page
      </a>{" "}
      <br />
      <a className="mb-[10%]" href="/register">
        Register page
      </a>{" "}
      <br />
      <a className="mb-[10%]" href="/recover-password">
        Password recovery
      </a>{" "}
      <br />
      <a className="mb-[10%]" href="/reset-password">
        Password reset
      </a>
    </div>
  );
}
