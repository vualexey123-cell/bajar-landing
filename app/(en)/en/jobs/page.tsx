import { pageMetadata } from "@/lib/metadata";
import { JobsHome } from "@/components/jobs/jobs-home";

export const metadata = pageMetadata("en", "jobs");

export default function Page() {
  return <JobsHome locale="en" />;
}
