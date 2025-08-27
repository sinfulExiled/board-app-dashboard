export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border rounded-2xl p-3 shadow-sm">{children}</div>;
}