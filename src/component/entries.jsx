
const Entries = ({userData}) => {

    console.log("entries", userData)

    const {name, entries} = userData

    return (
        <>
        <span className="entries">Welcome to Face Recognition {name}! Your number of
        entries are: {entries}
        </span><br/>
        </>
    )
}

export default Entries;