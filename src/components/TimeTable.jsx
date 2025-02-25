import React from "react";

const TimeTable = () => {
  const modules = [
    { id: 1, weeks: "1 - 4" },
    { id: 2, weeks: "5 - 8" },
    { id: 3, weeks: "9 - 12" },
    { id: 4, weeks: "13 - 16" },
    { id: 5, weeks: "13 - 16" },
    { id: 6, weeks: "16 - 21" },
  ];

  return (
    <div className="w-full px-3 md:px-[6vw]  py-6 bg-white  rounded-2xl space-y-6">
      <h1 className="text-xl md:text-3xl font-semibold text-center mb-16  text-primary">EDUSOUL COURSE TIMETABLE</h1>
      
      <div className="flex flex-wrap justify-between gap-y-16">
      {modules.map((module) => (
        <div key={module.id} className="border-l-4  border-blue-300 pl-4 py-4">
          <h3 className="text-2xl font-bold text-gray-800">MODULE {module.id}</h3>
          <p className="text-gray-600">Week {module.weeks}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Unit 1</li>
            <li>Unit 2</li>
            <li>Unit 3</li>
            <li>Unit 4</li>
            <li className="font-semibold">WORKSHOP / SEMINAR</li>
            <li className="font-semibold">ASSIGNMENTS</li>
            <li className="italic">References, reading materials, and resources</li>
          </ul>
        </div>
      ))}
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold text-gray-800">Grading Standard Policy</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Participation: <span className="font-semibold">10%</span></li>
          <li>Assignments: <span className="font-semibold">30%</span> - 2000 words</li>
          <li>Midterm Exam: <span className="font-semibold">20%</span> - 4000 words</li>
          <li>Final Project: <span className="font-semibold">40%</span> - 5000 words</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold text-gray-800">Module Grade</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Module Distinction: <span className="font-semibold">70% - 100%</span></li>
          <li>Module Pass with Merit: <span className="font-semibold">60% - 69%</span></li>
          <li>Module Pass: <span className="font-semibold">50% - 59%</span></li>
          <li>Module Retake</li>
          <li>Module Unit Retake</li>
        </ul>
      </div>
      
      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Grade</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Excellent</li>
          <li>Enhanced Award</li>
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;