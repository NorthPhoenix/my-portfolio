import type { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; label: string }> = ({
  children,
  label,
}) => {
  return (
    <div className="rounded-lg bg-[#EEE] px-4 py-6 text-[13px]">
      <h5 className="font-bold">{label}</h5>

      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Card;
