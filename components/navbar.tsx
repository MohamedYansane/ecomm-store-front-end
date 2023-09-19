import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
//after hard refresh it allows me to never cached revalidate = 0
export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="borer-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          {/**with the main nav we gonna render our routes */}
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
