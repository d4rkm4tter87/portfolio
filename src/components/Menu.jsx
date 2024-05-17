import { useState } from "react";

const Menu = (props) => {
  // const page = props.page;
  const skillBoxes = [
    { id: 0, name: "React", type: "mirror1 font3" },
    { id: 1, name: "CakePHP", type: "mirror1 font3" },
    { id: 2, name: "Wordpress", type: "mirror1 font3" },
    { id: 3, name: "Joomla", type: "mirror1 font3" },
    { id: 4, name: "Git", type: "mirror1 font3" },
    { id: 5, name: "Drupal", type: "mirror1 font3" },
    { id: 6, name: "Symfony", type: "mirror1 font3" },
  ];
  const projectBoxes = [
    { id: 0, name: "Tsumego Hero", type: "mirror2 font3" },
    { id: 1, name: "Go in Bremen", type: "mirror2 font3" },
    { id: 2, name: "Game Hub", type: "mirror2 font3" },
    { id: 3, name: "Staiker Equity", type: "mirror2 font3" },
    { id: 4, name: "Petersen Hardraht", type: "mirror2 font3" },
    { id: 5, name: "Game Reviewer", type: "mirror2 font3" },
    { id: 6, name: "City Dating", type: "mirror2 font3" },
  ];
  const [menu, setMenu] = useState(projectBoxes);
  const [submenu, setSubmenu] = useState("");
  return (
    <>
      <div className="c">
        <div className="c1">
          <div className="boxProjects2">
            <p>
              <div
                className="neon1 font2"
                onClick={() => setMenu(projectBoxes)}
              >
                Projects
              </div>
            </p>
          </div>
          {menu.map((b, i) => (
            <div className="boxProjects2" key={b.id}>
              <p
                className={b.type}
                onClick={() => {
                  props.onPageClicked && props.onPageClicked(b.name);
                }}
                onMouseEnter={() =>
                  b.name === "React" &&
                  setSubmenu(
                    "Redux React-Query MobX Firebase Jest Chakra Material-UI Tailwind"
                  )
                }
                onMouseLeave={() => setSubmenu("")}
              >
                {b.name}
              </p>
              {b.name === "React" && (
                <div className="react-submenu" align="left">
                  <p className="mirror1 font4">{submenu}</p>
                </div>
              )}
            </div>
          ))}
          <div className="boxProjects2">
            <p>
              <div className="neon2 font2" onClick={() => setMenu(skillBoxes)}>
                Skills
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
