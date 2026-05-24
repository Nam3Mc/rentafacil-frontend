"use client";

import Image from "next/image";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { useDropzone } from "react-dropzone";

import {
  ImagePlus,
  Star,
} from "lucide-react";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

interface UploadedMedia {
  id: string;
  file?: File;
  preview: string;
  isFeatured: boolean;
}

export function PropertyImageUpload() {
  const [images, setImages] =
    useState<UploadedMedia[]>([]);

  const {
    draft,
    updateDraft,
  } =
    usePropertyPublicationStore();

  useEffect(() => {
    if (
      images.length === 0 &&
      draft.images?.length
    ) {
      setImages(
        draft.images.map((image, index) => ({
          id: `existing_${index}`,
          file: undefined,
          preview: image,
          isFeatured: index === 0,
        }))
      );
    }
  }, [draft.images, images.length]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newImages =
        acceptedFiles.map((file, index) => ({
          id: crypto.randomUUID(),
          file,
          preview:
            URL.createObjectURL(file),
          isFeatured:
            images.length === 0 &&
            index === 0,
        }));

      setImages((prev) => [
        ...prev,
        ...newImages,
      ]);
    },
    [images.length]
  );

  const {
    getRootProps,
    getInputProps,
  } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple: true,
    });

  function setFeaturedImage(id: string) {
    setImages((prev) => {
      const updated =
        prev.map((image) => ({
          ...image,
          isFeatured:
            image.id === id,
        }));

      const featured =
        updated.find(
          (image) => image.id === id
        );

      const rest =
        updated.filter(
          (image) => image.id !== id
        );

      return featured
        ? [featured, ...rest]
        : updated;
    });
  }

  useEffect(() => {
    if (images.length === 0) {
      return;
    }

    updateDraft({
      images: images.map(
        (image) => image.preview
      ),
    });
  }, [images, updateDraft]);

  return (
    <div className="space-y-8">
      <div
        {...getRootProps()}
        className="flex min-h-[220px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted transition-all hover:border-primary hover:bg-primary/5"
      >
        <input {...getInputProps()} />

        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
            <ImagePlus className="size-7 text-primary" />
          </div>

          <p className="mt-5 font-semibold">
            Arrastra imágenes aquí
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            PNG, JPG o WEBP
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.preview}
                  alt="Property image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3">
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
                    : "Principal"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}