import { pageMetadata } from "@/lib/metadata";
import { HireHome } from "@/components/hire/hire-home";

export const metadata = pageMetadata("uz", "hire");

export default function Page() {
  return <HireHome locale="uz" />;
}
