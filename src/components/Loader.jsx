import "../css/Loader.css";

/**
 * Loader to be displayed waiting for the fetch to be complete
 * @returns {React.JSX.Element}
 * @constructor
 */
const Loader = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;