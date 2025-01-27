import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useState } from "react";

const PriceFilter = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState(null);

    return (
        <div>
            <button
                className="flex justify-between items-center w-full py-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Price</span>
                {isOpen ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
            </button>
            {isOpen && (
                <div>
                    <form className="space-y-2">
                        {/* Option 1 */}
                        <label className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="price"
                                    value="US $0 - US $2.99"
                                    className="appearance-none w-5 h-5 border border-accentGray bg-white rounded-md checked:bg-primary checked:border-primary"
                                    checked={selectedOptions === "US $0 - US $2.99"}
                                    onChange={() => {
                                        setSelectedOptions("US $0 - US $2.99");
                                    }}
                                />
                                {/* Checkmark */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-sm pointer-events-none opacity-0 checked:opacity-100">
                  ✓
                </span>
                            </div>
                            <span>US $0 - US $2.99</span>
                        </label>

                        {/* Option 2 */}
                        <label className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="price"
                                    value="US $3.00 - US $5.99"
                                    className="appearance-none w-5 h-5 border border-accentGray bg-white rounded-md checked:bg-primary checked:border-primary"
                                    checked={selectedOptions === "US $3.00 - US $5.99"}
                                    onChange={() => {
                                        setSelectedOptions("US $3.00 - US $5.99");
                                    }}
                                />
                                {/* Checkmark */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-sm pointer-events-none opacity-0 checked:opacity-100">
                  ✓
                </span>
                            </div>
                            <span>US $3.00 - US $5.99</span>
                        </label>

                        {/* Option 3 */}
                        <label className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="price"
                                    value="US $6.00 and above"
                                    className="appearance-none w-5 h-5 border border-accentGray bg-white rounded-md checked:bg-primary checked:border-primary"
                                    checked={selectedOptions === "US $6.00 and above"}
                                    onChange={() => {
                                        setSelectedOptions("US $6.00 and above");
                                    }}
                                />
                                {/* Checkmark */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-sm pointer-events-none opacity-0 checked:opacity-100">
                  ✓
                </span>
                            </div>
                            <span>US $6.00 and above</span>
                        </label>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PriceFilter;
