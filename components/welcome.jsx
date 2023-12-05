const Welcome = () => {
  return (
    <div className="w-screen bg-white py-20 pt-40 flex flex-col">
      <label className="swap swap-flip text-7xl pb-8">
        <input type="checkbox" />

        <div className="swap-on font-dela-gothic">🏎️</div>
        <div className="swap-off font-dela-gothic">💻</div>
      </label>
      <div className="flex flex-col items-center">
        <h1 className=" text-center font-bold text-black font-dela-gothic sm:text-xl md:text-6xl">
          Kevin Lai, <br />
          Full-Stack Web Developer
        </h1>
        <div className="mt-8 space-x-4 flex sm:flex-col md:flex-row">
          <button className="btn text-orange-400 mb-4 sm:mb-0 bg-black">
            View Projects
          </button>
          <button className="btn text-slate-100 bg-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
