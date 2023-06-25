import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {addValue} from "../app/action";
import {schema, initialValues} from "../validations/form.validate";

export default function Task() {
    const methods = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema),
    });

    const {
        register,
        setError,
        handleSubmit,
        formState: {errors},
        reset,
    } = methods;

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        try {
            dispatch(addValue(data.value));
            reset();
        } catch (error) {
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

    return (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                    <div className="h-25">
                        <input
                            {...register("value", {required: true})}
                            type="text"
                            className="form-control"
                        />
                        <p className="text-danger small pt-2">{errors?.value?.message}</p>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-outline-primary mx-2 h-25"
                        value="Add"
                    />
                </div>
            </form>
        </div>
    );
}
