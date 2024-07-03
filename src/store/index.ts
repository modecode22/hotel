import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Floor } from '../types';
import { floors } from '../utils/floorData';

interface Booking {
  clientName: string;
  numberOfPeople: number;
  dateFrom?: Date;
  dateTo?: Date;
  repeatOption: string;
}



interface RoomsState {
  floors: Floor[];
  addBooking: (floorNumber: number, roomNumber: number, booking: Booking) => void;
}

const useRoomsStore = create<RoomsState>()(
  persist(
    (set) => ({
      floors: floors,
      addBooking: (floorNumber, roomNumber, booking) =>
        set((state) => {
            console.log(state);
            
          const newFloors = state.floors.map((floor) => {
            if (floor.number === floorNumber) {
              const newRooms = floor.rooms.map((room) => {
                if (room.number === roomNumber) {
                  const bookingId = Date.now().toString();
                  return {
                    ...room,
                    bookings: {
                      ...room.bookings,
                      [bookingId]: booking,
                    },
                  };
                }
                return room;
              });
              return { ...floor, rooms: newRooms };
            }
            return floor;
          });
          return { floors: newFloors };
        }),
    }),
    {
      name: 'rooms-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useRoomsStore;