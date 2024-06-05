import "./mainBox.css";
import MainLeft from "./mainLeft";
import MainMiddle from "./mainMiddle";
import MainRight from "./mainRight";

export default function MainBox() {
  return (
    <>
      <section className="mainbox">
        <MainLeft />
        <MainMiddle />
        <MainRight />
      </section>
    </>
  );
}
