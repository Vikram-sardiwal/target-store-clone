import img from "../assetsthree/GUEST_ca8f1d56-9000-4407-be78-2c33be983dab.svg";
export default function FooterLogin() {
  return (
    <>
      <div className="flex justify-center items-center bg-mist-100 mt-3">
        <img src={img} />
      </div>
      <div className="bg-black text-white  p-3 ">
        <ul className="flex justify-between items-center">
          <li>Terms</li>
          <li>CA Supply Chain</li>
          <li>Privacy Policy</li>
          <li>Your CA Privacy Rights</li>
          <li>Your Privacy Choices</li>
          <li>Health Privacy Policy</li>
          <li>TM & © 2026 Target Brands, Inc.</li>
        </ul>
      </div>
    </>
  );
}
