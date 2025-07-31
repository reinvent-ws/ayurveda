import Image from "next/image";
import { Poppins } from "next/font/google";
import './globals.css';

const PoppinsRegular = Poppins({
  variable: "--font-poppins-regular",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export default function Home() {
  const w_logo: number = 180
  const h_logo: number = 38

  return (
    <main>
      <div className="flex justify-between items-stretch relative bg-[url('./../assets/images/background-ayurveda.png')] bg-cover bg-no-repeat w-full h-screen">
        <Image
          className="absolute right-10 top-10"
          src="/logo-clemente.png"
          alt="Next.js logo"
          width={w_logo}
          height={h_logo}
          priority
        />
        <div className="flex-1 flex justify-end flex-col bottom-0 m-20">
          <h1 className="mytext relative text-4xl text-[#eeecdf] text-[128px] font-bold tracking-widest leading-[120px]">Essencial para a <br/> vida.</h1>
          <div className='relative flex justify-between mt-10 w-full'>
            <p className={`${PoppinsRegular.variable} antialiased text-[#eeecdf]`}>Mente e corpo saudáveis para você viver com confiança</p>
            <button className="rounded-md bg-[#50fe83] text-[#0024b0] text-[28px] font-semibold px-4 py-2">Saiba mais</button>
          </div>
        </div>
      </div>
    </main>
  );
}
