const Footer = ({ items }) => {
  if (items.length === 0)
    return (
      <div className="footer">
        <p className="info">💼 your bag is empty 💼 </p>
      </div>
    );
  return (
    <div className="footer">
      <p className="info">
        💼 you have
        <span className="info-item"> {items.length} in your list </span> items
        in your bag 💼
      </p>
    </div>
  );
};

export default Footer;
