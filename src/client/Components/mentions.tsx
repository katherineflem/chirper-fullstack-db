import * as React from 'react'

class Mentions extends React.Component<IMentionsProps, IMentionsState>{
    constructor(props: IMentionsProps) {
        super(props)
        this.state = {
            users: [],
            selectedUserId:''
        }
    }
//mentions needs to know the users ID 
    async componentDidMount() {
        try {
            let r = await fetch('/users')
            let users = await r.json();
            this.setState({ users })
            console.log(users)
        } catch (e) {
            console.log(e)

        }
    }

    render() {
        return (
            <div className="container">
                <section className="col-md-6 justify-content-center">
                    <article className="row mt-5 justify-content-center">
                        <form className="form-group border border-success p-5 shadow">
                            <h4>Choose User to see their mentions</h4>
                            <select
                                className="form-control"
                                value={this.state.selectedUserId}
                                onChange={e=>this.setState({selectedUserId: e.target.value})}>
                                <option>Select a User</option>
                                {console.log(this.state.users)}
                                {this.state.users.map(user => 
                                    <option key={user.id} value={user.id}>{user.name}</option>,
                                )}
                            </select>
                            <button className="btn border-success btn-block mt-2">Select User</button>
                        </form>
                    </article>
                </section>

            </div>




        )
    }
}



export default Mentions

interface IMentionsProps {

}

interface IMentionsState {
    selectedUserId: string,
    users: {
        id: number,
        name: string
    }[]
}
