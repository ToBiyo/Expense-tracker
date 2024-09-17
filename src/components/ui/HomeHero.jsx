import React from "react";

export default function HomeHero() {
  return (
    <div className="flex flex-col w-1/3 gap-6">
      <h1 className="text-5xl">
        Welcome to Expense<span className="text-accent">Master</span>{" "}
      </h1>
      <h3>
        your go-to app for seamless expense tracking and budgeting. Whether
        you're managing personal finances or keeping tabs on your business
        expenses, ExpenseMaster offers an intuitive platform to help you stay on
        top of your spending. Track your income, categorize your expenses, and
        set budgeting goals—all in one place. Simplify your financial life and
        take control of your money with ExpenseMaster, where every dollar
        counts.
      </h3>
    </div>
  );
}
