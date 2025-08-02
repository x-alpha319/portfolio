import { useState } from "react";
import Card from "./Card";

function Shop() {
  const [toggle, setToggle] = useState(false);

  const cardData = [
    {
      header: "River Adventure",
      title: "Explore Lush Trees",
      img: "/image.png",
      icon: "droplets",
      description:
        "Discover beautiful riverside landscapes with ancient trees.",
    },
    {
      header: "Ocean Escape",
      title: "Walk on Golden Grass",
      img: "/image2.jpeg",
      icon: "waves",
      description: "Experience the serene beauty of coastal meadows.",
    },
    {
      header: "City Tour",
      title: "Taste Local Meals",
      img: "/image3.jpeg",
      icon: "bus",
      description: "Explore urban life and culinary delights.",
    },
    {
      header: "Mountain Hike",
      title: "Breathtaking Views",
      img: "/vite.svg",
      icon: "mountain",
      description: "Challenge yourself with scenic mountain trails.",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-6 py-14">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-purple-700 tracking-wide">
        Explore Beautiful Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            image={item.img}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
