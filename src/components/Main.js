import Sidebar from "./Sidebar";
import Container from "./Container";
import './Main.css';
export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Container />
    </div>
  );
}
