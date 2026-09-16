import { useState } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Blog from "./Blog";
import Contact from "./Contact";



function VSCodeLayout() {

  const [activeFile, setActiveFile] = useState("home");

  const [explorerOpen, setExplorerOpen] = useState(true);


  const files = [
    {
        id: "home",
        name: "welcome.jsx",
        type: "jsx"
    },
    {
        id: "about",
        name: "about.jsx",
        type: "jsx"
    },
    {
        id: "projects",
        name: "projects.jsx",
        type: "jsx"
    },
    {
        id: "experience",
        name: "experience.jsx",
        type: "jsx"
    },
    {
        id: "skills",
        name: "skills.jsx",
        type: "jsx"
    },
    {
        id: "certifications",
        name: "certifications.json",
        type: "json"
    },
    {
        id: "blog",
        name: "blog.md",
        type: "md"
    },
    {
        id: "contact",
        name: "contact.jsx",
        type: "jsx"
    }
    ];


  const renderContent = () => {

    switch (activeFile) {

        case "home":
        return (
            <Home
            onOpenFile={setActiveFile}
            />
        );

        case "about":
        return <About />;

        case "projects":
        return <Projects />;

        case "experience":
        return <Experience />;

        case "skills":
        return <Skills />;

        case "certifications":
        return <Certifications />;

        case "blog":
        return <Blog />;

        case "contact":
        return <Contact />;

        default:
        return (
            <Home
            onOpenFile={setActiveFile}
            />
        );

    }

    };


  return (

    <div className="vscode">

      {/* TOP BAR */}

      <header className="vscode-titlebar">

        <div className="vscode-window-controls">

          <span className="window-dot close"></span>
          <span className="window-dot minimize"></span>
          <span className="window-dot maximize"></span>

        </div>


        <div className="vscode-title">

          alex-portfolio — Visual Studio Code

        </div>

      </header>


      {/* MAIN */}

      <div className="vscode-main">


        {/* ACTIVITY BAR */}

        <aside className="vscode-activitybar">

          <button
            className={`activity-button ${
              explorerOpen ? "active" : ""
            }`}
            onClick={() => setExplorerOpen(!explorerOpen)}
            aria-label="Explorer"
          >
            <span>▤</span>
          </button>


          <button
            className="activity-button"
            aria-label="Search"
          >
            <span>⌕</span>
          </button>


          <button
            className="activity-button"
            aria-label="Source Control"
          >
            <span>⑂</span>
          </button>


          <button
            className="activity-button"
            aria-label="Run"
          >
            <span>▷</span>
          </button>


          <div className="activity-spacer"></div>


          <button
            className="activity-button"
            aria-label="Settings"
          >
            <span>⚙</span>
          </button>

        </aside>


        {/* EXPLORER */}

        {explorerOpen && (

          <aside className="vscode-explorer">

            <div className="explorer-title">

              EXPLORER

            </div>


            <div className="explorer-project">

              <span className="explorer-chevron">
                ▼
              </span>

              <span>
                ALEX-PORTFOLIO
              </span>

            </div>


            <div className="explorer-files">

              {files.map((file) => (

                <button
                  key={file.id}
                  className={`explorer-file ${
                    activeFile === file.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setActiveFile(file.id)}
                >

                  <span
                    className={`file-icon file-${file.type}`}
                  >
                    {file.type === "jsx"
                      ? "JS"
                      : file.type === "json"
                      ? "{}"
                      : "M"}
                  </span>


                  <span>
                    {file.name}
                  </span>

                </button>

              ))}

            </div>

          </aside>

        )}


        {/* EDITOR */}

        <main className="vscode-editor">


          {/* TABS */}

          <div className="editor-tabs">

            {files.map((file) => (

              <button
                key={file.id}
                className={`editor-tab ${
                  activeFile === file.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveFile(file.id)}
              >

                <span
                  className={`file-icon file-${file.type}`}
                >
                  {file.type === "jsx"
                    ? "JS"
                    : file.type === "json"
                    ? "{}"
                    : "M"}
                </span>

                <span>
                  {file.name}
                </span>

                {activeFile === file.id && (
                  <span className="tab-close">
                    ×
                  </span>
                )}

              </button>

            ))}

          </div>


          {/* BREADCRUMB */}

          <div className="editor-breadcrumb">

            <span>
              src
            </span>

            <span>
              ›
            </span>

            <span>
              components
            </span>

            <span>
              ›
            </span>

            <strong>
              {
                files.find(
                  file => file.id === activeFile
                )?.name
              }
            </strong>

          </div>


          {/* CONTENT */}

          <div className="editor-content">

            {renderContent()}

          </div>


        </main>

      </div>


      {/* STATUS BAR */}

      <footer className="vscode-statusbar">

        <div className="status-left">

          <span>
            ⎇ main
          </span>

          <span>
            ✓ 0
          </span>

          <span>
            ⚠ 0
          </span>

        </div>


        <div className="status-right">

          <span>
            Ln 1, Col 1
          </span>

          <span>
            Spaces: 2
          </span>

          <span>
            UTF-8
          </span>

          <span>
            {files.find(
              file => file.id === activeFile
            )?.type.toUpperCase()}
          </span>

        </div>

      </footer>

    </div>

  );

}


export default VSCodeLayout;