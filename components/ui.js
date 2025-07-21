"use client"

export const Card = ({ className = "", children, onClick }) => (
  <div
    className={`rounded-lg border border-neutral-700 bg-neutral-900 text-white shadow-sm ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
)

export const CardHeader = ({ className = "", children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
)

export const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight text-white ${className}`}>{children}</h3>
)

export const CardContent = ({ className = "", children }) => <div className={`p-6 ${className}`}>{children}</div>

export const Button = ({ className = "", variant = "default", children, onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"

  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-orange-500/50 bg-transparent text-orange-500 hover:bg-orange-500/10 hover:text-orange-400",
    ghost: "hover:bg-neutral-800 hover:text-white text-neutral-400",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export const Badge = ({ className = "", children }) => (
  <div
    className={`inline-flex items-center rounded-full border border-neutral-600 bg-neutral-800 px-2.5 py-0.5 text-xs font-semibold text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${className}`}
  >
    {children}
  </div>
)
