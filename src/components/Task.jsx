import React from "react";
import { useForm } from "react-hook-form";
import { schema, initialValues } from "./validations/form.validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addValue } from "../app/action";

export default function App() {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      dispatch(addValue(data.Value));
      reset();
    } catch (error) {
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex">
        <div className="h-25">
          <input
            {...register("Value", { required: true })}
            type="text"
            className="form-control"
          />
          <p className="text-danger small pt-2">{errors.Value?.message}</p>
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary mx-2 h-25"
          value="Add"
        />
      </div>
    </form>
  );
}
