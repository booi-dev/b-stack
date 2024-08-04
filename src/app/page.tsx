import Link from "next/link";

const STACK_LIST = [
  {
    id: "sdfsf",
    name: "Next JS",
    role: "Full Stack Framework",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation for React applications.",
  },
  {
    id: "sfsdfdsf",
    name: "Next Auth",
    role: "Authentication",
    description:
      "NextAuth.js is a complete open source authentication solution for Next.js applications.",
  },
  {
    id: "hsghdf",
    name: "Drizzle",
    role: "ORM",
    description:
      "Drizzle is a TypeScript ORM that enables you to interact with your database using TypeScript.",
  },
  {
    id: "587sdfsf",
    name: "Tailwind CSS",
    role: "Styling",
    description:
      "Tailwind CSS is a utility-first CSS framework that enables you to build custom designs without writing customCSS.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text">
        <h1 className="text-5xl text-transparent ">welcome to b-stack</h1>

        <Link href="/auth" className="mt-8">
          Go To Auth Page
        </Link>

        <div className="mt-4">
          <h2 className="text-2xl text-teal-500">Stacks</h2>
          {STACK_LIST.map((stack) => (
            <div key={stack.id} className="flex items-center gap-4">
              <div className="font-bold">{stack.role}</div>{" "}
              <h3>{stack.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
