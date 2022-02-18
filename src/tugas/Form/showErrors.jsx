const Showerror = ({errors}) => {
    return (
        <ul style={{color:'red'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default Showerror