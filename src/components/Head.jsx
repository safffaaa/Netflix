import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../context/MyContext";

const Head = () => {
  const { isLogged, setLogged } = useContext(Mycontext);

  return (
    <div className="flex items-center justify-between p-3 head">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      {isLogged ? (
        <><button className="bg-red-600 py-2 px-6 m-3 text-white rounded cursor-pointer" onClick={() => setLogged(false)}>Logout</button></>
      ) : (
        <div>
          <Link
            to={"/Signin"}
            className="signin-btn rounded py-2 px-6 m-2 text-white cursor-pointer"
          >
            Sign In
          </Link>
          <Link
            to={"/Signup"}
            className="bg-red-600 py-2 px-6 m-3 text-white rounded cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Head;
