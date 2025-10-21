import CartWidget from "./Cartwidget";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        padding: "10px 50px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: "70px",
        boxSizing: "border-box",
      }}
>
      <h1>ZonaGaming</h1>

      <ul style={{ display: "flex", listStyle: "none", gap: "100px" }}>
        <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Teclados</a></li>
        <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Mouse</a></li>
        <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Auriculares</a></li>
        <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Pads</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;