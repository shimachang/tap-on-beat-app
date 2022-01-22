const Calculator = ({ sellingQuantity, setSellingQuantity, sellingType, setSellingType }) => {
    const numberArray = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "00"];
    const bpmNumber = ["350", "592", "950"];
    const addValue = (e, val) => {
        e.preventDefault();
        setSellingQuantity(sellingQuantity + val);
    };
    const deleteValue = (e, val) => {
        e.preventDefault();
        setSellingQuantity(val);
    };

    return (
        <div className="bg-white p-2 m-2 rounded-lg">
            <div className="grid grid-cols-6 gap-2 mb-2">
                <div
                    onClick={() => setSellingType("BPM")}
                    className={`col-span-2 py-2 rounded-lg text-3xl bg-red-400 ${
                        sellingType === "BPM" || "opacity-25"
                    } `}
                >
                    BPM
                </div>
                <div
                    onClick={() => setSellingType("その他")}
                    className={`col-span-4 py-2 rounded-lg text-3xl bg-gray-400 ${
                        sellingType === "その他" || "opacity-25"
                    } `}
                >
                    その他
                </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
                <div className="grid col-span-2 grid-rows-3 gap-2">
                    <button
                        disabled={sellingType === "BPM" ? false : true}
                        onClick={(e) => addValue(e, "350")}
                        className={`py-2 rounded-lg text-2xl border ${
                            sellingType === "BPM" || "opacity-25"
                        }`}
                        disabled={sellingType === "BPM" ? false : true}
                    >
                        350 ml
                    </button>
                    <button
                        onClick={(e) => addValue(e, "592")}
                        className={`py-2 rounded-lg text-2xl border ${
                            sellingType === "BPM" || "opacity-25"
                        }`}
                        disabled={sellingType === "BPM" ? false : true}
                    >
                        592 ml
                    </button>
                    <button
                        onClick={(e) => addValue(e, "950")}
                        className={`py-2 rounded-lg text-2xl border ${
                            sellingType === "BPM" || "opacity-25"
                        }`}
                        disabled={sellingType === "BPM" ? false : true}
                    >
                        950 ml
                    </button>
                </div>
                <div className="grid col-span-4 grid-cols-3 grid-rows-4 gap-2">
                    {numberArray.map((num, i) => (
                        <button
                            key={i}
                            onClick={(e) => addValue(e, num)}
                            className={`py-2 rounded-lg text-2xl border ${
                                sellingType === "その他" || "opacity-25"
                            }`}
                            disabled={sellingType === "その他" ? false : true}
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={(e) => deleteValue(e, "")}
                        className="text-2xl rounded-lg border"
                    >
                        クリア
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Calculator;
