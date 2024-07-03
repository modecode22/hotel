import * as React from "react"
import { LuCalendar } from "react-icons/lu"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { Button } from "./ui/button"
import { cn } from "./ui/cn"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange?: (date: DateRange | undefined) => void;
  initialDateRange?: DateRange;
  buttonClassName?: string;
  calendarClassName?: string;
}

export function DateRangePicker({
  className,
  onDateChange,
  initialDateRange,
  buttonClassName,
  calendarClassName,
  ...props
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    initialDateRange || {
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    }
  )

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate)
    if (onDateChange) {
      onDateChange(newDate)
    }
  }

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-right font-normal",
              !date && "text-muted-foreground",
              buttonClassName
            )}
          >
            <LuCalendar className="ml-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-auto p-0", calendarClassName)} align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}