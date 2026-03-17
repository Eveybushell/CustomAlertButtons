export default function AlertButton({message, children}) {
    function handleClick (e) {
        e.preventDefault();
        alert(message)
    }
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}