import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Nuance Lives Here",
    "Law Is For The People",
    "Read Before You React",
    "Know The Truth",
    "Facts First",
    "Law Is Language",
    "To Do What Is Right, Not What Is Easy",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
