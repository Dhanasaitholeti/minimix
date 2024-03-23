const LoginScreen: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-10 gap-5 mt-10">
        <h1 className="text-2xl font-semibold">Login screen</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-2">
            <label htmlFor="" className="text-lg">
              Email:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-200 h-10 min-w-full p-2"
              placeholder="Example@email.com"
            />
          </div>
          <div className="flex flex-col p-4 gap-2">
            <label htmlFor="" className="text-lg ">
              Password:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-200 h-10 min-w-full p-2"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div>
          <button>Sign in with Google</button>
        </div>

        <button className="bg-textPrimary text-white py-2 px-10 rounded-md border hover:bg-white hover:text-textPrimary hover:border-black">
          Login
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
