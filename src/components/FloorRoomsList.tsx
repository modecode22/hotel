import { useState } from "react";
import SearchBar from "./SearchBar";
import RoomCard from "./RoomCard";
import useRoomsStore from "../store";

const FloorRoomsList = () => {
    const floors = useRoomsStore(state => state.floors);

  const [filteredFloors, setFilteredFloors] = useState(floors);

  const handleSearch = (query: string, mode: "number" | "type") => {
    const filtered = floors
      .map((floor) => ({
        ...floor,
        rooms: floor.rooms.filter((room) =>
          mode === "number"
            ? room.number.toString().includes(query)
            : room.type.includes(query)
        ),
      }))
      .filter((floor) => floor.rooms.length > 0);

    setFilteredFloors(filtered);
  };

  return (
    <div className="">
      <SearchBar onSearch={handleSearch} />
      {filteredFloors.map((floor) => (
        <div key={floor.number} className="mb-8 p-2">
          <h2 className="text-2xl font-bold mb-4">الطابق {floor.number}</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
            {floor.rooms.map((room) => (
              <RoomCard key={room.number} room={room} floorNumber={floor.number} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloorRoomsList;
