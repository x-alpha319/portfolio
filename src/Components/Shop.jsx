import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Loader2 } from "lucide-react";
function Shop() {
  // const cardData = [
  //   {
  //     header: "River Adventure",
  //     title: "Explore Lush Trees",
  //     img: "/vite.svg",
  //     icon: "droplets",
  //     description:
  //       "Discover beautiful riverside landscapes with ancient trees.",
  //   },
  //   {
  //     header: "Ocean Escape",
  //     title: "Walk on Golden Grass",
  //     img: "/vite.svg",
  //     icon: "waves",
  //     description: "Experience the serene beauty of coastal meadows.",
  //   },
  //   {
  //     header: "City Tour",
  //     title: "Taste Local Meals",
  //     img: "/vite.svg",
  //     icon: "bus",
  //     description: "Explore urban life and culinary delights.",
  //   },
  //   {
  //     header: "Mountain Hike",
  //     title: "Breathtaking Views",
  //     img: "/vite.svg",
  //     icon: "mountain",
  //     description: "Challenge yourself with scenic mountain trails.",
  //   },
  // ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        // setisLoading(false);
      });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
        Explore Beautiful Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            header={item.title}
            image={item.image}
            icon={item.icon}
            description={item.title}
          />
        ))}
      </div>
    </div>
  );
}
export default Shop;
