/* eslint-disable react/prop-types */
const CardLayout = ({ card }) => {
    const { name, number, expM, expY, cvc } = card;
    return (
        <>
            <div
                className="bg-[url(/img/bg-card-back.png)] bg-top 
                bg-no-repeat bg-cover flex py-5 rounded-xl relative left-2  text-gray-100 h-[190px] md:h-[220px] md:w-[400px] md:left-[265px] justify-center"
            >
                <div className="text-sm w-[80%] flex justify-end items-center pr-2">
                    <p>{cvc}</p>
                </div>
            </div>

            <div className="bg-[url(/img/bg-card-front.png)] bg-top bg-no-repeat bg-cover flex flex-col p-5 rounded-xl relative bottom-16 right-2 text-gray-100 h-[190px] justify-between md:h-[220px] md:w-[400px] md:right-0 md:left-[180px] md:bottom-[20px]  ">
                <div>
                    <img src="/img/card-logo.svg" alt="" />
                </div>
                <div className="mt-8  ">
                    <div className="text-[1.4rem] tracking-wider">
                        <p>{number}</p>
                    </div>

                    <div className="flex justify-between mt-5 text-sm">
                        <div>
                            <p>{name}</p>
                        </div>
                        <div>
                            <p>
                                {expM}/{expY}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardLayout;
