export default function Comments({ name, text, time, avatar }) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0">
      <img
        src={avatar || "https://i.pravatar.cc/40"}
        alt={name}
        className="w-9 h-9 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>

        <p className="text-sm text-gray-600 mt-1">{text}</p>
      </div>
    </div>
  );
}
