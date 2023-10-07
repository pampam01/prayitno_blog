import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "Tentang Saya",
  description: `ini deskripsi tentang diri saya.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      punya ide projek? Hubungi saya 📞  <Link href="/contact"  className="!underline underline-offset-2"   >disini</Link> dan buat projek tersebut menjadi nyata.
      </h2>
    </>
  );
}
