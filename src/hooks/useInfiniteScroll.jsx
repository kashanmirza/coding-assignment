import { useEffect } from "react";

const useInfiniteScroll = (loadMore, isLoading) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollHeight - scrollTop <= clientHeight + 50 && !isLoading) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore, isLoading]);
};

export default useInfiniteScroll;
