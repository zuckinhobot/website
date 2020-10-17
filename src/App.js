import React from "react";
import { Typography, Divider } from "antd";
import Authors from "./components/Authors";
import Navbar from "./components/Navbar";
import "./App.css";
import "antd/dist/antd.css";

const { Text } = Typography;

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="content">
          <h1>About Zuckinhobot</h1>
          <p>
            Learn about Zuckinhobot, the web crawler made by CEFET/MG students.
          </p>
          <h2>Identifying Zuckinhobot</h2>
          <h3>Verifying Zuckinhobot user agent</h3>
          <p>
            The user-agent string contains "Zuckinhobot" and other information.
            This is the format:
          </p>
          <Text code>
            Mozilla/5.0 (Device; OS_version) Zuckinhobot (KHTML, like Gecko)
            Version/Safari_version Safari/WebKit_version (Zuckinhobot)
          </Text>
          <Divider />
          <h2>Customizing robot.txt rules</h2>
          <p>
            Zuckinhobot respects standard robots.txt directives that are
            targeted at Zuckinhobot. In this example, Zuckinhobot doesn't try to
            crawl documents that are under /private/ or /not-allowed/:
          </p>
          <Text code>
            User-agent: Zuckinhobot # Zuckinhobot
            <br />
            Allow: /<br />
            Disallow: /private/
          </Text>
          <Text code>
            User-agent: * # any robot
            <br />
            Disallow: /not-allowed/ # disallow this directory
          </Text>
          <br />
          <h3>Rendering and robot rules</h3>
          <p>
            Zuckinhobot may render the content of your website within a browser.
            If javascript, CSS, and other resources are blocked via robots.txt,
            it may not be able to render the content properly. This includes
            XHR, JS, and CSS that the page might require.
          </p>
          <p>
            In order for Zuckinhobot to index the best content for the page,
            make sure that everything needed for a user to render the page is
            available to Zuckinhobot. Alternatively, make sure that the website
            renders cleanly, even if all of the resources are not available.
            This is often referred to as graceful degradation.
          </p>
          <Divider />
          <h2>Contact us</h2>
          <Authors />
        </div>
      </main>
    </div>
  );
}

export default App;
