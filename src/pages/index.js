import { useEffect } from "react";

export default function Home() {
  // Redirect to intro docs
  useEffect(() => {
    window.location.href = "/docs/intro";
  }, []);

  return null;
}
