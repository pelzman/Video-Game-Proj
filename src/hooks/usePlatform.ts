// import useData from "./useData";
import platforms from "../data/platforms";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}
// calling static data
const usePlatform = () => ({ data: platforms, isLoading: false, error: null });
//calling server
// const usePlatform = () => useData<PlatformProps>("/platforms/lists/parents");
export default usePlatform;
