import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Samples = () => {
  return (
    <div>
      <Skeleton />
      <Skeleton width={40} height={40} circle />

      <SkeletonTheme baseColor="grey" highlightColor="#444">
        <Skeleton width={210} height={118} />
      </SkeletonTheme>
    </div>
  );
};
