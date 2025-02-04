import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
    setShowDatePicker(false); // Hide the date picker after selection
  };

  const changeDate = (days) => {
    setSelectedDate((prev) => new Date(prev.setDate(prev.getDate() + days)));
  };

  return (
    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm w-fit relative">
      <Calendar className="h-5 w-5 text-gray-600 mr-2" />
      
      {/* Clickable Text for Date Display */}
      <span
        className="text-gray-800 font-medium cursor-pointer"
        onClick={() => setShowDatePicker(true)}
      >
        {format(selectedDate, "EEEE, d MMMM yyyy")}
      </span>

      {/* Visible Date Picker */}
      {showDatePicker && (
        <input
          type="date"
          className="absolute left-0 top-full mt-1 bg-white p-2 border rounded shadow"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={handleDateChange}
          autoFocus
          onBlur={() => setShowDatePicker(false)}
        />
      )}

      {/* Navigation Buttons */}
      <button onClick={() => changeDate(-1)} className="ml-4 p-1">
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button onClick={() => changeDate(1)} className="p-1">
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}
