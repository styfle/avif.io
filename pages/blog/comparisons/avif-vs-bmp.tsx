import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }

  return (
    <Blog
      postMeta={meta.avifVsBmp}
      posts={[meta.avifVsJpg, meta.avifVsWebp, meta.avifVsPng]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      For those looking for a file format for their image delivery needs, two
      key contenders are vying for your attention: BMP and AVIF. Developed by
      Microsoft to store bitmap raster graphics on Windows independently of a
      system's graphics adapter, BMP (or Bitmap) is the format used for most
      graphics on Windows. Most BMP images tend to be uncompressed.
      <br />
      In the other corner, we have AVIF (AV1 Image File Format). First released
      in 2019, this relatively young image format is derived from the frames of
      the AV1 video codec.
      <br />
      AVIF was designed for efficient lossy compression and boasts a rich
      feature set. Its developers, the Alliance for Open Media (AOM), hope that
      the AVIF standard will become the dominant image format for web delivery.
      <br />
      Here's how these two image formats compare in feature-set, performance,
      and efficiency.
      <H level={2} callback={callback} text="Limits and Quality" />
      AVIF is derived from a video codec, and it shares some similar limitations
      to the AV1 video format.{" "}
      <b>AVIF boasts a maximum resolution of 65536 x 65536 pixels.</b>
      <br />
      It is possible to produce larger AVIF images than this maximum resolution
      by{" "}
      <b>
        independently encoding tiles and tiling them to create a larger image
      </b>
      . However, using this method introduces some artifacts at the borders of
      these individual frames, making AVIF unsuitable for large print images.
      <br />
      As for BMP, while the maximum resolution is usually up to debate and
      depends on which software you use to export the image, there is a
      <b>
        {" "}
        consensus that a realistic full resolution for BMP is 32,000 x 32,000
        pixels
      </b>
      . This is a significantly higher limit than AVIF; however, once we cover
      compression, it will become apparent it is impractical to create BMP
      images as large as this.
      <br />
      <b>
        AVIF supports wide color gamut images, including HDR (high dynamic
        range) photos.
      </b>{" "}
      This is a feature that BMP does not support. AVIF can support a
      <b>max bit depth of 10-bits</b>, whereas BMP images are usually limited to
      8-bit precision.
      <H level={2} callback={callback} text="Compression" />
      When BMP was first released with Windows 1, it did not support any
      compression, and all bitmap images were uncompressed. Microsoft eventually
      included a lossless compression method in the subsequent version of
      Windows in the form of RLE (or run-length encoding).{" "}
      <b>However, most BMP images remain uncompressed.</b>
      <br />
      However, the compression algorithm used in BMP encoding is much less
      efficient than more modern forms of lossless compression. This leads to
      BMP images having much larger file sizes than other image formats, even
      when compression is used.
      <br />
      AVIF supports both lossy and lossless compression. AVIF's lossless
      compression is much more efficient than BMP's, leading to great-looking
      graphics and lossless photos.
      <br />
      However, where AVIF shines the most is with{" "}
      <b>low-fidelity lossy compression</b>. With highly compressed images, AVIF
      retains detail and appeal much better than other image formats like JPEG.
      The appeal is simply the absence of compression artifacts like color
      banding and blockiness. This property makes AVIF a popular choice for web
      delivery due to the file format's small file size to quality ratio.
      <br />
      BMP doesn't support lossy compression, and therefore any bitmap file will
      have a drastically larger file size. For example, a 53.7MB BMP file can be
      converted using AVIF.io to become a 4.66MB file and retain its quality.
      That's a whopping 92% reduction for a photo file.
      <br />
      <b>
        {" "}
        The extortionate file sizes of BMP images, uncompressed and compressed
        with lossless compression, make the file format wholly unsuitable for
        web use.
      </b>{" "}
      AVIF features great lossless compression that yields images with much
      smaller file sizes for those unwilling to use lossy methods. However,
      AVIF's fantastic lossy compression algorithm means the format is perfect
      for web delivery and storage efficiency.
      <H level={2} callback={callback} text="Speed" />
      As most BMP images are uncompressed, the format boasts great encode
      speeds. Those working with BMP can easily save large batches of images
      without too much strain on their machines or time taken. Even for
      compressed BMP files, decode speeds are excellent, and most modern systems
      won't struggle with decoding even large bitmap images.
      <br />
      AVIF, on the other hand, is notoriously slow when it comes to single-core
      speeds, and slower hardware may struggle when decoding these images. AVIF
      does, however, support parallelization. This allows the image coder to use
      multi-threaded hardware and more than one CPU core to decode and encode
      AVIF images. As computer hardware tends towards higher core and thread
      counts, we expect AVIF's slow speeds to improve over time.
      <br />
      BMP is a much faster image format. However, this may not translate to
      being faster for end-users. With much larger file sizes, bitmaps take
      longer to transfer, both across the web and locally.
      <H level={2} callback={callback} text="Other Features" />
      AVIF is highly efficient for animated images. Given the format's relation
      to the AV1 video codec, sequenced AVIF images benefit from interframe
      compression, allowing smaller file sizes for animated AVIFs.
      <br />
      <b>AVIF also supports overlays and depth maps.</b> Overlays enable layers
      to help maintain the clarity of text and graphics over highly compressed
      photo backgrounds. Depth maps allow users to add effects to foregrounds
      and backgrounds.
      <br />
      Animation, overlays, and depth map support are entirely missing features
      with the BMP image format.
      <br />
      <b>Both AVIF and BMP support alpha transparency</b>, allowing both formats
      for transparent text and graphics.
      <H level={2} callback={callback} text="Support" />
      With BMP's uncompressed nature and large file sizes, it's no surprise that
      web use is minimal. <b>No major browser supports viewing BMP images.</b>
      <br />
      All major operating systems widely support the format, so downloaded or
      transferred BMP files will be viewable locally. But BMP's limited use
      means browsers have been unwilling to incorporate support for the image
      format.
      <br />
      Despite its young age, being released in 2019, AVIF's market uptake has
      been fast and impressive.{" "}
      <b>
        Google Chrome introduced full support for the image format in 2020, with
        Opera following shortly after.
      </b>{" "}
      Firefox is close to providing full support. Users can enable AVIF in the
      browser's config settings (although Firefox is yet to support sequenced
      AVIF images).
      <br />
      Safari and Microsoft Edge do not yet support AVIF. However, we expect once
      Chromium packs full support into its open-source code, that Edge Chromium
      will follow. On mobile, Samsung Internet, Chrome for Mobile, and the
      Android Browser all support AVIF. Safari is the only major mobile browser
      that is yet to support AVIF.
      <H level={2} callback={callback} text="Conclusion for Nerds" />
      BMP is a file format as old as Windows itself. Many image professionals
      can appreciate how integral the format allowed graphics to be used on the
      Windows GUI independently of a system's graphics adapter.
      <br />
      However, its limited feature set and lossy compression make BMP a poor
      contender for an all-purpose image format. Even with its rudimentary
      lossless data compression algorithm, BMP is inefficient, leading to large
      file sizes.
      <br />
      AVIF is a great all-rounder, boasting impressive features like good
      animation support, HDR, and wide gamut support, support for 4:4:4 (lossy).
      AVIF still has some way to get a whole house of web browser support, but
      we expect that the meteoric rise in market uptake will continue.
      <br />
      We believe AVIF is destined to replace JPEG to become the dominant image
      format. BMP, however, has no further use outside of icons on Windows. We
      wouldn't be surprised if Microsoft replaced BMP in favor of a modern
      lossless format to cut down on the OS size in a future Windows update.
      <H level={2} callback={callback} text="Conclusion for Marketeers" />
      The winner for the average user is straightforward:
      <b>
        {" "}
        AVIF is a solid contender to become the dominant image format. We expect
        it will go all the way to replace JPEG.
      </b>
      <br />
      AVIF offers very similar quality images using its excellent lossy
      compression algorithm as uncompressed BMP offers. Most users won't
      distinguish between lossy AVIF and uncompressed bitmap images, thanks to
      the high appeal of low-fidelity lossy AVIF images. Every day users will
      appreciate the excellent file size efficiency of AVIF, allowing them to
      store more photos and improve page load times for web delivery.
      <br />
      We expect that in the coming years, AVIF will go from strength to
      strength. We're sure that AVIF will add a few more browsers to its belt of
      full browser support, and web admins will start to take AVIF for web
      delivery seriously. AVIF is perfectly placed to become the definitive
      image format for image delivery.
    </Blog>
  );
}
