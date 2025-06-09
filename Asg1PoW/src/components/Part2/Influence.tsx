import useInput from "../../hooks/useInput";

const Influence2 = () => {
  const username = useInput("");
  const password = useInput("");
  const likes = useInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `first ma: ${username.input}, sahit: ${password.input}, ani likes chai: ${likes.input}`
    );

    username.reset();
    password.reset();
    likes.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-300 shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Influence Form</h2>

        <label htmlFor="username">Username:</label>
        <input
          className="bg-gray-100 text-lg px-3 py-2 rounded"
          value={username.input}
          name="username"
          onChange={username.onChange}
          type="text"
        />

        <label htmlFor="likes">Likes:</label>
        <input
          className="bg-gray-100 text-lg px-3 py-2 rounded"
          value={likes.input}
          type="text"
          name="likes"
          onChange={likes.onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          className="bg-gray-100 text-lg px-3 py-2 rounded"
          value={password.input}
          name="password"
          type="password"
          onChange={password.onChange}
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white text-lg py-2 px-4 rounded mt-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Influence2;
