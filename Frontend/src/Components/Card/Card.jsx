import { SiDatabricks } from "react-icons/si";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import useCurrentDate from "../CustomHook/useCurrentDate/useCurrentDate";
import AttachmentComponent from "../AttachmentComponent/AttachmentComponent";
const Card = ({ c_name, name,image_src_c,image_src_p,content }) => {
  const currentDate = useCurrentDate();
  return (
    <div className="w-full max-w-md p-2 sm:p-8 md:p-3 lg:p-5 bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-x-2">
          <div className="">
            <img
              className="w-10 h-10 rounded-full border border-red-500 p-[3px]"
              src={image_src_c}
              alt="Nimage"
            />
          </div>
          <div className="">
            <p className="text-xs font-medium text-gray-900 truncate ">
             {c_name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="">
            <img
              className="w-10 h-10 rounded-full border border-red-500 p-[3px]"
              src={image_src_p}
              alt="image"
            />
          </div>
          <div className="">
            <p className="text-xs font-medium text-gray-900 truncate ">
              {name}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          <div className="">
            <SiDatabricks />
          </div>
          <div className="">
            <p className="text-xs font-medium text-gray-900 truncate max-w-[20ch]">
            {content}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 bg-gray-100 rounded px-2">
          <div className="">
            <BsFillClipboard2DataFill color="gray" />
          </div>
          <div className="text-gray-500 text-sm font-medium">1/2</div>
        </div>
      </div>

      <div className="flex justify-between gap-3 mt-5">
        <div className="">
          <img
            className="w-7 h-7 rounded-full border border-red-500 p-[3px]"
            src={image_src_c}
          />
        </div>
        <div className="">
          <img
            className="w-7 h-7 rounded-full border border-red-500 p-[3px]"
            src={image_src_p}
          />
        </div>
        <div className="w-7 h-7 bg-gray-200 rounded-full text-gray-500 text-sm flex items-center justify-center font-medium">
          12+
        </div>
        <div className="flex items-center gap-x-1  rounded ">
          <div className="">
            <FaComments color="gray" size={'15px'} />
          </div>
          <div className="text-gray-500 text-sm font-medium">15</div>
        </div>
        <div className="flex items-center gap-x-1 rounded ">
          <div className="">
            <AttachmentComponent/>
          </div>
         
        </div>
        <div className="flex items-center gap-x-1  ">
          <div className="">
            <FaCalendarDays color="gray" size={'12px'} />
          </div>
          <div className="text-gray-500 text-xs font-medium "><p>{currentDate}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
