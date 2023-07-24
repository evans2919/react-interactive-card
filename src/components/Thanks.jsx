/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const Thanks = ({ handleClick }) => {
    return (
        <>
            <div className="flex flex-col items-center py-5 [&>div]:mt-6">
                <div>
                    <img src="/img/icon-complete.svg" alt="" />
                </div>
                <div className="tracking-widest">
                    <h1 className="text-3xl text-center mb-2">Thank you!</h1>
                    <p className="normal-case text-gray-400">
                        We've added your card details
                    </p>
                </div>

                <div className="w-full">
                    <button
                        onClick={handleClick}
                        type="submit"
                        className="py-4 bg-[#21092f] w-full mt-5 rounded-lg text-gray-100"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
};

export default Thanks;
