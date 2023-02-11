import { ImageSlider } from "../components/ImageSlider";
export function ImageSliderPage() {
  const sources = [
    "img_1.jpeg",
    "img_2.png",
    "img_3.png",
    "img_4.png",
    "img_6.png",
  ];
  return (
    <>
      <h2 className="mb-5 mt-4">N 6 - Image slider</h2>
      <div className="d-flex justify-content-center">
        <ImageSlider sources={sources}></ImageSlider>
      </div>
    </>
  );
}
