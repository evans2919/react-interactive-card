import { useState } from "react";
import CardForm from "./components/CardForm";
import CardLayout from "./components/CardLayout";

const App = () => {
    const [card, setCard] = useState([]);

    const handleCard = (newCard) => {
        setCard(newCard);
    };

    return (
        <>
            <div className="md:flex md:h-screen md:w-full">
                <div className="bg-[url(/img/bg-main-mobile.png)] md:bg-[url(/img/bg-main-desktop.png)] bg-top bg-no-repeat bg-contain px-6 uppercase md:bg-cover md:w-[500px] md:flex md:justify-center md:flex-col-reverse">
                    <CardLayout card={card} />
                </div>
                <div className="px-6 uppercase md:flex md:items-center md:justify-center flex-1">
                    <CardForm handleCard={handleCard} setCard={setCard} />
                </div>
            </div>
        </>
    );
};

export default App;
