const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-8" >
            <p className="text-xl text-yellow-600">{subHeading}</p>
            <hr className="w-48 my-4 mx-auto" />
            <p className="text-4xl uppercase" >{heading}</p>
        </div>
    );
};

export default SectionTitle;