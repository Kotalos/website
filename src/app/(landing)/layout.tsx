import React from "react";
import Header from "../../components/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      {/* Add your footer or other common elements here */}
    </div>
  );
}
