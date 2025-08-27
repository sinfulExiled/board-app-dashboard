export default function Badge({ children, color = "gray" }: { children: React.ReactNode; color?: "gray" | "yellow" | "green" | "red" }) {
  const map: Record<string, string> = {
    gray: "bg-gray-100 text-gray-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${map[color]}`}>{children}</span>;
}