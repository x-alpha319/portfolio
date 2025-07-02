import { Droplets, Waves, Bus, Mountain, ArrowRight } from "lucide-react";

function Card(props) {
  const getIcon = () => {
    switch(props.icon) {
      case "droplets": return <Droplets className="text-blue-500" size={24} />;
      case "waves": return <Waves className="text-blue-400" size={24} />;
      case "bus": return <Bus className="text-purple-500" size={24} />;
      case "mountain": return <Mountain className="text-green-600" size={24} />;
      default: return <Droplets className="text-blue-500" size={24} />;
    }
  };

  const handleClick = () => {
    alert(`You selected: ${props.header}\n${props.description}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          {getIcon()}
          <h4 className="text-lg font-semibold text-gray-800">{props.header}</h4>
        </div>
        
        <img 
          src={props.image} 
          alt={props.title} 
          className="w-full h-32 object-contain mb-3" 
        />
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{props.description}</p>
        
        <button
          onClick={handleClick}
          className="mt-auto w-full py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-md hover:from-purple-500 hover:to-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Explore
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Card;