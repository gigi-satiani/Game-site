import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiclient from "../services/api-axios";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiclient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: genres.length, results: genres },
  });

export default useGenres;
