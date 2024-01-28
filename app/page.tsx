import Link from "next/link";
export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <h1 className="text-[24px] text-white font-bold my-10">
        Quizi App - (Succession trivia quiz)
      </h1>
      <Link className="block text-gray-50 border p-3" href="/quiz">
        Take Quiz
      </Link>
    </main>
  );
}
