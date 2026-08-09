import CreateDraftForm from "@/components/fantasy/create/CreateDraftForm";
import Nav from "@/components/fantasy/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Draft",
  description: "Create a new All-Star fantasy draft.",
};

export default function CreateDraftPage() {
  return (
    <div className="mx-auto w-full px-6 text-center">
      <Nav />
      <CreateDraftForm />
    </div>
  );
}
