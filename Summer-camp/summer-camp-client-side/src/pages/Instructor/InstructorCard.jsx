
const InstructorCard = ({ instructors }) => {
    const { _id, Image, Name, Email, noOfClassesTaken, classesTaken } = instructors;
    const classes = classesTaken && Array.isArray(classesTaken) ? classesTaken.map((number, index) =>
        <p key={index}>Course 0{index + 1}: {number}</p>
    ) : null;
    return (
        <div key={_id} className="card w-96  bg-success shadow-xl">
            <figure className="px-10 py-10 mt-2">
                <img src={Image} alt="Shoes" className=" rounded-3xl " />
            </figure>
            <div className="card-body w-full h-64 items-center text-center">
                <h2 className=" font-mono font-bold">Instructor: {Name}</h2>
                <p>Email:{Email}</p>
                <p>Total Class Taken:{noOfClassesTaken}</p>
                {
                    classes
                }


            </div>
        </div>
    );
};

export default InstructorCard;