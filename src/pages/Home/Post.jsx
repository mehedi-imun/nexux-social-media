import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import {
  MdOutlineVideoLibrary,
  MdArticle,
  MdOutlinePhoto,
} from "react-icons/md";
const Post = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState(null);
    const handleCaption = (e) => {
        setCaption(e.target.value);
    }
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setImage(imageUrl);
    };
    const handleSubmit = () => {
        console.log(caption)
        console.log(image);
    }
  return (
    <div className=" ">
      <div className="w-full flex px-4 gap-4 mt-6 ">
        <div className="avatar ">
          <div className="w-16 rounded-full border border-accent ">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
        </div>
        {/* open post modal */}
        <label
          htmlFor="my-modal"
          className="input w-full rounded-lg mt-2 cursor-text"
        >
          <p className="mt-2"> What's on your mind </p>
        </label>

        {/* modal for post */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal backdrop-blur-sm bg-black/40">
          <div className="modal-box absolute top-16 bg-accent ">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg  ">Create Post</h3>
              <label
                htmlFor="my-modal"
                className="btn btn-sm btn-circle btn-primary"
              >
                X
              </label>
            </div>
            <div className="avatar ">
              <div className="w-16 rounded-full border border-accent ">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
              <p className="mt-3 ml-3">public</p>
            </div>
            <div className="mt-3">
              <textarea
                onChange={handleCaption}
                className="textarea w-full"
                placeholder="What's on your mind?"
              ></textarea>
              <img src={image} alt="" />
              <input
                type="file"
                className="file-input file-input-ghost w-full max-w-xs"
                name=""
                id=""
                onChange={handleFileSelect}
              />
            </div>
            <div onClick={() => handleSubmit()} className="modal-action">
              submit
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className=" btn btn-ghost">
          <label htmlFor="my-modal">
            <BiImageAdd className="cursor-pointer"></BiImageAdd>
          </label>
        </div>
        <div className="btn btn-ghost">
          <MdOutlineVideoLibrary></MdOutlineVideoLibrary>
        </div>
        <div className="btn btn-ghost">
          <MdArticle></MdArticle>
        </div>
      </div>
    </div>
  );
};

export default Post;
