import Navbar from "@/components/Navbar/Navbar";


export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div >
<Navbar/>
       <main> {children}</main>
      </div>

  );
}