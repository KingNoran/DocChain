const OptionCard = ({ role, Icon }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 w-80 h-96 shadow-lg hover:shadow-2xl rounded-lg">
            <Icon className="text-9xl" />
            <h3 className="text-2xl">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        </div>
    );
}

export default OptionCard;