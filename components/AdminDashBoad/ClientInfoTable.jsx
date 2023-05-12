import React, {useEffect} from "react";
import Link from "next/link";
import axios from "axios";

function ClientInfoTable() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/client/info").then(res => console.log("Res Clinet Data : ", res))
  }, [])
  return (
    <>
      <div className="container my-5 mx-auto">
        <div className="row">
          <h1 style={{ fontSize: "25px" }} className="ml-4 mb-4">
            Your Clients
          </h1>
          <div className="grid grid-cols-12 mx-5">
            <div class="relative col-span-12 overflow-x-auto shadow-md sm:rounded-lg py-4 px-3">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Channel Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Contact Via
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th class="px-6 py-4">Hamza</th>
                    <td class="px-6 py-4">Developer</td>
                    <td class="px-6 py-4">0304 9068858</td>
                    <td class="px-6 py-4">Text</td>
                    <td class="px-6 py-4">5 mints ago</td>
                    <td>
                      <Link href="#" className="text-[blue]">
                        {" "}
                        <span>View</span>{" "}
                      </Link>
                      /
                      <Link href="#" className="text-[blue]">
                        {" "}
                        <span>Edit</span>{" "}
                      </Link>
                      /
                      <Link href="#" className="text-[red]">
                        {" "}
                        <span>Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th class="px-6 py-4">Hamza</th>
                    <td class="px-6 py-4">Developer</td>
                    <td class="px-6 py-4">0304 9068858</td>
                    <td class="px-6 py-4">Text</td>
                    <td class="px-6 py-4">5 mints ago</td>
                    <td>
                      <Link href="#" className="text-[blue]">
                        {" "}
                        <span>View</span>{" "}
                      </Link>
                      /
                      <Link href="#" className="text-[blue]">
                        {" "}
                        <span>Edit</span>{" "}
                      </Link>
                      /
                      <Link href="#" className="text-[red]">
                        {" "}
                        <span>Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientInfoTable;
