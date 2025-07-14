import Image from "next/image";

export default function Home() {
  const w_logo: number = 180
  const h_logo: number = 38

  return (
    <main>
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]flex flex-col gap-8 bg-[url('/background-ayurveda.png')] bg-cover bg-no-repeat w-[100%] h-screen">
        <Image
          // className="dark:invert"
          src="/logo-clemente.png"
          alt="Next.js logo"
          width={w_logo}
          height={h_logo}
          priority
        />
      </div>
    </main>
  );
}
