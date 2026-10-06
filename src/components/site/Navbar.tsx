import StaggeredMenu from "./StaggeredMenu";
import logo from "@/assets/newlogo.png";

const links = [
  { label: "Home", ariaLabel: "Go to home page", link: "#home" },
  { label: "Menu", ariaLabel: "View dessert menu", link: "#menu" },
  { label: "About", ariaLabel: "Learn about Chocotag", link: "#about" },
  { label: "Gallery", ariaLabel: "View gallery", link: "#gallery" },
  { label: "Location", ariaLabel: "View location", link: "#location" },
  { label: "Contact", ariaLabel: "Contact us", link: "#contact" },
];

export function Navbar() {
  return (
    <StaggeredMenu
      position="right"
      items={links}
      displaySocials={false}
      displayItemNumbering={false}
      menuButtonColor="#fff"
      openMenuButtonColor="#18120d"
      colors={["#f5d9b5", "#e4b46d", "#d98a51"]}
      accentColor="#8b4e2f"
      logoUrl={logo}
      isFixed={true}
      changeMenuColorOnOpen={true}
      closeOnClickAway={true}
    />
  );
}
