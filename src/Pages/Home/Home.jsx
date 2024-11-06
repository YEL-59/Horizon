import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-10 mb-10">hi</h1>

      <div className="container h-[80vh] mx-auto bg-white shadow-lg p-5 rounded">
        <div className="overflow-x-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200" style={{ maxWidth: "calc(24rem * 4 + 2rem)" }}>
          <div className="flex  gap-2  " style={{ minWidth: "fit-content" }}>
            {/* Each section has a fixed width */}
            <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200 ssc">
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 4" content="Content for card 4." />
            </div>
            <div className="w-96 grid gap-y-4 bg-slate-200 p-2">
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 4" content="Content for card 4." />
            </div>
            <div className="w-96 grid gap-y-4 bg-slate-200 p-2">
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 4" content="Content for card 4." />
            </div>
            <div className="w-96 grid gap-y-4 bg-slate-200 p-2">
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 4" content="Content for card 4." />
            </div>
            <div className="w-96 grid gap-y-4 bg-slate-200 p-2">
              <Card title="Card Title 1" content="Content for card 1." />
              <Card title="Card Title 2" content="Content for card 2." />
              <Card title="Card Title 3" content="Content for card 3." />
              <Card title="Card Title 4" content="Content for card 4." />
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
