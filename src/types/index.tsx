export type Room = {
    number: number;
    type: string;
    bookings: Record<string, unknown>;
    can_hold: number;
  };
  
 export type Floor = {
    number: number;
    rooms: Room[];
  };
  