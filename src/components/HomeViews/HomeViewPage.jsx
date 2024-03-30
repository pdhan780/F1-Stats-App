import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import HomeViewRaces from "./HomeViewRaces";

const HomeViewPage = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader />
      <div className="flex-grow flex justify-center p-8">
        <div className="flex px-8">
          <HomeViewRaces />
        </div>
        <div className="flex-1 border-8">
        </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
