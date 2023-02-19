import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
//   height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const NewsFeed = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreData = () => {
    if (!hasMore) {
      return;
    }

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
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
    <div >
      <hr />
      <InfiniteScroll
        className="scrollbar-hidden"
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((item, index) => (
          <div
            className=" shadow-lg h-80 scrollbar-hidden"
            style={style}
            key={index}
          >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
