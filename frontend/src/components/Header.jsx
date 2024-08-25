import React from 'react';

const Header = ({ theme, toggleTheme }) => {

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-center thread-logo mt-4">
                    <img src={theme === 'dark' ? "/light-logo.svg" : "/dark-logo.svg"} alt="" onClick={toggleTheme} />
                </div>
            </div>
        </div>
    );
};

export default Header;
