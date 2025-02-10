

const TextField = ({
  id,
  title,
  type,
  icon,
  suffixIcon,
  placeholder,
  required,
  onChange,
  value,
  isDisabled,
  errorMessage,
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      {title && (
        <p className="text-[#252525] text-[14px] font-medium">{title}</p>
      )}
      <div className="mb-5 relative w-full">
        {icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src={icon} width={20} height={20} alt="icon" className="w-[20px] h-[20px]" />
          </div>
        )}
        <textarea
          type={type}
          id={id}
          className={
            "py-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#27B973] focus:border-[#27B973] block w-full p-2.5 placeholder-[#68727D] text-[16px]" +
            (isDisabled
              ? " cursor-not-allowed bg-[#DEDEDE] text-[#808080]"
              : "") +
            (icon && " ps-12")
          }
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...props}
        />

        {suffixIcon && (
          <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
            <Image src={suffixIcon} width={20} height={20} alt="icon" />
          </div>
        )}

        {/* {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )} */}
      </div>
    </div>
  );
};

export default TextField;
