import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <>
            <div className="search-heading">
                <Link to="/home">
                    <svg
                        style={{ width: '18px', height: '18px' }}
                        className="search-icon-back"
                        width="31"
                        height="26"
                        viewBox="0 0 31 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Vector"
                            d="M31 11.3132H6.44444L15.3552 2.3851L12.9747 0L0 13L12.9747 26L15.3552 23.6149L6.44444 14.6868H31V11.3132Z"
                            fill="black"
                        />
                    </svg>
                </Link>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by title..."
                />
            </div>
            <p>Updating by admin</p>
        </>
    );
};

export default Search;
