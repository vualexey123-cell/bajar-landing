import { localeMetadata } from "@/lib/metadata";
import { RootDocument } from "@/components/root-document";

export const metadata = localeMetadata("uz");
export { viewport } from "@/lib/metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="uz">{children}</RootDocument>;
}
