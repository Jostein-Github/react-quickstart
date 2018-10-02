import * as React from "react";

interface IAppProps {
}

interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <h1 className="container__title">
                    Hello world!
                </h1>

                <p className="container__description">
                    QuickStart with TypeScript, Less, React and Hot Reloading
                </p>
            </div>
        );
    }
}