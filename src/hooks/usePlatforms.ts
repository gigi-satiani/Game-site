import { useQuery } from "@tanstack/react-query";
import apiclient from "../services/api-axios";
import { FetchResponse } from "../services/api-axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiclient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours

    // initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
