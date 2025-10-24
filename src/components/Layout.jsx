const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="container mx-auto">
        <div className="content">
          <div className="empty-space"></div>
          <div className="assignment-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;