import { useState } from "react";
import { Link, useLocation } from "react-router";
import EyeButton from "./eyeButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./Schema";

const Register = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("Data dikirim:", data);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-70 min-w-50 lg:min-w-md shadow-md rounded-lg text-foreground">
      <div className="w-full flex text-[10px] lg:text-base xl:text-lg">
        <Link
          to="/login"
          className={`w-full flex items-center justify-center py-1 text-foreground rounded-t-lg overflow-hidden ${
            isActive("/login") ? "bg-background" : "bg-white"
          }`}
        >
          Masuk
        </Link>
        <Link
          to="/register"
          className={`w-full flex items-center justify-center py-1 text-foreground rounded-t-lg overflow-hidden ${
            isActive("/register") ? "bg-background" : "bg-white"
          }`}
        >
          Daftar
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-white p-3 text-[9px] lg:text-sm xl:text-base space-y-1.5 rounded-b-lg">
          {/* Nama */}
          <div className="space-y-0.5 flex flex-col">
            <label htmlFor="display_name">Nama</label>
            <input
              type="text"
              id="display_name"
              {...register("display_name")}
              placeholder={
                errors.display_name ? errors.display_name.message : "Masukkan Nama"
              }
              autoComplete="off"
              className={`border-b outline-none placeholder:text-gray-400 ${
                errors.display_name ? "placeholder:text-red-500 border-red-500" : ""
              }`}
            />
          </div>

          {/* Email */}
          <div className="space-y-0.5 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder={errors.email ? errors.email.message : "Masukkan Email"}
              autoComplete="off"
              className={`border-b outline-none placeholder:text-gray-400 ${
                errors.email ? "placeholder:text-red-500 border-red-500" : ""
              }`}
            />
          </div>

          {/* Password */}
          <div className="space-y-0.5 flex flex-col">
            <label htmlFor="password">Password</label>
            <div
              className={`relative pb-0.5 border-b w-full ${
                errors.password ? "border-red-500" : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                placeholder={
                  errors.password ? errors.password.message : "Masukkan Password"
                }
                autoComplete="off"
                className={`border-none w-[85%] outline-none placeholder:text-gray-400 ${
                  errors.password ? "placeholder:text-red-500" : ""
                }`}
              />
              <EyeButton
                isSubmitting={isSubmitting}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-1 rounded-md bg-primary/20 hover:bg-primary/30"
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
