import Image from "next/image";
import React from "react";

export default function Button({
  size = "small",
  variant = "primary",
  children,
  iconLeft,
  iconRight,
  iconOnly = false,
  disabled = false,
}) {
  const sizes = {
    small: `py-1.5 px-4 text-xs`,
    medium: `py-2.5 px-4 text-sm`,
    large: `py-3.5 px-6 text-base`,
  };

  const iconOnlySizes = {
    small: `w-8 h-8 p-2`,
    medium: `w-10 h-10 p-2.5`,
    large: `w-12 h-12 p-3`,
  };

  const iconSizes = {
    withText: {
      small: 12,
      medium: 14,
      large: 18,
    },
    iconOnly: {
      small: 16,
      medium: 18,
      large: 20,
    },
  };

  const variants = {
    primary: `text-white bg-primary-500 active:bg-primary-700 border border-transparent focus:border-button-border-active ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`,
    secondary: `bg-white border text-secondary-400 hover:border-secondary-400 hover:text-secondary-500 active:bg-primary-100 active:border-secondary-300 ${disabled
        ? "border-primary-100 cursor-not-allowed"
        : "border-secondary-300 cursor-pointer"
      }`,
    minimal: {
      small: `border border-transparent text-secondary-200 hover:bg-white hover:text-secondary-500 active:bg-primary-100 focus:border-secondary-200 ${disabled ? "text-secondary-400 cursor-not-allowed" : "cursor-pointer"
        }`,
      medium: `border border-transparent text-secondary-300 hover:bg-white hover:text-secondary-500 active:bg-primary-100 focus:border-secondary-200 ${disabled ? "text-secondary-200 cursor-not-allowed" : "cursor-pointer"
        }`,
      large: `border border-transparent text-secondary-300 hover:bg-primary-100 hover:text-secondary-500 active:bg-[#90A3BF] focus:border-primary-100 focus:text-secondary-500 ${disabled ? "text-secondary-200 cursor-not-allowed" : "cursor-pointer"
        }`,
    },
  };

  const variantClass =
    variant === "minimal" ? variants.minimal[size] : variants[variant];

  const iconSize = iconOnly
    ? iconSizes.iconOnly[size]
    : iconSizes.withText[size];

  return (
    <button
      disabled={disabled}
      className={`${iconOnly ? iconOnlySizes[size] : sizes[size]
        } ${variantClass} font-semibold rounded-md flex justify-center items-center transition-colors ${iconOnly ? "" : "gap-2"
        }`}
    >
      {iconLeft && (
        <Image
          src={iconLeft}
          alt="icon-left"
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      )}
      {!iconOnly && children}
      {iconRight && (
        <Image
          src={iconRight}
          alt="icon-right"
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      )}
    </button>
  );
}
