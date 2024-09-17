import Link from "next/link";
export default function HomeNav() {
  return (
    <div className="flex w-3/4 p-4 justify-between items-center m-auto">
      <Link href={"/"}>
        <h2 className="text-3xl cursor-pointer">
          Expense<span className="text-accent">Master</span>
        </h2>
      </Link>
    </div>
  );
}
