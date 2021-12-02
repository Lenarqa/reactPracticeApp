import classes from './InvalidWindow.module.css'

const InvalidWindow = (props) => {
    const okayHandler = () => {
        props.onCloseInvalidWindow(true)
    }

    return (
        <div className={classes["invalid-window"]}>
            <header>Invalid Input</header>
            <section>
                <p>Please enter a valid name or age (not empty value)</p>
                <div>
                    <button onClick={okayHandler}>Okay</button>
                </div>
            </section>
        </div>
    );
};

export default InvalidWindow;