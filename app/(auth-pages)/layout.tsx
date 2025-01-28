import NavBarAdmin from "@/components/MadeInHand/Admin/NavBarAdmin";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBarAdmin />
      <div className="flex min-h-screen flex-col justify-between pt-24 ">
        {children}
      </div>
    </div>
  );
}
