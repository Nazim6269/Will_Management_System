import React, { forwardRef, memo, useCallback } from "react";
import { EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { TextInputProps } from "@/types/inputType";
import { sizeConfig } from "@/components/tokens/tokens/input.size";
import { InputWrapper } from "./InputWrapper";
import { useInputId, usePasswordToggle } from "@/hooks";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/atoms/icons";
import { buildInputClass } from "@/components/atoms/input/input.styles";

export const GenericInput = forwardRef<HTMLInputElement, TextInputProps>(
  function GenericInput(
    {
      // Identity
      id: providedId,
      name,
      type = "text",
      // Layout
      size = "sm",
      variant = "outlined",
      fullWidth = false,
      // Wrapper/label
      label,
      wrapperClassName,
      labelClassName,
      errorClassName,
      helperClassName,
      // Feedback
      error,
      helperText,
      successText,
      required,
      // Slots
      prefix,
      suffix,
      prefixClassName,
      suffixClassName,
      requiredClassName,
      // Features

      loading = false,
      clearable = false,
      passwordToggle: passwordToggleProp,
      // State
      disabled = false,
      readOnly = false,
      // Input props
      value,
      defaultValue,
      onChange,
      inputClassName,
      className,
      placeholder,
      ...rest
    },
    ref,
  ) {
    const id = useInputId(providedId);
    const isPassword = type === "password";
    const isTextArea = type === "textarea";
    const isCheckbox = type === "checkbox";
    const showPasswordToggle = passwordToggleProp ?? isPassword;
    const { visible, toggle, inputType } = usePasswordToggle();

    const resolvedType = isPassword ? inputType : type;
    const hasError =
      !!error && (Array.isArray(error) ? error.length > 0 : true);
    const hasSuccess = !hasError && !!successText;

    if (isCheckbox) {
      return (
        <div
          className={cn(
            "flex items-start gap-3 cursor-pointer group py-1",
            wrapperClassName,
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              id={id}
              name={name}
              type="checkbox"
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              className={cn(
                "peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border border-borderColor/35 bg-blue10 transition-all checked:bg-blue66 checked:border-blue66 disabled:cursor-not-allowed disabled:opacity-50",
                inputClassName,
              )}
              {...rest}
            />
            <svg
              className="absolute h-3 w-3 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "text-sm text-cyan65 cursor-pointer select-none leading-5",
                labelClassName,
              )}
            >
              {label}
            </label>
          )}
        </div>
      );
    }

    const s = sizeConfig[size];

    // Whether there's a value (for clearable button)
    const hasValue =
      value !== undefined
        ? String(value).length > 0
        : defaultValue !== undefined
          ? String(defaultValue).length > 0
          : false;

    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        // Fire a synthetic change event with empty value
        const nativeInput = (ref as React.RefObject<HTMLInputElement>)?.current;
        if (nativeInput) {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value",
          )?.set;
          nativeInputValueSetter?.call(nativeInput, "");
          nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      },
      [ref],
    );

    // Build suffix: loading → password toggle → clear → user suffix
    const resolvedSuffix = loading ? (
      <Spinner className={cn(s.icon, "text-slate-400")} />
    ) : showPasswordToggle && isPassword ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={toggle}
        aria-label={visible ? "Hide password" : "Show password"}
        className={cn(
          "flex items-center justify-center  hover:text-slate-600 transition-colors",
          s.icon,
        )}
      >
        {visible ? (
          <EyeOffIcon className="text-[#C4B0FF]" />
        ) : (
          <EyeIcon className="text-[#C4B0FF]" />
        )}
      </button>
    ) : clearable && hasValue ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={handleClear}
        aria-label="Clear input"
        className={cn(
          "flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-full",
          s.icon,
        )}
      >
        <XIcon />
      </button>
    ) : (
      suffix
    );

    const hasSuffix = !!resolvedSuffix;
    const hasPrefix = !!prefix;

    const inputClass = buildInputClass({
      size,
      variant,
      hasError,
      hasSuccess,
      disabled,
      hasPrefix,
      hasSuffix,
      fullWidth,
      extra: inputClassName ?? className,
    });

    return (
      <InputWrapper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        successText={successText}
        required={required}
        requiredClassName={requiredClassName}
        fullWidth={fullWidth}
        wrapperClassName={wrapperClassName}
        labelClassName={labelClassName}
        errorClassName={errorClassName}
        helperClassName={helperClassName}
        size={size}
        disabled={disabled}
      >

        {/* Input + icon layer */}
        <div className="relative flex items-center">
          {/* Prefix */}
          {hasPrefix && (
            <span
              className={cn(
                "absolute left-0 flex items-center justify-center pointer-events-none",
                s.icon,
                "ml-3",
                prefixClassName,
              )}
            >
              {prefix}
            </span>
          )}

          {/* Input element */}
          {isTextArea ? (
            <textarea
              ref={ref as any}
              id={id}
              name={name}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange as any}
              placeholder={placeholder}
              aria-invalid={hasError ? "true" : undefined}
              aria-describedby={
                hasError
                  ? `${id}-error`
                  : helperText
                    ? `${id}-helper`
                    : undefined
              }
              className={cn(
                inputClass,
                "resize-none py-3 h-auto min-h-[120px]",
              )}
              rows={4}
              {...(rest as any)}
            />
          ) : (
            <input
              ref={ref}
              id={id}
              name={name}
              type={resolvedType}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
              placeholder={placeholder}
              aria-invalid={hasError ? "true" : undefined}
              aria-describedby={
                hasError
                  ? `${id}-error`
                  : helperText
                    ? `${id}-helper`
                    : undefined
              }
              className={inputClass}
              {...rest}
            />
          )}

          {/* Suffix */}
          {hasSuffix && (
            <span
              className={cn(
                "absolute right-0 flex items-center justify-center text-black dark:text-white",
                s.icon,
                "mr-3",
                suffixClassName,
              )}
            >
              {resolvedSuffix}
            </span>
          )}
        </div>
      </InputWrapper>
    );

  },
);
