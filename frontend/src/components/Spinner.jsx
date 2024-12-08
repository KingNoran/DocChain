const Spinner = () => {
    return (
        <div
            className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent rounded-full"
            role="status"
            aria-label="loading"
        ></div>
    );
};

export default Spinner;
