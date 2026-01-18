/**
 * Reusable Input component
 */
const Input = ({ label, type = "text", placeholder, value, onChange, error, required }) => {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#9062FF] transition ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
