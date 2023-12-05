const AboutMe = () => {
return (
    <div className="w-screen bg-red-500 py-10 flex flex-col">
        <div className="flex flex-col px-6">
            <h2 className="text-lg font-bold text-white font-dela-gothic pb-5">
                About Me
            </h2>
            <p className="text-sm font-black text-black">
                I&apos;m a full-stack web developer based in New York City. I have a
                passion for building beautiful, responsive, and accessible websites
                and web applications. 
            </p>
            <div className="mt-8 space-x-4 flex sm:flex-col md:flex-row"></div>
        </div>
    </div>
);
};

export default AboutMe;
