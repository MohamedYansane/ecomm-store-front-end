"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(!isMounted);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <p className="font-semibold text-xl text-gray-900">
      {formatter.format(Number(value))}
    </p>
  );
};

export default Currency;
