import React from 'react';

import { Avatar, WrapItem } from "@chakra-ui/react";
const ConnectPeople = () => {
    return (
      <div className="  px-3 ">
        <div className="flex  items-center">
          <WrapItem>
            <Avatar
              size="lg"
              name="Christian Nwamba"
              src="https://source.unsplash.com/random/500x500"
            />{" "}
          </WrapItem>
          <h3 className="mx-2 ">Jhankr mahbub</h3>
        </div>
        <div className="text-center mb-2">
          <button className=" btn btn-sm rounded-full btn-outline ">
            connect +
          </button>
        </div>
      </div>
    );
};

export default ConnectPeople;