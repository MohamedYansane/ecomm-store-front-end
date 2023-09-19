import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

//Todo we need to revalidate so that we won't have any cached
const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  //* It gonna take a searchParams cause we will be able
  //* to filter by color etc,

  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

/**
 *@Todo our function that content two props we extract
  from the interface
 *
 * @param {*} {
 *   params,
 *   searchParams, //*It will allow us to filter by color and size 
 * }
 * @return {*} 
 */
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  //so now let's filter by the product
  //in our product we r passing  arguments from specific props
  //* like CategoryId which is from  params.categoryId,
  //* and ColorId which is from  searchParams.colorId etc
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  //after creating the products so now let's go
  //and create our actions getSizes and getColors
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            {/**so now we gonna rendered individual product based on our filter selected */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
