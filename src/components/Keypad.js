// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <form onChange={event => console.log("Entering password...")}>
                <input type="password" />
            </form>
        </div>
    )
}

export default Keypad;