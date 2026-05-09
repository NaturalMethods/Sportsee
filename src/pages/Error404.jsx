import "../css/style.css"

/**
 * Return a page of 404 error if url is incorrect
 * @returns {React.JSX.Element}
 * @constructor
 */
const Error404 = () => {
    return (
        <section className="bg-lightblue flex-col flex-center error404">
            <h1 className="blue">404 Not Found</h1>
        </section>
    )
}

export default Error404