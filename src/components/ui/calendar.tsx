"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { buttonVariants } from "./button";
import { cn } from "./cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
    style={{
      direction: "ltr",
    }}
    dir="ltr"
    lang="en"
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-background text-card-foreground rounded-xl", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-600 w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-200/50 [&:has([aria-selected])]:bg-neutral-200 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-foreground text-neutral-100 hover:bg-foreground hover:text-neutral-100 focus:bg-foreground focus:text-neutral-100",
        day_today: "bg-neutral-200 text-neutral-900",
        day_outside:
          "day-outside text-neutral-600 opacity-50 aria-selected:bg-neutral-200/50 aria-selected:text-neutral-600 aria-selected:opacity-30",
        day_disabled: "text-neutral-600 opacity-50",
        day_range_middle:
          "aria-selected:bg-neutral-200 aria-selected:text-neutral-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <IoChevronBack className="h-4 w-4" />,
        IconRight: () => <IoChevronForward className="h-4 w-4" />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
