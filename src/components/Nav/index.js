import React from "react";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    
    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span role="img" aria-label="camera"></span> Michael Li
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              {categories.map((category) => (
                <li
                  className={`mx-1 ${
                    currentCategory.name === category.name && 'navActive'
                    }`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category)
                    }}
                  >
                      {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        
    )
}

export default Nav