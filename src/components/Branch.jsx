import React from "react";
import Mumbai from "../assets/mumbai.png";
import Pune from "../assets/pune.png";
import Raipur from "../assets/raipur.png";

const branches = [
  {
    name: "PUNE",
    address:
      "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    imageUrl: Pune, // Use the imported image
  },
  {
    name: "MUMBAI",
    address:
      "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    imageUrl: Mumbai, // Use the imported image
  },
  {
    name: "RAIPUR",
    address:
      "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    imageUrl: Raipur, // Use the imported image
  },
];

const cardClasses =
  "bg-card p-4 rounded-lg shadow-lg bg-[#4f4d8c] text-white w-[75%]";
const textClasses = "text-xl font-semibold text-card-foreground";
const textMutedClasses = "text-muted-foreground";

const Branches = () => {
  return (
    <div className="flex flex-col items-center py-8 w-[85%] mx-auto">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-8">
        OUR BRANCHES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <div key={branch.name} className={cardClasses}>
            <img
              src={branch.imageUrl}
              alt={`Map of ${branch.name}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className={textClasses}>{branch.name}</h3>
            <p className={textMutedClasses}>{branch.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
