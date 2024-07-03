import { Card } from "./ui/card";
import { Room } from "../types";
import { Badge } from "./ui/badge";
import { formatDateDDMMYYYY } from "../lib/utils";
import { Button } from "./ui/button";
import AddedClinet from "./AddedClinet";

const RoomCard = ({ room, floorNumber }: { room: Room, floorNumber: number }) => {
  return (
    <Card className="w-full  p-4">
      <section className="flex  w-full flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {"الغرقة "}
            <Badge variant={"default"}>{room.number}</Badge>
          </h2>
          <section className="flex justify-between items-center">
            <Badge
              variant={"secondary"}
              className="text-xs w-fit font-normal py-0"
            >
              {room.type}
            </Badge>
            <p className="text-sm">
              الحجز القادم{" "}
              <Badge
                variant={"outline"}
                className="text-xs w-fit font-normal py-0"
              >
                {formatDateDDMMYYYY(new Date())}
              </Badge>
            </p>
          </section>
          <p className="text-sm p-2 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl shadow-inner">
            ملاحظة عن الغرفة التي نحن فيها الآن هذه الملاحظة مكتوبة فقط لملأ
            المكان
          </p>
        </div>
        <section className="flex  p-2 gap-2 flex-col">
          <Button variant={"secondary"} size={"sm"}>
            ملاحظة
          </Button>
          <AddedClinet floorNumber={floorNumber} room={room} />
        </section>
      </section>
    </Card>
  );
};

export default RoomCard;
