import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {removeValue, changeStatus} from "../app/action";

TaskItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
}

export default function TaskItem({item, index}) {
    const dispatch = useDispatch();

    const handleDelete = (value) => {
        dispatch(removeValue(value));
    };

    const handleCompleted = (value) => {
        dispatch(changeStatus(value));
    };

    return (
        <li
            type="button"
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            {item.value}
            <div className="">
                  <span onClick={() => handleCompleted(item.value)}>
                    <i
                        className={`fa ${
                            item.status ? "fa-check-circle" : "fa-circle"
                        }  mx-2`}
                    ></i>
                  </span>
                <span onClick={() => handleDelete(item.value)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </span>
            </div>
        </li>
    );
}
