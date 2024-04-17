import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import BillboardComponent from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7be8541b-36f7-4a72-989b-0eb0a75f3e9b");
  //console.log(products);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardComponent data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
