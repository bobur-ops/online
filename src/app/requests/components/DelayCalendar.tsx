import React, { useState } from "react";
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfWeek,
  subWeeks,
} from "date-fns";
import { ru } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

const dayHours = [
  [
    {
      id: "1",
      value: "10:00",
      booked: false,
    },
    {
      id: "2",
      value: "10:40",
      booked: false,
    },
    {
      id: "3",
      value: "11:20",
      booked: false,
    },
    {
      id: "4",
      value: "12:00",
      booked: true,
    },
    {
      id: "5",
      value: "12:40",
      booked: false,
    },
    {
      id: "6",
      value: "13:20",
      booked: false,
    },
    {
      id: "7",
      value: "14:00",
      booked: false,
    },
    {
      id: "8",
      value: "15:20",
      booked: false,
    },
    {
      id: "9",
      value: "16:00",
      booked: false,
    },
    {
      id: "10",
      value: "16:40",
      booked: false,
    },
    {
      id: "11",
      value: "17:20",
      booked: false,
    },
  ],
  [
    {
      id: "12",
      value: "10:00",
      booked: false,
    },
    {
      id: "13",
      value: "10:40",
      booked: false,
    },
    {
      id: "14",
      value: "11:20",
      booked: true,
    },
    {
      id: "15",
      value: "12:00",
      booked: false,
    },
    {
      id: "16",
      value: "12:40",
      booked: false,
    },
    {
      id: "17",
      value: "13:20",
      booked: false,
    },
    {
      id: "18",
      value: "14:00",
      booked: false,
    },
    {
      id: "19",
      value: "15:20",
      booked: true,
    },
    {
      id: "20",
      value: "16:00",
      booked: false,
    },
    {
      id: "21",
      value: "16:40",
      booked: false,
    },
    {
      id: "22",
      value: "17:20",
      booked: false,
    },
  ],
  [
    {
      id: "23",
      value: "10:00",
      booked: false,
    },
    {
      id: "24",
      value: "10:40",
      booked: false,
    },
    {
      id: "25",
      value: "11:20",
      booked: false,
    },
    {
      id: "26",
      value: "12:00",
      booked: false,
    },
    {
      id: "27",
      value: "12:40",
      booked: false,
    },
    {
      id: "28",
      value: "13:20",
      booked: false,
    },
    {
      id: "29",
      value: "14:00",
      booked: false,
    },
    {
      id: "30",
      value: "15:20",
      booked: false,
    },
    {
      id: "31",
      value: "16:00",
      booked: false,
    },
    {
      id: "32",
      value: "16:40",
      booked: false,
    },
    {
      id: "33",
      value: "17:20",
      booked: false,
    },
  ],
  [
    {
      id: "34",
      value: "10:00",
      booked: false,
    },
    {
      id: "35",
      value: "10:40",
      booked: false,
    },
    {
      id: "36",
      value: "11:20",
      booked: false,
    },
    {
      id: "37",
      value: "12:00",
      booked: false,
    },
    {
      id: "38",
      value: "12:40",
      booked: false,
    },
    {
      id: "39",
      value: "13:20",
      booked: true,
    },
    {
      id: "40",
      value: "14:00",
      booked: false,
    },
    {
      id: "41",
      value: "15:20",
      booked: false,
    },
    {
      id: "42",
      value: "16:00",
      booked: true,
    },
    {
      id: "43",
      value: "16:40",
      booked: false,
    },
    {
      id: "44",
      value: "17:20",
      booked: false,
    },
  ],
  [
    {
      id: "45",
      value: "10:00",
      booked: false,
    },
    {
      id: "46",
      value: "10:40",
      booked: false,
    },
    {
      id: "47",
      value: "11:20",
      booked: false,
    },
    {
      id: "48",
      value: "12:00",
      booked: true,
    },
    {
      id: "49",
      value: "12:40",
      booked: false,
      isCurrent: true,
    },
    {
      id: "50",
      value: "13:20",
      booked: false,
    },
    {
      id: "51",
      value: "14:00",
      booked: false,
    },
    {
      id: "52",
      value: "15:20",
      booked: true,
    },
    {
      id: "53",
      value: "16:00",
      booked: false,
    },
    {
      id: "54",
      value: "16:40",
      booked: false,
    },
    {
      id: "55",
      value: "17:20",
      booked: false,
    },
  ],
];

const DelayCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const goToPreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

  const daysOfWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer" onClick={goToPreviousWeek}>
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8089 2.04378C11.2676 1.70526 11.2676 1.15642 10.8089 0.817853C10.3504 0.479336 9.60679 0.479336 9.14813 0.817853L0.844118 6.94736C0.844078 6.94739 0.844037 6.94742 0.843997 6.94744C0.385334 7.28596 0.385334 7.83486 0.843997 8.17337C0.844038 8.1734 0.844079 8.17343 0.84412 8.17346L9.14813 14.3029C9.60679 14.6415 10.3504 14.6415 10.8089 14.3029C11.2676 13.9644 11.2676 13.4155 10.8089 13.077C7.09601 10.3364 7.09601 4.78443 10.8089 2.04378Z"
              fill="#0C77F8"
            />
          </svg>
        </div>
        <div className="capitalize text-xl font-medium">
          {format(currentDate, "MMMM yyyy", { locale: ru })}
        </div>
        <div className="cursor-pointer" onClick={goToNextWeek}>
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.843987 2.04378C0.385338 1.70526 0.385338 1.15642 0.843987 0.817853C1.30265 0.479336 2.04624 0.479336 2.5048 0.817853L10.809 6.94744C11.2677 7.28596 11.2677 7.83486 10.809 8.17337L2.5048 14.3029C2.04624 14.6415 1.30265 14.6415 0.843987 14.3029C0.385338 13.9644 0.385338 13.4155 0.843987 13.077C4.55694 10.3364 4.55694 4.78441 0.843987 2.04378Z"
              fill="#0C77F8"
            />
          </svg>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-7 border-b-[1.5px] border-[#aaa] py-1">
          {daysOfWeek.map((d, index) => (
            <div
              key={index}
              className="capitalize flex flex-col justify-center items-center text-base text-[#aaa]"
            >
              <div>{format(d, "EEE", { locale: ru })}</div>
              <div>{format(d, "dd", { locale: ru })}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {dayHours.map((day, idx) => (
            <div key={idx} className="space-y-2.5">
              {day.map((hour, h_idx) => (
                <div
                  key={h_idx}
                  className={twMerge(
                    "text-center text-sm lg:text-base font-semibold cursor-pointer transition-all",
                    hour.booked && "opacity-20",
                    hour.id === selectedDate &&
                      "bg-primary rounded-[5px] text-white w-fit mx-auto min-w-[45px] lg:min-w-[73px]"
                  )}
                  onClick={() => setSelectedDate(hour.id)}
                >
                  {hour.value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DelayCalendar;
