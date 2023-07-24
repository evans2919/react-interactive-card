/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Thanks from "./Thanks";
import FormInput from "./form/FormInput";

const CardForm = ({ handleCard, setCard }) => {
    const customClass = {
        input: {
            normal: "border-gray-300 hover:border-gray-600 focus:border-gray-600",
            error: "border-red-500 hover:border-red-800 focus:border-red-800",
        },
        error: {
            normal: "normal-case text-xs md:text-sm text-red-500 mt-2",
        },
    };
    const [newCard, setNewCard] = useState({
        name: "",
        number: "",
        expM: "",
        expY: "",
        cvc: "",
    });
    const { name, number, expM, expY, cvc } = newCard;

    const form = useRef();
    const thanks = useRef();

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { value, name } = e.target;
        const cardValue = { ...newCard, [name]: value };

        if (name === "number") {
            const newValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
            cardValue[name] = newValue.trim();
        }
        setNewCard(cardValue);
        handleCard(cardValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const textRegex = /^[\p{L}\s]+$/u;
        const numberRegex = /^[0-9\s]+$/;
        const expMRegex = /^[0-2]+$/;
        const expYRegex = /^(?:2[4-9]|[3-9]\d+)$/;

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Can't be blank";
        } else if (!textRegex.test(name)) {
            newErrors.name = "Wrong format, please enter a name";
        }

        if (!number.trim()) {
            newErrors.number = "Can't be blank";
        } else if (!numberRegex.test(number)) {
            newErrors.number = "Wrong format, numbers only";
        } else if (number.trim().length < 19) {
            newErrors.number = "Enter a valid card number";
        }

        if (!expM.trim()) {
            newErrors.expM = "Can't be blank";
        } else if (!expMRegex.test(expM) || expM.trim().length < 2) {
            newErrors.expM = "Enter a valid month";
        }

        if (!expY.trim()) {
            newErrors.expY = "Can't be blank";
        } else if (!expYRegex.test(expY) || expY.trim().length < 2) {
            newErrors.expY = "Enter a valid year";
        }

        if (!cvc.trim()) {
            newErrors.cvc = "Can't be blank";
        } else if (!numberRegex.test(cvc) || cvc.trim().length < 3) {
            newErrors.cvc = "Enter a valid number";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handleCard(newCard);
            form.current.className = "hidden";
            thanks.current.className = "block";
        }
    };

    const handleClick = () => {
        const emptyCard = { name: "", number: "", expM: "", expY: "", cvc: "" };
        form.current.className = "block";
        thanks.current.className = "hidden";
        setCard(emptyCard);
        setNewCard(emptyCard);
    };

    return (
        <>
            <div ref={form}>
                <div className="[&>label]:uppercase mt-[-20px] md:w-[400px] md:m-0 2xl:w-[550px]">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <FormInput
                                label={"Cardholder name"}
                                type={"text"}
                                placeholder={"e.g Jane Appleseed"}
                                value={name}
                                handleChange={handleChange}
                                name={"name"}
                                maxLength={30}
                                className={
                                    error.name
                                        ? customClass.input.error
                                        : customClass.input.normal
                                }
                            />
                            {error.name !== "" && (
                                <p className={customClass.error.normal}>
                                    {error.name}
                                </p>
                            )}
                        </div>
                        <div className="mt-5">
                            <FormInput
                                label={"Card number"}
                                type={"text"}
                                placeholder={"e.g 1234 5678 9123 0000"}
                                value={number}
                                handleChange={handleChange}
                                name={"number"}
                                maxLength={19}
                                className={
                                    error.number
                                        ? customClass.input.error
                                        : customClass.input.normal
                                }
                            />
                            {error.number !== "" && (
                                <p className={customClass.error.normal}>
                                    {error.number}
                                </p>
                            )}
                        </div>

                        <div className="flex gap-2">
                            <div className="mt-5 w-[95%]">
                                <label className="tracking-widest">
                                    Exp. date (mm/yy)
                                </label>
                                <div className="flex gap-2">
                                    <div>
                                        <FormInput
                                            type={"text"}
                                            placeholder={"MM"}
                                            value={expM}
                                            handleChange={handleChange}
                                            name={"expM"}
                                            maxLength={2}
                                            className={
                                                error.expM
                                                    ? customClass.input.error
                                                    : customClass.input.normal
                                            }
                                        />
                                        {error.expM !== "" && (
                                            <p
                                                className={
                                                    customClass.error.normal
                                                }
                                            >
                                                {error.expM}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <FormInput
                                            type={"text"}
                                            placeholder={"YY"}
                                            value={expY}
                                            handleChange={handleChange}
                                            name={"expY"}
                                            maxLength={2}
                                            className={
                                                error.expY
                                                    ? customClass.input.error
                                                    : customClass.input.normal
                                            }
                                        />
                                        {error.expY !== "" && (
                                            <p
                                                className={
                                                    customClass.error.normal
                                                }
                                            >
                                                {error.expY}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <FormInput
                                    label={"cvc"}
                                    type={"text"}
                                    placeholder={"e.g. 123"}
                                    value={cvc}
                                    handleChange={handleChange}
                                    name={"cvc"}
                                    maxLength={3}
                                    className={
                                        error.cvc
                                            ? customClass.input.error
                                            : customClass.input.normal
                                    }
                                />
                                {error.cvc !== "" && (
                                    <p className={customClass.error.normal}>
                                        {error.cvc}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="py-4 bg-[#21092f] w-full mt-5 rounded-lg text-gray-100"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden" ref={thanks}>
                <Thanks handleClick={handleClick} />
            </div>
        </>
    );
};
export default CardForm;
