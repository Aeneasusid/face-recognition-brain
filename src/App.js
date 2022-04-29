import React from "react";
// import Particles from 'react-particles-js';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

// const particlesOptions = {
//     particles: {
//         line_linked: {
//             shadow: {
//                 enable: true,
//                 color: "#3CA9D1",
//                 blur: 5
//             }
//         }
//     }
// }

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<Particles class*/}
                {/*    params={particlesOptions}*/}
                {/*/>*/}
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/*<FaceRecognition />*/}
            </div>
        );
    }
}

export default App;
