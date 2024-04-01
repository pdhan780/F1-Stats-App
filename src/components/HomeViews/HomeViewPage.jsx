import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import HomeViewRaces from "./HomeViewRaces";
import HomeViewResultsPage from "./HomeViewResultsPage";

const HomeViewPage = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader />
      <div className="flex-grow flex justify-center p-4 space-x-8">
        <div className="flex">
          <HomeViewRaces />
        </div>
        <div className="flex-1">
          <HomeViewResultsPage />
        </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
