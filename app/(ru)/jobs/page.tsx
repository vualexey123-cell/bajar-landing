import { pageMetadata } from "@/lib/metadata";
import { JobsHome } from "@/components/jobs/jobs-home";

export const metadata = pageMetadata("ru", "jobs");

export default function Page() {
  return <JobsHome locale="ru" />;
}
