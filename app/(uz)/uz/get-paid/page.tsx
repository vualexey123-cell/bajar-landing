import { pageMetadata } from "@/lib/metadata";
import { GetPaidHome } from "@/components/getpaid/getpaid-home";

export const metadata = pageMetadata("uz", "getpaid");

export default function Page() {
  return <GetPaidHome locale="uz" />;
}
