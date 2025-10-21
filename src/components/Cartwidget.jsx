import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
      <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <FaShoppingCart size={24} />
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          fontSize: "12px",
          padding: "2px 6px",
          lineHeight: "1",
        }}
      >
        3
      </span>
    </div>
  );
}

export default CartWidget;


