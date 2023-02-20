import React from "react";
import Footer from "../Shared/Footer/Footer";
import NewsFeed from "./NewsFeed";
import Post from "./Post";

const Home = () => {
  return (
    <div className=" pt-6 grid lg:grid-cols-9 md:grid-cols-3 grid-cols-1  gap-6 container mx-auto  pb-96 lg:px-16 px-8">
      <div className="lg:col-span-2 md:col-span-1 col-span-9 bg-accent lg:h-96 h-full rounded-md ">
        <div className=" ">
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
        <div className=" scrollbar-hidden h-auto  mt-3 overflow-y-scroll ">
          {/* newsFeed */}
          <NewsFeed></NewsFeed>
        </div>
      </div>

      <div className="col-span-3 lg:block hidden  h-96 rounded-md  ">
        <div className="bg-accent lg:h-auto h-full rounded-md">
          <h3 className="p-3 font-bold">Add to your feed</h3>
          <div>
            <div className="avatar flex  items-center p-3">
              <div className="w-16 rounded-full border border-accent ">
                <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" />
              </div>
              <h3 className="ml-2 ">company. multinational technology</h3>
              <button className=" flex-none btn btn-sm rounded-full btn-outline ">
                Follow +
              </button>
            </div>
            <div className="avatar flex  items-center p-3">
              <div className="w-16 rounded-full border border-accent ">
                <img src="https://cdn.dribbble.com/users/2973/screenshots/16757947/media/c56c56d24f8c591ff753faa15ea4a033.png?compress=1&resize=400x300&vertical=top" />
              </div>
              <h3 className="ml-2 ">
                company. Towns Facebook, Instagram, and WhatsApp{" "}
              </h3>
              <button className=" flex-none btn btn-sm rounded-full btn-outline ">
                Follow +
              </button>
            </div>
            <div className="avatar flex  items-center p-3">
              <div className="w-16 rounded-full border border-accent ">
                <img src="data:image/png;base64,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" />
              </div>
              <h3 className="ml-2 ">
                company. American multinational technology
              </h3>
              <button className=" flex-none btn btn-sm rounded-full btn-outline ">
                Follow +
              </button>
            </div>
            <div className="avatar flex  items-center p-3">
              <div className="w-16 rounded-full border border-accent ">
                <img src="data:image/png;base64,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" />
              </div>
              <h3 className="ml-2 ">
                company. Search the world's information, including webpages{" "}
              </h3>
              <button className=" flex-none btn btn-sm rounded-full btn-outline ">
                Follow +
              </button>
            </div>
          </div>
          <a className="p-6 mb-6 " href="#">
            View all recommendations{" "}
          </a>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
