use image::{DynamicImage::{self, *}, GenericImageView, ImageBuffer, imageops, Pixel, Rgb, RgbaImage, RgbImage};
use image::buffer::ConvertBuffer;
use image::imageops::FilterType;

#[derive(Default)]
pub struct YUV {
    pub y: Vec<u8>,
    pub u: Vec<u8>,
    pub v: Vec<u8>,
}

pub fn from_image(image: &DynamicImage) -> YUV {
    let image = match image {
        ImageLuma8(image) => image.convert(),
        ImageLumaA8(image) => image.convert(),
        ImageLuma16(image) => image.convert(),
        ImageLumaA16(image) => image.convert(),
        ImageRgb8(image) => image.convert(),
        ImageRgba8(image) => image.convert(),
        ImageRgb16(image) => image.convert(),
        ImageRgba16(image) => image.convert(),
        ImageBgr8(image) => image.convert(),
        ImageBgra8(image) => image.convert(),
    };

    from_rgb8(&image)
}

pub fn from_rgba8_raw(data: &[u8], width: usize, height: usize) -> YUV {
    let image = RgbaImage::from_raw(
        width as u32,
        height as u32,
        Vec::from(data),
    ).unwrap();
    from_rgb8(&image.convert())
}

fn from_rgb8(image: &RgbImage) -> YUV {
    let mut yuv = YUV::default();

    for rgb in image.pixels() {
        yuv.y.push(rgb8_to_y(rgb));
    }

    for rgb in subsampled(image).pixels() {
        let (u, v) = rgb8_to_uv(rgb);
        yuv.u.push(u);
        yuv.v.push(v);
    }

    yuv
}

fn subsampled<I: GenericImageView>(
    image: &I
) -> ImageBuffer<I::Pixel, Vec<<I::Pixel as Pixel>::Subpixel>>
    where
        I::Pixel: 'static,
        <I::Pixel as Pixel>::Subpixel: 'static {
    let (w, h) = image.dimensions();
    imageops::resize(image, w / 2, h / 2, FilterType::Triangle)
}

fn rgb8_to_y(rgb: &Rgb<u8>) -> u8 {
    let r = rgb.0[0] as i32;
    let g = rgb.0[1] as i32;
    let b = rgb.0[2] as i32;

    (((66 * r + 129 * g + 25 * b + 128) >> 8) + 16) as u8
}

fn rgb8_to_uv(rgb: &Rgb<u8>) -> (u8, u8) {
    let r = rgb.0[0] as i32;
    let g = rgb.0[1] as i32;
    let b = rgb.0[2] as i32;

    (
        (((-38 * r - 74 * g + 112 * b + 128) >> 8) + 128) as u8,
        (((112 * r - 94 * g - 18 * b + 128) >> 8) + 128) as u8,
    )
}
