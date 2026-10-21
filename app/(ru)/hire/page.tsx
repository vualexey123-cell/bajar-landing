import { pageMetadata } from "@/lib/metadata";
import { HireHome } from "@/components/hire/hire-home";

export const metadata = pageMetadata("ru", "hire");

export default function Page() {
  return <HireHome locale="ru" />;
}
