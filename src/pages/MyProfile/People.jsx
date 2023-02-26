import { Avatar, WrapItem } from '@chakra-ui/react';
import React from 'react';

const People = () => {
    return (
      <div className="  px-3 ">
        <div className="flex  items-center">
          <WrapItem>
            <Avatar
              size="lg"
              name="Christian Nwamba"
              src="https://picsum.photos/500"
            />{" "}
          </WrapItem>
          <h3 className="mx-2 "> Elone mask.</h3>
        </div>
        <div className="text-center mb-2">
          <button className=" btn btn-sm rounded-full btn-outline ">
            Message +
          </button>
        </div>
      </div>
    );
};

export default People;