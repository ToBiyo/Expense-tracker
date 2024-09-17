"use client";
import SignInCard from "./ui/SignInCard";
import SignUpCard from "./ui/SignUpCard";
import { useState } from "react";
export default function Auth() {
  const [singnIn, setSignIn] = useState(true);
  return (
    <div className="w-1/3 flex-col gap-5">
      {singnIn && <SignInCard onAuthChange={setSignIn} />}
      {!singnIn && <SignUpCard onAuthChange={setSignIn} />}
    </div>
  );
}
