import React, { useEffect, useState,useId } from "react";
import {nanoid} from "@reduxjs/toolkit"
function Manager() {
  const [from, setfrom] = useState({ url: "", pass: "", email: "" });
  const [passArray, setpassArray] = useState([]);
  const id = nanoid();
  console.log(id);
  
  useEffect(() => {
    const passwords = localStorage.getItem("password");

    if (passwords) {
      try {
        setpassArray(JSON.parse(passwords));
      } catch (error) {
        console.log("Failed to parse passwords:", error);
      }
    }
  }, []);

  let handleChange = (e) => {
    setfrom({ ...from, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    setpassArray([...passArray, {...from,uid : id}]);
    console.log(passArray);
    localStorage.setItem("password", JSON.stringify([...passArray, {...from,uid:id}]));
    setfrom("")
  };

  let copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  let deletepass = (id) => {
    const updatedPassArray = passArray.filter((item) => item.uid !== id);    
    setpassArray(updatedPassArray);
    localStorage.setItem("password", JSON.stringify(updatedPassArray));
};

  let edit =(id)=>{
    // setpassArray(passArray.filter((i)=> i.uid === id)[0])
     setfrom(passArray.filter((i) => i.uid === id)[0]);
     setpassArray(passArray.filter((item) => item.uid !== id))
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <h3 className="text-gray-600 font-bold text-4xl text-center mt-2">
        password
      </h3>
      <p className="text-gray-400 font-bold text-center mt-2">
        your password manager{" "}
      </p>
      <div className="flex justify-center mt-3">
        <div className=" p-6 rounded-lg shadow-md w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={from.url}
              placeholder="url"
              name="url"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="password"
              value={from.pass}
              name="pass"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              value={from.email}
              onChange={handleChange}
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="flex items-center justify-center  w-1/4 mt-6 bg-gray-600 my-0 mx-auto
       text-white py-2 rounded-full cursor-pointer hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              <lord-icon
                src="https://cdn.lordicon.com/zrkkrrpl.json"
                trigger="hover"
                style={{ width: "30px", height: "30px", color: "white" }}
              ></lord-icon>
              <span className="px-3">Add</span>
            </button>
          </div>
        </div>
      </div>
      <h1 className="m-6 text-center text-gray-800 font-semibold text-2xl">
        Password
      </h1>
      {passArray.length === 0 && <div>notthing to show</div>}
      {passArray.length !== 0 && (
        <div className="m-4 overflow-x-auto flex items-center justify-center">
          <table className="w-1/2 bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                  URL
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                  Password
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {passArray.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 ">
                    {item.url}
                    <div onClick={() => copy(item.url)} className="inline">
                      <lord-icon
                        src="https://cdn.lordicon.com/wyqtxzeh.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 ">
                    {item.email}
                    <div className="inline" onClick={() => copy(index.email)}>
                      <lord-icon
                        src="https://cdn.lordicon.com/wyqtxzeh.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {item.pass}
                    <div className="inline" onClick={() => copy(item.pass)}>
                      <lord-icon
                        src="https://cdn.lordicon.com/wyqtxzeh.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-1">
                      <div className="cursor-pointer" onClick={()=> edit(item.uid)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                      <div className="cursor-pointer" onClick={()=> deletepass(item.uid)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          // style="width:250px;height:250px"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
export default Manager;