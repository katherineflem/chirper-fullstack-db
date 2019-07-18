import * as React from 'react'

class users extends React.Component<IMentionsProps, IMentionsState>{
    constructor(props: IMentionsProps) {
        super(props)
        this.state = {
            users: [],
            selectedUserId: '',
            mentions: [],
        }
    }
    //mentions needs to know the users ID 
    async componentDidMount() {
        try {
            let r = await fetch('/api/users')
            let users = await r.json();
            this.setState({ users })
        } catch (e) {
            console.log(e)

        }
    }
    async getUserMentions(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            let r = await fetch(`/api/mentions/${this.state.selectedUserId}`)
            console.log(this.state.selectedUserId)
            let mentions = await r.json();
            this.setState( {mentions} )
            console.log(this.state.mentions)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container justify-content-center">
                <section className="col-md-6 justify-content-center">
                    <article className="row mt-5 justify-content-center">
                        <form className="form-group border border-success p-5 shadow">
                            <h4>Choose User to see their mentions</h4>
                            <select
                                className="form-control"
                                value={this.state.selectedUserId}
                                //event generates when option is clicked and the value of that option is set to state
                                onChange={e => this.setState({ selectedUserId: e.target.value })}>
                                <option>Select a User</option>
                                {this.state.users.map(user =>
                                    //which user have i selected
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )}
                            </select>
                            <button className="btn border-success btn-block mt-2"
                                onClick={e => this.getUserMentions(e)}
                            >Select User</button>
                        </form>
                    </article>
                </section>
                <section className="row justify-content-center">
                    {this.state.mentions.map(mention =>{
                        return(
                            <article key={mention.id} className="col-md-6 justify-content-center">
                                <div className="card mt-3 shadow border-success">
                                    <div className="card-body">
                                        <h3 className="card-title">{mention.userid}</h3>
                                        <p className="card-text">{mention.text}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                    
                </section>
            </div>






        )
    }
}



export default users

interface IMentionsProps {

}

interface IMentionsState {
    selectedUserId: string,

    mentions: {
        chirpid: number,
        userid: number,
        id:string,
        name: string,
        text: string,
        location: string
    }[],

    users: {
        id: number,
        name: string
    }[]
}
