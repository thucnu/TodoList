import * as Yup from "yup";
export const schema = Yup.object().shape({
  Value: Yup.string().required("Please enter a task"),
});

export const initialValues = {
  Value: "",
};
