import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center lg:flex-row lg:items-start overflow-hidden bg-gradient-to-b from-white to-primary/10">
      {/* Header Section */}
      <div className="w-full lg:w-1/2">
        <div className="mt-8 lg:mt-40 text-center px-4 z-10">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">
            Kenalin Aku Sphero !
          </h1>
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold text-base max-w-48 lg:max-w-54 lg:text-lg text-right">
              Ayok Mulai Perjalanan Kita Menuju Bumi Sehat
            </p>
            <img
              className="w-10 h-10 lg:w-12 lg:h-12"
              src="/Auth/Bumi.png"
              alt="bumi"
            />
          </div>
        </div>

        {/* Background */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <div className="flex justify-center items-center w-full lg:w-1/2 h-90  pb-2 lg:h-60 rounded-t-[50%] lg:rounded-tr-[250%] scale-160 lg:scale-140 bg-[#228C22]/40">
            <div className="w-35 top-0 -ml-5 -mt-15 md:-mt-13  absolute z-10">
              <img
                className="w-full h-full object-cover"
                src="/Auth/Sphero.png"
                alt="Sphero"
              />
            </div>
            <div className="lg:hidden">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 h-screen justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
