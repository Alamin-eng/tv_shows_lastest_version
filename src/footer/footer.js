import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
    return (
      <div className="footer">
        <div>Copyright © {year} Created with ❤️️ by Mohammad Alamin</div>
        
        <div> All trademarks are property of their respective owners</div>
        
      </div>
    );
    // Add more items in the footer to make it modern look. Research some moders site footers.
}
