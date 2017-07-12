import * as React from 'react';

import * as axios from 'axios';

export interface ActualityResponse {
    data: {
        titre: string;
        resume: string;
        auteur: string;
        illustration: string;
        url: string;        
    };
}
export interface ActualityState {
    titre: string;
    resume: string;
    auteur: string;
    illustration: string;
    url: string;
}

export default class Actuality extends React.Component<{}, ActualityState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            titre: '',
            resume: '',
            auteur: '',
            illustration: '',
            url: ''
        };
    }

    componentDidMount() {
        var self = this;
        axios.default 
            .get('http://localhost:8081/jalios-test/articles')
            .then(function (response: ActualityResponse) {
                self.setState({
                    titre: response.data.titre,
                    resume: response.data.resume,
                    auteur: response.data.auteur,
                    illustration: response.data.illustration,
                    url: response.data.url
                });
            })
            .catch(function (error: {}) {
                console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div><b>{this.state.titre}</b></div>
                <div>
                    <img 
                        src={'http://localhost:8080/demo/' + this.state.illustration} 
                        height={200}
                    />
                    </div>
                <div>{this.state.resume}</div>
                <div>Publié par {this.state.auteur}</div>
                <div>
                    <a 
                        href={this.state.url}
                        target={'actualite'}
                    >
                            Click me
                    </a>
                </div>
            </div>
        );
    }
}