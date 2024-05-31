import { AvailableSlot, Coach, DailySlots } from '@/models/availability';
import moment from 'moment-timezone';
import { useMemo, useState } from 'react';

export const useAvailableTimes = (coach: Coach) => {
  const [selectedDay, setSelectedDay] = useState<DailySlots>();

  const availableSlots = useMemo(() => {
    const dailySlots = coach.availabilities.map((availability: AvailableSlot) => {
      const { available_at, available_until } = availability;
      const startTime = moment(available_at.trim(), 'h:mmA');
      const endTime = moment(available_until.trim(), 'h:mmA');
  
      const slots = [];
      while (startTime.isBefore(endTime)) {
        slots.push({
          startTime: startTime.format('h:mm a'),
          endTime: startTime.add(30, 'minutes').format('h:mm a'),
        });
      }
  
      return {
        ...availability,
        slots,
      };
    });

    // Because there can be multiple available times for a single day
    const combinedDailySlots: Record<string, DailySlots> = {};
    for (let i = 0; i < dailySlots.length; i++) { 
      const dailySlot = dailySlots[i];

      if (combinedDailySlots[dailySlot.day_of_week]) { // Merge slots of the same day
        combinedDailySlots[dailySlot.day_of_week].slots = [
          ...combinedDailySlots[dailySlot.day_of_week].slots,
          ...dailySlot.slots,
        ];
      } else {
        combinedDailySlots[dailySlot.day_of_week] = dailySlot;
      }
    }
      
    return Object.values(combinedDailySlots);
  }, [coach]);

  return {
    selectedDay: selectedDay || availableSlots[0],
    setSelectedDay,
    availableSlots,
  };
};