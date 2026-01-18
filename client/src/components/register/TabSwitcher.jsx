/**
 * Tab switcher component for registration forms
 */
const TabSwitcher = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 px-2">
      <div className="bg-white rounded-full shadow p-1 flex w-full sm:w-auto">
        <button
          onClick={() => onTabChange("intern")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition whitespace-nowrap
            ${activeTab === "intern"
              ? "bg-[#9062FF] text-white"
              : "text-gray-600 hover:text-[#9062FF]"}`}
        >
          <span className="hidden sm:inline">Internship </span>Registration
        </button>
        <button
          onClick={() => onTabChange("project")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition whitespace-nowrap
            ${activeTab === "project"
              ? "bg-[#9062FF] text-white"
              : "text-gray-600 hover:text-[#9062FF]"}`}
        >
          <span className="hidden sm:inline">Project </span>Registration
        </button>
      </div>
    </div>
  );
};

export default TabSwitcher;
