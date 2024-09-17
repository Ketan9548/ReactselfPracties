import React from 'react'

const Change = ({ optionval, label }) => {
    return (
        <div className="bg-white p-4 rounded-lg text-sm flex items-center space-x-4 shadow-sm ">
            <div className="w-1/2">
                <label className="text-gray-500 mb-1 block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-gray-50 py-2 px-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <p className="text-gray-500 mb-1 w-full text-right">Currency Type</p>
                <select
                    className="rounded-md px-3 py-2 bg-gray-50 border border-gray-300 cursor-pointer outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    {/* {optionval.map((val) => {
                        <option value={val}>
                            {val}
                        </option>
                    })} */}
                </select>
            </div>
        </div>
    )
}

export default Change
