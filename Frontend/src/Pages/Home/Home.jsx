import Card from "../../Components/Card/Card";

const Home = () => {
  const image_src =
    "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?ga=GA1.1.301078047.1692174577&semt=ais_hybrid";
  const image_src_p =
    "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg";
  return (
    <>
      <div className=" ">
        <h1 className="text-center  mb-10"> Task</h1>

        <div className="container h-[80vh] mx-auto bg-white shadow-lg p-5 rounded">
          <div
            className="overflow-x-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            style={{ maxWidth: "calc(24rem * 4 + 2rem)" }}
          >
            <div className="flex  gap-2  " style={{ minWidth: "fit-content" }}>
              {/* Each section has a fixed width */}
              <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="">
                      <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
                        Incomplete
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 bg-gray-300 rounded px-2">
                    <div className="text-gray-500 text-sm font-medium">0</div>
                  </div>
                </div>
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />

                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
              </div>
              <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="">
                      <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
                        To Do
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 bg-gray-300 rounded px-2">
                    <div className="text-gray-500 text-sm font-medium">0</div>
                  </div>
                </div>
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
              </div>
              <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="">
                      <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
                        Doing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 bg-gray-300 rounded px-2">
                    <div className="text-gray-500 text-sm font-medium">0</div>
                  </div>
                </div>
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
              </div>
              <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="">
                      <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
                        Under Review
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 bg-gray-300 rounded px-2">
                    <div className="text-gray-500 text-sm font-medium">0</div>
                  </div>
                </div>
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
              </div>
              <div className="w-[20rem] lg:w-96 grid gap-y-4 bg-slate-100 p-2 h-[70vh] overflow-y-scroll scrollbar scrollbar-thumb-blue-700  scrollbar-track-sky-200">
              <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          
          <div className="">
            <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
            Complete
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 bg-gray-300 rounded px-2">
         
          <div className="text-gray-500 text-sm font-medium">0</div>
        </div>
      </div>
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />{" "}
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
                <Card
                  name="Sadik Istiak"
                  c_name="Client Name"
                  image_src_c={image_src}
                  image_src_p={image_src_p}
                  content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium at, exercitationem a modi velit non fugiat, et id,
              natus quas? Quia esse qui architecto ullam illum."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
