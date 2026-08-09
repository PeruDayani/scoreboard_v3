import Nav from "@/components/fantasy/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fantasy Drafts",
  description: "Making the All-Star game matter.",
};

export default function FantasyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 text-center">
      <Nav />
    </div>
  );
}
