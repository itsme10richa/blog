export default function Suggestions() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <form action="" method="post" className="bg-white p-5">
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            id="first_name"
            name="firstname"
            required
            pattern="^[A-Za-z0-9]+$"
            className="border border-black rounded w-full"
          />
        </div>
        <br />
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            id="last_name"
            name="lastname"
            required
            pattern="^[A-Za-z0-9]+$"
            className="border border-black rounded w-full"
          />
        </div>
        <br />
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            pattern="^[A-Za-z0-9]+$"
            className="border border-black rounded w-full"
          />
        </div>
        <br />
        <div>
          <label htmlFor="suggestion">Suggestion: </label>
          <textarea
            name="suggestion"
            id="suggestion"
            required
            className="border border-black rounded w-full"
          />
        </div>
        <div>
          <input
            type="submit"
            className="w-full bg-primary p-2 text-white mt-5 font-bold"
          />
        </div>
      </form>
    </div>
  );
}
