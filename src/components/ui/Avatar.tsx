export default function Avatar({ label = "CE" }: { label?: string }) {
  return (
    <div className="h-6 w-6 rounded-full bg-gray-200 grid place-items-center text-[10px] font-semibold text-gray-700">
      {label}
    </div>
  );
}