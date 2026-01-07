export default function IconInPopup({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 ">
      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
        <Icon size={18} className="text-indigo-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}
