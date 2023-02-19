import React from "react";
import NewsFeed from "./NewsFeed";
import Post from "./Post";

const Home = () => {
  return (
    <div className=" pt-24 grid lg:grid-cols-9 md:grid-cols-3 grid-cols-1  gap-6  ">
      <div className="lg:col-span-2 md:col-span-1 col-span-9 bg-accent lg:h-96 h-full rounded-md container">
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
      <div className="lg:col-span-4 md:col-span-2 col-span-9 bg-accent rounded-md h-36 ">
        <Post></Post>
        <div className=" scrollbar-hidden h-80  mt-3 overflow-y-scroll">
          {/* newsFeed */}
          <NewsFeed></NewsFeed>
        </div>
      </div>

      <div className="col-span-3 lg:block hidden bg-accent h-96 rounded-md  ">
        about this app
      </div>
    </div>
  );
};

export default Home;
