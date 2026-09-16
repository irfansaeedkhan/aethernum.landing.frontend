import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "./custom-button";
import { cn, getApiBaseUrl } from "@/lib/utils";
import { Button } from "./button";

const RISK_OPTIONS = [
  { label: "Low (capital preservation)", value: "low", api: "Low" },
  { label: "Moderate (balanced exposure)", value: "moderate", api: "Moderate" },
  {
    label: "High (speculative and volatile assets)",
    value: "high",
    api: "High",
  },
];
const ALLOCATE_OPTIONS = [
  { label: "$100 to $1,000", value: "100-1000", api: "100 to 1000" },
  { label: "$1,100 to $10,000", value: "1100-10000", api: "1000 to 10000" },
  { label: "$10,100 to $50,000", value: "10100-50000", api: "10000 to 50000" },
  { label: "$50,100 +", value: "50100+", api: "50000+" },
];
const INVESTOR_OPTIONS = [
  { label: "Passive holder", value: "passive", api: "Passive holder" },
  { label: "Active Crypto user", value: "active", api: "Active Crypto user" },
  { label: "Yield optimizer", value: "yield", api: "Yield optimizer" },
  { label: "On-chain trader", value: "onchain", api: "On-chain trader" },
  { label: "Builder / Dev", value: "builder", api: "Builder / Dev" },
  { label: "Researcher", value: "researcher", api: "Researcher" },
];
const AGE_OPTIONS = [
  { label: "18–24", value: "18-24", api: "18 to 24" },
  { label: "25–34", value: "25-34", api: "25 to 34" },
  { label: "35–44", value: "35-44", api: "35 to 44" },
  { label: "45+", value: "45+", api: "45+" },
];

export type ApplicationFormValues = {
  heardAbout: string;
  risk: string;
  allocation: string;
  investorType: string;
  age: string;
  reason: string;
  email: string;
};

interface ApplicationFormProps {
  onSuccess: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    mode: "onTouched",
    defaultValues: {
      heardAbout: "",
      risk: "",
      allocation: "",
      investorType: "",
      age: "",
      reason: "",
      email: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to map form values to API values
  function mapToApi(values: ApplicationFormValues) {
    return {
      referralSource: values.heardAbout,
      riskAppetite:
        RISK_OPTIONS.find((o) => o.value === values.risk)?.api || "",
      initialAllocation:
        ALLOCATE_OPTIONS.find((o) => o.value === values.allocation)?.api || "",
      investorType:
        INVESTOR_OPTIONS.find((o) => o.value === values.investorType)?.api ||
        "",
      ageRange: AGE_OPTIONS.find((o) => o.value === values.age)?.api || "",
      accessReason: values.reason,
      email: values.email,
    };
  }

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const apiData = mapToApi(data);
      window.open(
        "https://aethernum-dashboard.vercel.app/auth/login",
        "_blank"
      );
      onSuccess();
      reset();
      return;

      const apiBaseUrl = getApiBaseUrl();
      const res = await fetch(`${apiBaseUrl}/blockchain/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });
      if (!res.ok) {
        throw new Error("Submission failed. Please try again later.");
      }
      onSuccess();
      reset();
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-white text-sm mb-2 ">
          1. How did you hear about us?
        </label>
        <input
          {...register("heardAbout", { required: "This field is required" })}
          className={cn(
            "w-full bg-[#101514] rounded-full px-4 py-2 text-white placeholder:text-white/40 outline-none border border-transparent focus:border-primary transition",
            errors.heardAbout && "border-red-500"
          )}
          placeholder="Type here your answer"
        />
        {errors.heardAbout && (
          <p className="text-red-500 text-xs mt-1">
            {errors.heardAbout.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          2. What is your risk appetite?
        </label>
        <div className="flex flex-col gap-2 pl-3">
          {RISK_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="peer flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                value={opt.value}
                {...register("risk", { required: "Select one option" })}
                className="peer hidden"
              />
              <span
                className={cn(
                  "w-4 h-4 rounded-full border border-white flex items-center justify-center transition",
                  "bg-[#101514]",
                  "peer-checked:border-2 peer-checked:bg-brand-gold"
                )}
              ></span>
              <span className="text-white text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.risk && (
          <p className="text-red-500 text-xs mt-1">{errors.risk.message}</p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          3. How much are you considering to allocate initially (in USD)?
        </label>
        <div className="flex flex-col gap-2 pl-3">
          {ALLOCATE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                value={opt.value}
                {...register("allocation", { required: "Select one option" })}
                className="peer hidden"
              />
              <span
                className={cn(
                  "w-4 h-4 rounded-full border border-white flex items-center justify-center transition",
                  "bg-[#101514]",
                  "peer-checked:border-2 peer-checked:bg-brand-gold"
                )}
              ></span>
              <span className="text-white text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.allocation && (
          <p className="text-red-500 text-xs mt-1">
            {errors.allocation.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          4. What kind of investor/user are you?
        </label>
        <div className="flex flex-col gap-2 pl-3">
          {INVESTOR_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                value={opt.value}
                {...register("investorType", { required: "Select one option" })}
                className="peer hidden"
              />
              <span
                className={cn(
                  "w-4 h-4 rounded-full border border-white flex items-center justify-center transition",
                  "bg-[#101514]",
                  "peer-checked:border-2 peer-checked:bg-brand-gold"
                )}
              ></span>
              <span className="text-white text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.investorType && (
          <p className="text-red-500 text-xs mt-1">
            {errors.investorType.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          5. Your age range
        </label>
        <div className="relative">
          <Controller
            control={control}
            name="age"
            rules={{ required: "Select your age range" }}
            render={({ field }) => (
              <>
                <select
                  {...field}
                  className={cn(
                    "w-full bg-[#101514] rounded-2xl px-4 py-4 text-white outline-none border border-white focus:border-brand-gold transition appearance-none text-sm font-heading",
                    errors.age ? "border-red-500" : "",
                    !field.value ? "text-white/40" : ""
                  )}
                >
                  <option value="" disabled className="text-white/40 text-sm">
                    Your age
                  </option>
                  {AGE_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="text-white text-sm font-heading"
                      style={
                        field.value === opt.value
                          ? { color: "#FFAA21", fontWeight: 700 }
                          : {}
                      }
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </>
            )}
          />
        </div>
        {errors.age && (
          <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          6. Why do you want to access the protocol?
        </label>
        <textarea
          {...register("reason", {
            required: "This field is required",
            maxLength: { value: 280, message: "Max 280 characters" },
          })}
          className={cn(
            "w-full bg-[#101514] rounded-full px-4 py-2 text-white placeholder:text-white/40 outline-none border border-transparent focus:border-primary transition resize-none min-h-[48px]",
            errors.reason && "border-red-500"
          )}
          placeholder="Type here your answer"
          maxLength={280}
        />
        <div className="flex justify-end text-xs text-white/40 mt-1">
          {/* Show character count */}
        </div>
        {errors.reason && (
          <p className="text-red-500 text-xs mt-1">{errors.reason.message}</p>
        )}
      </div>
      <div>
        <label className="block text-white text-sm mb-2 ">
          7. Enter a secure email to receive your access key
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 100,
              message: "Email must be less than 100 characters",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className={cn(
            "w-full bg-[#101514] rounded-full px-4 py-2 text-white placeholder:text-white/40 outline-none border border-transparent focus:border-primary transition",
            errors.email && "border-red-500"
          )}
          placeholder="We'll use this to send your invitation key (if accepted)."
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
        <p className="text-xs text-white/40 mt-1">
          Note: we won&apos;t use your contact for anything else.
        </p>
      </div>
      {error && (
        <div className="text-red-500 text-center text-sm  mt-2">{`Something is wrong: ${error} `}</div>
      )}
      <button
        disabled={isSubmitting}
        className="bg-gradient-gold hover:opacity-90 text-brand-white font-semibold px-6 w-full mt-2 text-base py-3 uppercase rounded-full"
      >
        {isSubmitting ? "Submitting..." : "Request Invitation"}
      </button>
    </form>
  );
};
