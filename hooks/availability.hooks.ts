import httpClient from '@/config/http';
import queryClient from '@/config/queryClient';
import { Availability, Coach } from '@/models/availability';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

const CACHE_KEYS = {
  AVAILABILITY: 'COACHES',
};

export const useAvailabilities = () => {
  const { isLoading, data } = useQuery([CACHE_KEYS.AVAILABILITY], () => {
    return httpClient.get<Array<Availability>>('suyogshiftcare/jsontest/main/available.json')
      .then(res => res.data);
  });

  const refresh = () => {
    queryClient.invalidateQueries([CACHE_KEYS.AVAILABILITY]);
  };

  return {
    isLoading,
    availabilities: data,
    refresh,
  };
};

export const useCoaches = () => {
  const [searchText, setSearchText] = useState<string>();
  const { isLoading, availabilities, refresh } = useAvailabilities();

  const coaches = useMemo(() => {
    const groupedByCoaches: Record<string, Coach> = {};
    availabilities?.forEach(availability => {
      const coach = groupedByCoaches[availability.name];
      if (!coach) {
        groupedByCoaches[availability.name] = {
          name: availability.name,
          timezone: availability.timezone,
          availabilities: [],
        };
      }

      const coachAvailabilities = [...groupedByCoaches[availability.name].availabilities, availability];
      groupedByCoaches[availability.name] = {
        ...groupedByCoaches[availability.name],
        availabilities: coachAvailabilities,
      };
    });

    return Object.values(groupedByCoaches);
  }, [availabilities]);

  const filteredCoaches = useMemo(() => {
    if (!searchText) {
      return coaches;
    }

    return coaches?.filter(coach => coach.name.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText, coaches]);

  return {
    isLoading,
    coaches: filteredCoaches,
    refresh,
    searchText,
    setSearchText,
  };
};