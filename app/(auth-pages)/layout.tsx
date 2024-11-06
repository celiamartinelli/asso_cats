import NavBarAdmin from "@/components/MadeInHand/Admin/NavBarAdmin";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBarAdmin />
      <div className="max-w-7xl flex flex-col gap-12 items-start">
        {children}
      </div>
    </div>
  );
}
