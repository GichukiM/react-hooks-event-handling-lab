// Code EyesOnMe Component Here

function EyesOnMe () {

    function handlefocus () {
        console.log("Good!");
    }

    function handleBlur () {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={handlefocus} onBlur={handleBlur} >Eyes on me</button>
    )
}

export default EyesOnMe;