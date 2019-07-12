import * as React from 'react'
import ChirpCard from './chirpcard'
export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }


    render() {
        return (
                    <main className="container">
                        <div className="container mt-3">
                            <ChirpCard />
                        </div>
                    </main>

        )
    }
}

//way to declare a type
interface IAppProps {

}

interface IAppState {
}