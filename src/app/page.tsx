import { redirect } from "next/navigation";
import Link from "next/link";

export default function App() {
  redirect("/dashboard");

  return null;
}
