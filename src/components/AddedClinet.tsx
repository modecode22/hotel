import React from "react";
import { Room } from "../types";
import { DateRangePicker } from "./RangePicker";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useRoomsStore from "../store";
import { DateRange } from "react-day-picker";

const repeatOptions = [
  { value: "none", label: "لا يتكرر" },
  { value: "weekly", label: "أسبوعياً" },
  { value: "every-two-weeks", label: "كل أسبوعين" },
  { value: "monthly", label: "شهرياً" },
];

function range(n: number) {
  return [...Array(n).keys()];
}

const AddedClient = ({
  room,
  floorNumber,
}: {
  room: Room;
  floorNumber: number;
}) => {
  const addBooking = useRoomsStore((state) => state.addBooking);
  const availableSeats = range(room.can_hold);
  const [clientName, setClientName] = React.useState("");
  const [numberOfPeople, setNumberOfPeople] = React.useState(1);
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [repeatOption, setRepeatOption] = React.useState("none");
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const handleSubmit = () => {
    const booking = {
      clientName,
      numberOfPeople,
      dateFrom: dateRange.from,
      dateTo: dateRange.to,
      repeatOption,
    };
    addBooking(floorNumber, room.number, booking);
    // Close dialog or reset form here
    setClientName("");
    setNumberOfPeople(1);
    setDateRange({ from: new Date(), to: new Date() });
    setRepeatOption("none");
    buttonRef?.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={buttonRef} size={"sm"}>
          حجز
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <header className="flex flex-col ">
          <h4 className="text-3xl font-semibold">اضف زبون جديد</h4>
          <p className="font-normal">اضف زبون جديد للحجز الخاص بك</p>
        </header>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="clientName">إسم الزبون</Label>
            <Input
              id="clientName"
              type="text"
              placeholder="إسم الزبون"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="numberOfPeople">عدد الأشخاص</Label>
            <Select
              value={numberOfPeople.toString()}
              onValueChange={(value) => setNumberOfPeople(parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="عدد الأشخاص" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {availableSeats.map((seat) => (
                    <SelectItem value={(seat + 1).toString()} key={seat}>
                      {seat + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dateRange">تاريخ الحجز</Label>
            <DateRangePicker
              onDateChange={(newDate) => {
                if (typeof newDate !== "undefined") {
                  setDateRange(newDate);
                }
              }}
              initialDateRange={dateRange}
              buttonClassName="my-custom-button-class"
              calendarClassName="my-custom-calendar-class"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repeatOption">التكرار</Label>
            <Select value={repeatOption} onValueChange={setRepeatOption}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="التكرار" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {repeatOptions.map((option) => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            حفظ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddedClient;
