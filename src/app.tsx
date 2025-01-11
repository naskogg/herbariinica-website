import "./app.css";
import background from "./assets/background.svg";
import page1group1 from "./assets/page1group1.svg";
import page1group2 from "./assets/page1group2.svg";
import page1group3 from "./assets/page1group3.svg";
import page2group1 from "./assets/page2group1.svg";
import page2group2 from "./assets/page2group2.svg";

export function App() {
  return (
    <div
      className={"wrapper flex-col"}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class={"flex flex-col "}>
        <img className={"flex"} src={page1group1} alt="page1group1" />
        <img className={"flex"} src={page1group2} alt="page1group2" />
        <img className={"flex"} src={page1group3} alt="page1group3" />
      </div>
      <div class={"flex flex-col"}>
        <img className={"flex "} src={page2group1} alt="page2group1" />
        <img className={"flex"} src={page2group2} alt="page2group2" />
      </div>
    </div>
  );
}
