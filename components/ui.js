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
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"

  const variants = {
    default: "bg-blue-electric text-white hover:bg-blue-electric-dark",
    outline: "border border-blue-electric/50 bg-transparent text-blue-electric hover:bg-blue-electric/10 hover:text-blue-electric",
    ghost: "hover:bg-neutral-800 hover:text-white text-neutral-400",
  }

  const getButtonStyle = () => {
    switch (variant) {
      case "default":
        return {
          backgroundColor: "#00D4FF",
          color: "white",
        }
      case "outline":
        return {
          borderColor: "#00D4FF50",
          backgroundColor: "transparent",
          color: "#00D4FF",
        }
      default:
        return {}
    }
  }

  const handleMouseEnter = (e) => {
    if (variant === "default") {
      e.target.style.backgroundColor = "#0099CC"
    } else if (variant === "outline") {
      e.target.style.backgroundColor = "#00D4FF10"
      e.target.style.color = "#00D4FF"
    }
  }

  const handleMouseLeave = (e) => {
    if (variant === "default") {
      e.target.style.backgroundColor = "#00D4FF"
    } else if (variant === "outline") {
      e.target.style.backgroundColor = "transparent"
      e.target.style.color = "#00D4FF"
    }
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      style={getButtonStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  )
}

export const Badge = ({ className = "", children }) => (
  <div
    className={`inline-flex items-center rounded-full border border-neutral-600 bg-neutral-800 px-2.5 py-0.5 text-xs font-semibold text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-electric focus:ring-offset-2 ${className}`}
    style={{ 
      "--focus-ring-color": "#00D4FF"
    }}
  >
    {children}
  </div>
)