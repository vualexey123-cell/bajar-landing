import { localeMetadata } from "@/lib/metadata";
import { RootDocument } from "@/components/root-document";

export const metadata = localeMetadata("en");
export { viewport } from "@/lib/metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
