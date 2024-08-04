import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text">
        <h1 className="text-5xl text-transparent ">welcome to b-stack</h1>

        <Link href="/auth" className="mt-8">
          Go To Auth Page
        </Link>
      </div>
    </main>
  );
}
