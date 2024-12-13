const Spinner = () => {
    return (
        <div
            className="fixed m-auto animate-spin size-12 border-[3px] border-current border-t-transparent rounded-full"
            role="status"
            aria-label="loading"
        ></div>
    );
};

export default Spinner;
