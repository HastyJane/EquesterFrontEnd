/* eslint-disable react/react-in-jsx-scope */
class editInfoForm extends React.Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;
        }

        return (
            <form>
                <h1>
                    Edit equine information
                </h1>
                <p>
                    Enter your equine's name:
                </p>
                <input 
                    type="text"
                />
            </form>
        )
    }
}