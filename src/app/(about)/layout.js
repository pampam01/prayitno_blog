import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "my name is Prayitno",
    "nim: 8020220066",
    "student of UNAMA University",
    "19th Years old",
    "3 years experience in programming",
    "participate in the competition of BPJS healthkaton2.0 Capture the flag 📝",
    "received various awards after 19 years of studying 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
