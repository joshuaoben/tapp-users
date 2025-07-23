"use client";

import UserMap from "./UserMap";

export default function UserCard({ user }) {
  const { name, username, email, address, phone, website, company } = user;

  return (
    <div>
      <div className="my-12 flex flex-col items-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase">User Page</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 bg-gray-100 mx-auto p-8 w-[90vw] sm:w-xl lg:w-6xl rounded-xl">
          <div className="flex flex-1 flex-col w-auto">
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Name
              </span>
              <h3 className="text-xl md:text-2xl">{name}</h3>
            </div>
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Email
              </span>
              <h4 className=" text-lg">{email}</h4>
            </div>
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Username
              </span>
              <h4 className=" text-lg">{"@" + username}</h4>
            </div>
            <div className="mb-0 md:mb-2 bg-white rounded-lg p-4">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Company
              </span>
              <h4 className="text-xl md:text-2xl">{company.name}</h4>
              <h4 className="md:text-xl">{company.catchPhrase}</h4>
              {/* <h4>{company.bs}</h4> */}
            </div>
          </div>
          <div className="flex flex-1 flex-col w-auto">
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Phone
              </span>
              <h4 className=" text-lg">{phone}</h4>
            </div>
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Website
              </span>
              <h4 className=" text-lg">{website}</h4>
            </div>
            <div className="p-2 mb-2">
              <span className="uppercase text-sm font-semibold text-gray-400">
                Address
              </span>
              <h4 className=" text-lg">{`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</h4>
            </div>
            <div className="p-2">
              <UserMap lat={address.geo.lat} lng={address.geo.lng} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
