import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MyPostCard from "./MyPostCard";


const MyPost = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(12);

  const fetchMoreData = () => {
    if (!hasMore) {
      return;
    }

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setItems([...items, ...data]);
          setCurrentPage(currentPage + 1);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div>
      <hr />
      <InfiniteScroll
        className="scrollbar-hidden"
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={600}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((item, index) => (
          <MyPostCard key={index} item={item}></MyPostCard>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MyPost;
