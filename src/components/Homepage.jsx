import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function Homepage() {
  const { user, loading } = useSelector((state) => state.user);

  return (
    <>
      {user === undefined ? (
        <p className=" my-5 text-center fs-1"> Login First to view its Content </p>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {user && (
                <div className="container my-5 text-center">
                  <p className="fs-1">{user.name}</p>
                  <p className="fs-2">{user.email}</p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
