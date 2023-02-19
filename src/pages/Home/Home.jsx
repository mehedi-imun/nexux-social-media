import React from "react";
import Post from "./Post";

const Home = () => {
  return (
    <div className=" pt-24 grid grid-cols-9 gap-6">
      <div className="col-span-2 bg-accent h-96 rounded-md">
        <div>
          <img
            className=" rounded-t-md w-full h-24"
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
          <div className="avatar relative flex items-center justify-center">
            <div className="w-16 rounded-full border border-accent absolute ">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
          <div className="my-12 text-center">
            <h3>name</h3>
            <h3>desegnetion</h3>
          </div>
          <hr />
        </div>
      </div>
      <div className="col-span-4 bg-accent rounded-md h-36">
        <Post></Post>
      </div>
      <div className="col-span-3 bg-accent h-96 rounded-md">about this app</div>
    </div>
  );
};

export default Home;
