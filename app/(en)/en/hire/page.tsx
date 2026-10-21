import { pageMetadata } from "@/lib/metadata";
import { HireHome } from "@/components/hire/hire-home";

export const metadata = pageMetadata("en", "hire");

export default function Page() {
  return <HireHome locale="en" />;
}
