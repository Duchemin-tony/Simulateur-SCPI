import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icon, ...props }, ref) => {
    return (
        <div className="relative ">
            <input
                ref={ref}
                {...props}
                className="pr-10 border-2 border-blue-600 rounded-md px-4 py-2 text-2xl text-blue-600 font-semibold  bg-blue-50 focus:outline-none focus:ring-0 !appearance-none"
            />
            {icon && (
                <span className="absolute inset-y-0 right-3 flex items-center text-2xl text-blue-600">{icon}</span>
            )}
        </div>
    );
});

Input.displayName = "Input";
export { Input };
