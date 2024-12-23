import { ArrowLeft, ArrowRight, Pen, Save, X } from "lucide-react";
import { useState } from "react";

interface Day {
  date: number;
  day: string;
}

interface Audition {
  id: number;
  role: string;
  time: string;
  location: string;
}

export default function UpcomingAuditions() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [profile, setProfile] = useState({
    image: "/image.png",
    name: "Anjali Singh",
    roles: "Actor | Singer",
  });

  const [tempProfile, setTempProfile] = useState(profile);
  const [activeDate, setActiveDate] = useState<number>(6);
  const [visibleDays, setVisibleDays] = useState<number>(0);

  const days: Day[] = [
    { date: 3, day: "Sun" },
    { date: 4, day: "Mon" },
    { date: 5, day: "Tue" },
    { date: 6, day: "Wed" },
    { date: 7, day: "Thu" },
    { date: 8, day: "Fri" },
    { date: 9, day: "Sat" },
  ];

  const auditions: Record<number, Audition[]> = {
    3: [{ id: 1, role: "Lead Actor", time: "15:00-16:00", location: "Delhi" }],
    4: [{ id: 2, role: "Supporting Role", time: "16:00-17:00", location: "Pune" }],
    5: [{ id: 3, role: "Background Artist", time: "14:00-15:00", location: "Mumbai" }],
    6: [
      { id: 4, role: "Co-actor", time: "17:00-18:00", location: "Mumbai" },
      { id: 5, role: "Co-actor", time: "18:00-19:00", location: "Mumbai" },
    ],
    7: [{ id: 6, role: "Voice Actor", time: "11:00-12:00", location: "Chennai" }],
    8: [{ id: 7, role: "Lead Actor", time: "10:00-11:00", location: "Bangalore" }],
    9: [],
  };

  const handleDateClick = (date: number) => {
    setActiveDate(date);
  };

  const handleSlide = (direction: "left" | "right") => {
    if (direction === "left" && visibleDays > 0) {
      setVisibleDays((prev) => prev - 1);
    }
    if (direction === "right" && visibleDays < days.length - 5) {
      setVisibleDays((prev) => prev + 1);
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setTempProfile(profile); // Reset tempProfile when toggling
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  return (
    <div className="rounded-xl bg-white p-6 row-span-2 shadow-sm">
      {/* Profile Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-center gap-4 relative bg-white w-auto h-[250px]">
          {editMode ? (
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setTempProfile({
                  ...tempProfile,
                  image: e.target.files && e.target.files[0]
                    ? URL.createObjectURL(e.target.files[0])
                    : tempProfile.image,
                })
              }
              className="p-2 bg-gray-100 rounded-xl object-cover cursor-pointer -translate-x-2 "
            />
          ) : (
            <img
              src={profile.image}
              alt="Profile"
              className="w-[400px] h-[250px] rounded-xl object-cover"
            />
          )}
          <div className="absolute w-[250px] h-16 bg-white rounded-xl px-6 bottom-4">
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={tempProfile.name}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, name: e.target.value })
                  }
                  className="text-lg font-semibold flex items-center justify-between gap-2 w-full border rounded p-1"
                />
                <input
                  type="text"
                  value={tempProfile.roles}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, roles: e.target.value })
                  }
                  className="text-xs text-indigo-500 w-full border rounded p-1 mt-1"
                />
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold flex items-center justify-between gap-2">
                  {profile.name}
                  <button
                    onClick={handleEditToggle}
                    className="h-10 w-10 rounded-full bg-indigo-400 transform translate-y-3 flex items-center justify-center"
                  >
                    <Pen className="h-5 w-5 text-white" />
                  </button>
                </h3>
                <p className="text-xs text-indigo-500">{profile.roles}</p>
              </>
            )}
          </div>
          {editMode && (
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleSave}
              className="text-white bg-green-500 hover:bg-green-600 p-2 rounded-full"
            >
              <Save className="h-5 w-5" />
            </button>
            <button
              onClick={handleEditToggle}
              className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        </div>
        
      </div>

      {/* Rest of the Component (Dates and Auditions) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold font-Syne">Auditions</h2>
        <div className="flex gap-2">
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleSlide("left")}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleSlide("right")}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dates Section */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {days.slice(visibleDays, visibleDays + 5).map((day) => (
          <div
            key={day.date}
            onClick={() => handleDateClick(day.date)}
            className={`flex flex-col items-center rounded-xl p-3 cursor-pointer transition-colors ${
              activeDate === day.date
                ? "bg-indigo-600 text-white"
                : "text-gray-600 bg-gray-50"
            }`}
          >
            <span className="text-sm">{day.day}</span>
            <span className="text-lg font-semibold">{day.date}</span>
          </div>
        ))}
      </div>

      {/* Auditions Section */}
      <div className="space-y-3">
        {auditions[activeDate]?.length > 0 ? (
          auditions[activeDate].map((audition) => (
            <div
              key={audition.id}
              className="flex items-center gap-4 py-4 px-2 rounded-xl border hover:border-indigo-100 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Pen className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{audition.role}</h3>
                <p className="text-sm text-gray-500">
                  Location: {audition.location}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-teal-600">
                  {audition.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No auditions available for this date.</p>
        )}
      </div>
    </div>
  );
}
