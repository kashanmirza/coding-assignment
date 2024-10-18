import Movies from "./Movies";
import Starred from "./Starred";
import WatchLater from "./WatchLater";
import NotFound from "./NotFound";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
