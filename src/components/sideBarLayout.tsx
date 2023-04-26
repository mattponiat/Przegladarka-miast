import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const SideBarLayout = ({ children }: Props) => {
  return (
    <div className="h-full w-full max-w-sm border-r border-gray-200 px-2 pl-14 text-sm text-slate-900">
      {children}
    </div>
  );
};

export default SideBarLayout;
