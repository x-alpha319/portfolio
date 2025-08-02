import { Droplets, Waves, Bus, Mountain } from "lucide-react";

const iconMap = {
  droplets: <Droplets className="text-sky-500" />,
  waves: <Waves className="text-blue-500" />,
  bus: <Bus className="text-yellow-500" />,
  mountain: <Mountain className="text-green-600" />,
};

function Card({ header, image, icon, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img src={image} alt={header} className="w-full h-40 object-cover" />
      <div className="p-5">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
          {iconMap[icon]} <span>{header}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;
