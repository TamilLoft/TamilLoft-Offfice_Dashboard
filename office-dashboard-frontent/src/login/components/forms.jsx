import { useForm } from "react-hook-form";
export default function Forms() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  function handleSaveData(data) {
    console.log(data);
    console.log(errors);
  }

  return (
    <>
      <form
        className="flex flex-col items-center my-4 bg-gray-100 p-4 rounded-lg h-fit justify-around shadow-lg"
        onSubmit={handleSubmit(handleSaveData)}
      >
        <div className="mt-4">
          <h1 className=" font-lg font-semibold text-lg lg:text-xl">Login to your account</h1>
        </div>
        <div className="m-4 px-2 w-full">
          
          
          <input
            type="text" className="rounded p-1 w-full" placeholder="Your login"
            {...register("username", { required: "Username is required" })}
          />
          <p> {errors?.username?.message?.toString()}</p>
        </div>
        <div className="m-4 px-2 w-full">
          
          <input
            type="password"
            className="rounded p-1 w-full" placeholder="Your password"
            {...register("password", { required: "Password is required" })}
          />
          <p> {errors?.password?.message?.toString()}</p>
        </div>

        <button
          className=" hover:text-white bg-[#ffa520] text-black rounded-xl p-2 w-full "
          type="submit"
        >
          sign in
        </button>
      </form>
    </>
  );
}
