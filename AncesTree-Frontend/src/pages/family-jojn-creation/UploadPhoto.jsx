import React, { useState } from "react";
import Heading from "../../components/Heading";
import SubmitButton from "../../components/SubmitButton";
import ReactImageUploading from "react-images-uploading";

export default function UploadPhoto(props) {
  const [images, setImages] = React.useState([]);
  const [uploaded, setuploaded] = useState(false);
  const onChange = (imageList, addUpdateIndex) => {
    setuploaded(true);
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  function onRemove() {
    setuploaded(false);
    setImages([])
    
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Heading head={"Welcome " + props.name} />
      <div className="ml-32">
        <div className="flex justify-start items-center ml-6 mt-3 mb-4">
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed bg-[#FFEEB2]"></div>
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed bg-[#FFEEB2]"></div>
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed bg-[#FFEEB2]"></div>
        </div>
        <div className="text-[17px] font-semibold ml-6  font-IBM-Plex-Mono ">
          Create a Family
        </div>
        <div className="ml-[22px] mt-[20px]">
          <div className="w-[425px] text-[14px] font-IBM-Plex-Mono">
            {props.head}
          </div>
          <div>
            <ReactImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={1}
              dataURLKey="data_url"
              acceptType={["jpg"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="w-[375px] h-[185px]">
                  <div
                    className={
                      uploaded
                        ? "-z-2 hidden w-[375px] absolute h-[185px]"
                        : "z-1 w-[375px] absolute h-[185px] border-[#6A6A6A] border-[1px] border-dashed rounded-[18px] flex flex-col justify-center items-center"
                    }
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5 1V30V1ZM30 15.5H1H30Z" fill="#6A6A6A" />
                      <path
                        d="M15.5 1V30M30 15.5H1"
                        stroke="#6A6A6A"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="font-IBM-Plex-Mono text-[14px] text-[#6A6A6A] mt-3">
                      Upload Picture
                    </div>
                  </div>
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className={
                        uploaded
                          ? "z-1 absolute w-[375px] h-[185px]   overflow-hidden border-[#6A6A6A] border-[1px] border-dashed rounded-[18px] flex flex-col justify-center items-center"
                          : " -z-2 absolute w-[375px] h-[185px] hidden"
                      }
                    >
                      <img src={image.data_url} />
                    </div>
                  ))}
                </div>
              )}
            </ReactImageUploading>
          </div>
        </div>
          <div className={uploaded?"block":"hidden"}>

        <SubmitButton action="Remove" func={onRemove}/>
          </div>
        <SubmitButton action="Continue" />
      </div>
    </div>
  );
}
