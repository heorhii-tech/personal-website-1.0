import { Skeleton } from "@/components/ui/sceleton";

const MainImageSkeleton = () => {
  return (
    <Skeleton className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full bg-zinc-200 " />
  );
};
export default MainImageSkeleton;
