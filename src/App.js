import React, { Component } from "react";
import {Section1, Section2, Section3} from "./components"
import "./App.css";

class App extends Component {
  
    render() {
        return (
            <div>
                <main>
                    <div className="ctn-main">
                        <div className="ctn-m">
                            <Section1 />
                            <Section2 />
                            <Section3 />
                        </div>
                    </div>
                </main>
            </div>
            )
      }
}

export default App;
