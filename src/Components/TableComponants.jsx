/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

function TableComponents({ Payments }) {
  return (
    <>
      <div className="w-full">
        <div className="bg-white rounded-xl px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Course</th>
                <th className="font-normal text-left pl-12">Customer Name</th>
                <th className="font-normal text-left pl-12">Customer Email</th>
                <th className="font-normal text-left pl-16">Price</th>
                <th className="font-normal text-left pl-16">Transaction ID</th>
                <th className="font-normal text-left pl-12">Payment Status</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {Payments.map((data, idx) => {
                return (
                  <tr
                    key={idx}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full rounded"
                            src={data?.thumPhotoUrl}
                            alt="thumbnail"
                          />
                        </div>
                        <div className="pl-4">
                          <p className="text-sm font-medium leading-none text-gray-800">{data?.title}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {data.author}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">{data?.customerName}</p>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {data?.customerEmail}
                      </p>
                    </td>
                    <td className="pl-[68px]">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        ${data?.price}
                      </p>
                    </td>
                    <td className="pl-16">
                      <p className="font-medium">{data?.transactionId}</p>
                    </td>
                    <td className="pl-20">
                      <FaCheckCircle className="text-primary text-xl" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableComponents;
