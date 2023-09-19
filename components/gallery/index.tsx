"use client";
import NextImage from "next/image"; //*I renamed Image to NextImage
import { Tab } from "@headlessui/react";
import { Image } from "@/types";
import GalleryTab from "@/components/gallery/gallery-tab";

interface GalleryProps {
  images: Image[];
}

/**
 * *Installed the package npm i @headlessui/react their site https://headlessui.com/
 * it look like a litte bit like shadcn even though
 * shadcn is more large than it
 * Todo: Gallery Component that take an Image as props
 *@params Image
 * *While map images.map(image) we r retrieving an indicidual image
 * @return {*}
 */
const Gallery: React.FC<GalleryProps> = ({ images }): any => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
