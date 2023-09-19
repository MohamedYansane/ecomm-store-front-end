"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util";

interface FilterProps {
  valueKey: string;
  data: (Size | Color)[];
  name: string;
}
const Filter: React.FC<FilterProps> = ({ valueKey, data, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  //*now let get the current selected value
  const selectedValue = searchParams.get(valueKey);
  /**
   *Todo the onclick function gonna take care of filter
   ** so what gonna happen if the user click in any filter we gonna look
   ** if any filter exists in the url using our current variable
   ** and the add the new filter using our query variable
   * @param {string} id
   */

  const onClick = (id: string) => {
    //*so let get the query and see if any query is in the url ?=
    const current = qs.parse(searchParams.toString());
    //
    const query = { ...current, [valueKey]: id };
    //** if the current[valueKey] is equal to id it means that
    //** the user clicked on the filter that's is currently active **/
    if (current[valueKey] === id) {
      //so if he clicked again the selected value we remove or unactive the current value
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
