import "./app.css";
import background from "./assets/background.png";
import page1group1 from "./assets/page1group1.png";
import page1group2 from "./assets/page1group2.png";
import page1group3 from "./assets/page1group3.png";
import page2group1 from "./assets/page2group1.png";
import page2group2 from "./assets/page2group2.png";
import page2group3 from "./assets/page2group3.png";
import page2group4 from "./assets/page2group4.png";

export function App() {
  return (
    <div
      className={"wrapper"}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <img src={page1group1} alt="page1group1" />
        <img src={page1group2} alt="page1group2" />
        <img src={page1group3} alt="page1group3" />
      </div>
      <div>
        <img src={page2group1} alt="page2group1" />
        <img src={page2group2} alt="page2group2" />
        <span className={""}>
          Вие сте щастлив човек, щом имате кого да зарадвате.Пожелаваме ви
          прекрасни поводи и вълшебни празници, изпълнени с обич и радост!
        </span>
      </div>
      <div>
        <img src={page2group3} alt="page2group3" />
        <img src={page2group4} alt="page2group4" />
        <span>
          Празнувай всеки миг! „Нямам повод“ не е оправдание. Украси дома на
          своите близки, създай топлина и уют. Направи така, че спомените да
          останат – това е най-ценното. Всичко друго отминава
        </span>
      </div>
    </div>
  );
}
