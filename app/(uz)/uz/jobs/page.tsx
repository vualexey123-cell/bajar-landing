import { pageMetadata } from "@/lib/metadata";
import { JobsHome } from "@/components/jobs/jobs-home";

export const metadata = pageMetadata("uz", "jobs");

export default function Page() {
  return <JobsHome locale="uz" />;
}
