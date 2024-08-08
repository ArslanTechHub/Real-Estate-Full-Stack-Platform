
import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setState }) {
  const [loaded, setLoaded] = useState(false);
  const [widgetInstance, setWidgetInstance] = useState(null);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.id = "cloudinary-upload-widget"; // Ensure unique id for script element
      script.async = true;
      script.onload = () => setLoaded(true);
      script.onerror = () => console.error("Failed to load the Cloudinary script.");
      document.body.appendChild(script);
    };

    // Check if the script is already loaded
    if (!document.getElementById("cloudinary-upload-widget")) {
      loadScript();
    } else {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded && !widgetInstance) {
      const interval = setInterval(() => {
        if (window.cloudinary) {
          const myWidget = window.cloudinary.createUploadWidget(
            uwConfig,
            (error, result) => {
              if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                setState((prevImages) => uwConfig.multiple ? [...prevImages, result.info.secure_url] : [result.info.secure_url]);
              }
            }
          );
          setWidgetInstance(myWidget);
          clearInterval(interval);

          document.getElementById("upload_widget").addEventListener("click", () => {
            myWidget.open();
          });
        }
      }, 100);

      setTimeout(() => clearInterval(interval), 10000); // Stop after 10 seconds
    }
  }, [loaded, uwConfig, setState, widgetInstance]);

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        disabled={!loaded}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
