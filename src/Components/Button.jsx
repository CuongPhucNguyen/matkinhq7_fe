import {useState} from "react";

function Button(){
    const [isFlicker, setIsFlicker] = useState(false);

    const handleClick = () => {
        setIsFlicker(true);
        setTimeout(() => setIsFlicker(false), 50); // flicker for 150ms
    };

    return (
        <button
            onClick={handleClick}
            className={`${
                isFlicker ? "bg-yellow-700" : "bg-yellow-500"
            } text-white font-bold py-2 px-4 rounded transition-colors duration-150`}
        >
            Click Me
        </button>
    );
}

export default Button;