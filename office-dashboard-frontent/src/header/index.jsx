import Logo from "../logo";
import Heading from "./components/header_detail";

export default function Header() {
  return (
    <>
      <div className="flex justify-between">
        <Logo />
        <Heading />
      </div>
    </>
  );
}
