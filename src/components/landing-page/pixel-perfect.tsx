import PixelPerfectIso from "../cool-stuff/pixel-perfect-iso";

const PixelPerfect = () => {
  return (
    <>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Pixel Perfect</header>
        <div className="w-full mt-3 rounded-lg border border-dashed overflow-hidden relative">
          <PixelPerfectIso />
          <video
            autoPlay
            muted
            loop
            src="https://res.cloudinary.com/dz12pywzs/video/upload/v1768638799/Timeline_1_tykewr.mov"
          ></video>
        </div>
      </section>
    </>
  );
};

export default PixelPerfect;
