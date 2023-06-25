import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeValue } from "../app/action";

export default function TaskItem() {
  const [status, setStatus] = useState([]);
  const data = useSelector((state) => state.data.submittedData);

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeValue(item));
  };

  const handleCompleted = (index) => {
    setStatus((prevState) => {
      const updatedStatus = [...prevState];
      updatedStatus[index] = !updatedStatus[index];
      return updatedStatus;
    });
  };

  return (
    <div className="">
      {data
        ? data.map((item, index) => {
            return (
              <li
                type="button"
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <div className="">
                  <span onClick={() => handleCompleted(index)}>
                    <i
                      className={`fa ${
                        status[index] ? "fa-check-circle" : "fa-circle"
                      }  mx-2`}
                    ></i>
                  </span>
                  <span onClick={() => handleDelete(item)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </div>
              </li>
            );
          })
        : null}
    </div>
  );
}
