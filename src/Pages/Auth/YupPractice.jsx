import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const logSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("invalid email")
    .required("Please input your email"),
  password: Yup.string()
    .length(6, "password should not exceed 6 characters")
    .required("Please input your Password"),
  confirmPassword: Yup.string()
    .length(6, "password do not match")
    .required("This field is required"),
});

function UnvalidatedForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(logSchema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label>Name:</label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label>Email:</label>
          <input {...register("email")} className="w-full border p-2 rounded" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UnvalidatedForm;
