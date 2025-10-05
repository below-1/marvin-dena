import { Photo, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "image1.3008x4512.webp", alt: "a" },
  { src: "image2.4512x3008.webp", alt: "b" },
  { src: "image3.3552x5328.webp", alt: "c" },
  { src: "image4.3680x5520.webp", alt: "c" },
  { src: "image5.3680x5520.webp", alt: "c" },
  { src: "image6.3923x3302.webp", alt: "c" },
  { src: "image7.5520x3680.webp", alt: "c" },
  { src: "image8.2949x4423.webp", alt: "c" },
  { src: "image9.5520x3680.webp", alt: "c" },
  { src: "image10.4752x3618.webp", alt: "c" },
  { src: "image11.3680x5520.webp", alt: "c" },
  { src: "image12.5520x3680.webp", alt: "c" },
  { src: "image13.5520x3680.webp", alt: "c" },
  { src: "image14.2857x4285.webp", alt: "c" },
  { src: "image15.3008x4512.webp", alt: "c" },
  { src: "image16.3008x4512.webp", alt: "c" },
  { src: "image17.3008x4512.webp", alt: "c" },
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

  const path = matcher[1];
  const width = Number.parseInt(matcher[2], 10);
  const height = Number.parseInt(matcher[3], 10);
  const extension = matcher[4];

  return { src: imageLink(path, width, height, width, extension), width, height, ...rest } as Photo;
});


export function GalleryMasonry() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <RowsPhotoAlbum 
        photos={photos} 
        targetRowHeight={250} 
        spacing={8}
        onClick={({ index }) => setIndex(index)} 
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

function imageLink(path: string, width: number, height: number, size: number, extension: string) {
  return `/images/gallery/${path}.${width}x${height}.${extension}`;
}