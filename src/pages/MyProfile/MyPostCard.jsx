import React from "react";

const MyPostCard = ({ item }) => {
  return (
    <div className=" shadow-lg lg:h-full scrollbar-hidden bg-accent rounded-md mb-6">
      <div className="">
        <div className="avatar flex  items-center p-3">
          <div className="w-16 rounded-full border border-accent ">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <h3 className="ml-2 ">Profile Name</h3>
        </div>
        <div className="">
          <p className="px-5 py-2 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            autem!
          </p>
          <img
            className="object-fill h-96 w-full "
            src="https://i.ibb.co/6Z3NsLx/82937984-1387456131432319-5305838091641028608-n.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" border-t-4 ">
        <div className="flex justify-around mt-2">
          <a className="btn btn-ghost">like</a>
          <a className="btn btn-ghost">comment</a>
          <a className="btn btn-ghost">share</a>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
