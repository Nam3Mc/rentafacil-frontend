"use client";

import Image from "next/image";

import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import { ImagePlus, Star } from "lucide-react";

import { UploadedMedia } from "@/types/media.types";

export function PropertyImageUpload() {
  const [images, setImages] = useState<
    UploadedMedia[]
  >([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newImages = acceptedFiles.map(
        (file, index) => ({
          id: crypto.randomUUID(),

          file,

          preview:
            URL.createObjectURL(file),

          isFeatured:
            images.length === 0 &&
            index === 0,
        })
      );

      setImages((prev) => [
        ...prev,
        ...newImages,
      ]);
    },
    [images]
  );

  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/*": [],
      },

      multiple: true,
    });

  function setFeaturedImage(
    id: string
  ) {
    setImages((prev) =>
      prev.map((image) => ({
        ...image,

        isFeatured:
          image.id === id,
      }))
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Upload Zone */}
      <div
        {...getRootProps()}
        className="flex min-h-[260px] cursor-pointer items-center justify-center rounded-[2rem] border-2 border-dashed border-border bg-muted transition-all hover:border-primary hover:bg-primary/5"
      >
        <input {...getInputProps()} />

        <div className="text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
            <ImagePlus className="size-8 text-primary" />
          </div>

          <p className="mt-6 text-lg font-semibold">
            Arrastra imágenes aquí
          </p>

          <p className="mt-2 text-muted-foreground">
            PNG, JPG o WEBP
          </p>
        </div>
      </div>

      {/* Preview Grid */}
      {images.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.preview}
                  alt="Property image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Actions */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-4">
                
                <button
                  type="button"
                  onClick={() =>
                    setFeaturedImage(
                      image.id
                    )
                  }
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all ${
                    image.isFeatured
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/10 text-white backdrop-blur-sm"
                  }`}
                >
                  <Star className="size-4" />

                  {image.isFeatured
                    ? "Principal"
                    : "Marcar principal"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}