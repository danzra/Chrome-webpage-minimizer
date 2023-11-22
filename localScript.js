// document.getElementById("startTest").addEventListener("click", function() {
//     const testResultsDiv = document.getElementById("testResults");
//     const testImageURL = "https://www.measurementlab.net/static/logo.png"; // Just a placeholder image from M-Lab's site for this example
//     const fileSizeInBytes = 50000; // A rough estimate of the image's size for calculation purposes

//     const downloadStartTime = new Date().getTime();

//     fetch(testImageURL)
//         .then(response => response.blob())
//         .then(blob => {
//             const downloadEndTime = new Date().getTime();
//             const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//             // const speedKbps = (fileSizeInBytes * 8) / timeInSeconds / 1024;
//             const speedMbps = ((fileSizeInBytes * 8) / timeInSeconds / 1024) / 1024;

//             testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;
//         })
//         .catch(error => {
//             testResultsDiv.innerText = "Error measuring speed.";
//         });
// });

// const testResultsDiv = document.getElementById("testResults");
// const testImageURL = "https://www.measurementlab.net/static/logo.png"; // Just a placeholder image from M-Lab's site for this example
// const fileSizeInBytes = 50000; // A rough estimate of the image's size for calculation purposes

// // Display a message to inform the user that the test is in progress.
// testResultsDiv.innerText = "Testing network speed...";

// const downloadStartTime = new Date().getTime();

// fetch(testImageURL)
//     .then(response => response.blob())
//     .then(blob => {
//         const downloadEndTime = new Date().getTime();
//         const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//         const speedMbps = ((fileSizeInBytes * 8) / timeInSeconds / 1024) / 1024;

//         testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;
//     })
//     .catch(error => {
//         testResultsDiv.innerText = "Error measuring speed.";
//     });
// const testResultsDiv = document.getElementById("testResults");
// const testImageURL = "https://www.measurementlab.net/static/logo.png";
// const fileSizeInBytes = 50000;

// // Display a message to inform the user that the test is about to start.
// testResultsDiv.innerText = "Initializing speed test...";

// // Delay the start of the test by 1 second (1000 milliseconds)
// setTimeout(() => {
//     const downloadStartTime = new Date().getTime();

//     fetch(testImageURL)
//         .then(response => response.blob())
//         .then(blob => {
//             const downloadEndTime = new Date().getTime();
//             const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//             const speedMbps = ((fileSizeInBytes * 8) / timeInSeconds / 1024) / 1024;

//             testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;
//         })
//         .catch(error => {
//             testResultsDiv.innerText = "Error measuring speed.";
//         });
// }, 1000);


// const testResultsDiv = document.getElementById("testResults");
// const testImageURL = "https://www.measurementlab.net/static/logo.png";
// const fileSizeInBytes = 50000;  // This should be updated if you use a different file
// const numberOfFetches = 100;  // Fetching the file multiple times to simulate a larger download

// testResultsDiv.innerText = "Initializing speed test...";

// let completedFetches = 0;
// const downloadStartTime = new Date().getTime();

// function fetchFile() {
//     fetch(testImageURL)
//         .then(response => response.blob())
//         .then(blob => {
//             completedFetches++;

//             if (completedFetches === numberOfFetches) {
//                 const downloadEndTime = new Date().getTime();
//                 const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//                 const speedMbps = (((fileSizeInBytes * numberOfFetches) * 8) / timeInSeconds / 1024) / 1024;

//                 testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;
//             } else {
//                 fetchFile();  // Fetch the file again
//             }
//         })
//         .catch(error => {
//             testResultsDiv.innerText = "Error measuring speed.";
//         });
// }

// fetchFile();  // Start the first fetch

// const testResultsDiv = document.getElementById("testResults");

// // Replace this URL with the location of your own self-hosted smaller file (e.g., 1MB)
// const testFileURL = "https://download.thinkbroadband.com/1MB.zip";

// const numberOfFetches = 5;  // Number of times to fetch the file

// testResultsDiv.innerText = "Initializing speed test...";

// let completedFetches = 0;
// let totalSpeedMbps = 0;

// function fetchFile() {
//     const downloadStartTime = new Date().getTime();

//     fetch(testFileURL)
//         .then(response => response.blob())
//         .then(blob => {
//             const downloadEndTime = new Date().getTime();
//             const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;

//             // Adjust the file size in bytes to match the actual size of your file
//             const fileSizeInBytes = 1 * 1024 * 1024; // 1MB

//             const speedMbps = ((fileSizeInBytes * 8) / timeInSeconds / 1024) / 1024;

//             totalSpeedMbps += speedMbps;
//             completedFetches++;

//             if (completedFetches === numberOfFetches) {
//                 const averageSpeedMbps = totalSpeedMbps / numberOfFetches;
//                 testResultsDiv.innerText = `Download speed: ${averageSpeedMbps.toFixed(2)} Mbps`;
//             } else {
//                 fetchFile();
//             }
//         })
//         .catch(error => {
//             testResultsDiv.innerText = "Error measuring speed.";
//         });
// }

// fetchFile();  // Start the first fetch

// document.addEventListener('DOMContentLoaded', function() {
//     const testResultsDiv = document.getElementById("testResults");
//     const testImageURL = "https://placekitten.com/800/600";
//     const fileSizeInBytes = 55000;
//     const numberOfFetches = 100;
    
//     testResultsDiv.innerText = "Initializing speed test...";
    
//     let completedFetches = 0;
//     const downloadStartTime = new Date().getTime();
    
//     function fetchFile() {
//         fetch(testImageURL)
//             .then(response => response.blob())
//             .then(blob => {
//                 completedFetches++;
    
//                 if (completedFetches === numberOfFetches) {
//                     const downloadEndTime = new Date().getTime();
//                     const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//                     const speedMbps = (((fileSizeInBytes * numberOfFetches) * 8) / timeInSeconds / 1024) / 1024;
    
//                     testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;
    
//                     if (speedMbps < 100) {
//                         // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                         //     let activeTab = tabs[0];
//                         //     chrome.scripting.executeScript({
//                         //         target: {tabId: activeTab.id},
//                         //         files: ['contentScript.bundle.js']
//                         //     });
//                         // });
//                         // console.log("Before Minification:", content.substring(0, 100));
//                         minimizeContent();
//                         // console.log("After Minification:", minifiedContent.substring(0, 100));
//                     }
                    
//                 } else {
//                     fetchFile();  // Fetch the file again
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//                 testResultsDiv.innerText = "Error measuring speed.";
//             });
//     }
    
//     fetchFile();
    
//     function minimizeContent() {
//         // Get the current page's HTML
//         const pageHTML = document.documentElement.outerHTML;
    
//         // Send the HTML for minification
//         fetch('https://html-minifier.com/raw', {
//             method: 'POST',
//             body: `input=${encodeURIComponent(pageHTML)}`
//         })
//         .then(response => response.text())
//         .then(minifiedHTML => {
//             // Replace the page's HTML with the minified version
//             document.open();
//             document.write(minifiedHTML);
//             document.close();
    
//             // Now let's identify and minify linked and inline CSS and JS
//             const scripts = document.querySelectorAll('script');
//             const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    
//             scripts.forEach(script => {
//                 if (script.src) {
//                     // External JS
//                     fetch(script.src)
//                     .then(response => response.text())
//                     .then(jsContent => minifyJS(jsContent))
//                     .then(minifiedJS => {
//                         script.textContent = minifiedJS;
//                     });
//                 } else {
//                     // Inline JS
//                     minifyJS(script.textContent)
//                     .then(minifiedJS => {
//                         script.textContent = minifiedJS;
//                     });
//                 }
//             });
    
//             styles.forEach(style => {
//                 let cssContent = "";
//                 if (style.href) {
//                     // External CSS
//                     fetch(style.href)
//                     .then(response => response.text())
//                     .then(css => minifyCSS(css))
//                     .then(minifiedCSS => {
//                         const newStyle = document.createElement('style');
//                         newStyle.textContent = minifiedCSS;
//                         document.head.appendChild(newStyle);
//                         style.remove();
//                     });
//                 } else {
//                     // Inline CSS
//                     minifyCSS(style.textContent)
//                     .then(minifiedCSS => {
//                         style.textContent = minifiedCSS;
//                     });
//                 }
//             });
//         });
//     }
    
//     function minifyJS(jsContent) {
//         return fetch('https://javascript-minifier.com/raw', {
//             method: 'POST',
//             body: `input=${encodeURIComponent(jsContent)}`
//         })
//         .then(response => response.text());
//     }
    
//     function minifyCSS(cssContent) {
//         return fetch('https://cssminifier.com/raw', {
//             method: 'POST',
//             body: `input=${encodeURIComponent(cssContent)}`
//         })
//         .then(response => response.text());
//     }
    
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const testResultsDiv = document.getElementById("testResults");
//     const testImageURL = "https://placekitten.com/800/600";
//     const fileSizeInBytes = 55000;
//     const numberOfFetches = 100;
//     const SPEED_THRESHOLD = 1000; // Adjust this as needed
//     let completedFetches = 0;
//     const downloadStartTime = new Date().getTime();
//     testResultsDiv.innerText = "Initializing speed test...";

//     function fetchFile() {
//         fetch(testImageURL)
//             .then(response => {
//                 if (!response.ok) throw new Error(`Error fetching image: ${response.statusText}`);
//                 return response.blob();
//             })
//             .then(blob => {
//                 if (++completedFetches === numberOfFetches) {
//                     const timeInSeconds = (new Date().getTime() - downloadStartTime) / 1000;
//                     const speedMbps = (((fileSizeInBytes * numberOfFetches) * 8) / timeInSeconds / 1024) / 1024;

//                     testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;

//                     if (speedMbps < SPEED_THRESHOLD) {
//                         testResultsDiv.innerText += "\nAttempting to minimize content...";
//                         minimizeContent();
//                     }
//                 } else {
//                     fetchFile();  // Fetch the file again
//                 }
//             })
//             .catch(error => {
//                 console.error("Detailed error:", error);
//                 testResultsDiv.innerText = "Error measuring speed.";
//             });
//     }

//     function minimizeContent() {
//         const pageHTML = document.documentElement.outerHTML;
    
//         fetch('http://localhost:5000/minify', {
//             method: 'POST',
//             headers: { 'Content-Type': 'text/plain' },
//             body: pageHTML
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Minification error: ${response.statusText}`);
//             return response.text();
//         })
//         .then(minifiedHTML => {
//             console.log("Minification successful");
//             document.open();
//             document.write(minifiedHTML);
//             document.close();
//             testResultsDiv.innerText += "\nContent minimized successfully!";
//         })
//         .catch(error => {
//             console.error("Error during minification:", error);
//             testResultsDiv.innerText += "\nError during minification.";
//         });
//     }

//     fetchFile();
// });




// 



// document.addEventListener('DOMContentLoaded', function() {
//     const testResultsDiv = document.getElementById("testResults");
//     const testImageURL = "https://placekitten.com/800/600";
//     const fileSizeInBytes = 55000;
//     const numberOfFetches = 100;

//     testResultsDiv.innerText = "Initializing speed test...";

//     let completedFetches = 0;
//     const downloadStartTime = new Date().getTime();

//     function fetchFile() {
//         fetch(testImageURL)
//             .then(response => response.blob())
//             .then(blob => {
//                 completedFetches++;

//                 if (completedFetches === numberOfFetches) {
//                     const downloadEndTime = new Date().getTime();
//                     const timeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
//                     const speedMbps = (((fileSizeInBytes * numberOfFetches) * 8) / timeInSeconds / 1024) / 1024;

//                     testResultsDiv.innerText = `Download speed: ${speedMbps.toFixed(2)} Mbps`;

//                     if (speedMbps < 1000) {
//                         testResultsDiv.innerText += "\nAttempting to minify...";
//                         // Send a message to the contentScript to initiate minification
//                         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                             chrome.tabs.sendMessage(tabs[0].id, { action: "minifyContent" });
//                         });
//                     }
//                 } else {
//                     //testResultsDiv.innerText = "Network speed is Fast!\nNo need to minify";
//                     fetchFile();  // Fetch the file again
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//                 testResultsDiv.innerText = "Error measuring speed.";
//             });
//     }

//     // Inject the contentScript.js once
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'}, function() {
         
//             fetchFile();
//         });
//     });
//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.status === "minificationCompleted") {
//             testResultsDiv.innerText = "Minification completed!";
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const testResultsDiv = document.getElementById("testResults");
    const testImageURL = "https://placekitten.com/800/600";
    const fileSizeInBytes = 55000; // Adjust this according to the actual size of the testImageURL in bytes
    const numberOfFetches = 1; // Number of times we'll fetch the test image to average the result

    testResultsDiv.innerText = "Initializing speed test...";

    let completedFetches = 0;
    let totalSpeedMbps = 0;

    function fetchFile() {
        const singleFetchStartTime = new Date().getTime();
        
        fetch(testImageURL)
            .then(response => response.blob())
            .then(blob => {
                const singleFetchEndTime = new Date().getTime();
                const timeInSeconds = (singleFetchEndTime - singleFetchStartTime) / 1000;
                const speedMbps = ((fileSizeInBytes * 8) / timeInSeconds / 1024) / 1024;
                totalSpeedMbps += speedMbps;

                completedFetches++;

                if (completedFetches === numberOfFetches) {
                    const averageSpeedMbps = totalSpeedMbps / numberOfFetches;
                    testResultsDiv.innerText = `Average download speed: ${averageSpeedMbps.toFixed(2)} Mbps`;

                    if (averageSpeedMbps < 500) {  // Change the threshold as per your requirement
                        testResultsDiv.innerText += "\nAttempting to minify...";
                        // Send a message to the contentScript to initiate minification
                        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                            chrome.tabs.sendMessage(tabs[0].id, { action: "minifyContent", networkSpeed: speedMbps });

                        });
                    } else {
                        testResultsDiv.innerText = "Network speed is Fast!\nNo need to minify";
                    }
                } else {
                    fetchFile();  // Fetch the file again
                }
            })
            .catch(error => {
                console.error(error);
                testResultsDiv.innerText = "Error measuring speed.";
            });
    }

    // Inject the contentScript.js once
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'}, function() {
            fetchFile();
        });
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.status === "minificationCompleted") {
            testResultsDiv.innerText = "Minification completed!";
        }
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const testResultsDiv = document.getElementById("testResults");

//     testResultsDiv.innerText = "Initializing speed test...";

//     const ndt = new NDT('ndt7');
//     ndt.onstatechange = (newState) => {
//       switch (newState) {
//         case 'starting':
//           testResultsDiv.innerText = "Test is starting...";
//           break;
//         case 'running':
//           testResultsDiv.innerText = "Test is running...";
//           break;
//         case 'completed':
//           const downloadSpeed = ndt.downloadSpeed.toFixed(2);
//           testResultsDiv.innerText = `Download speed: ${downloadSpeed} Mbps`;

//           if (downloadSpeed < 1000) {
//               testResultsDiv.innerText += "\nAttempting to minify...";
//               // Send a message to the contentScript to initiate minification
//               chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                   chrome.tabs.sendMessage(tabs[0].id, { action: "minifyContent" });
//               });
//           }
//           break;
//         case 'failed':
//           testResultsDiv.innerText = "Error measuring speed.";
//           console.error("Test failed");
//           break;
//         case 'aborted':
//           testResultsDiv.innerText = "Test was aborted.";
//           console.warn("Test was aborted");
//           break;
//       }
//     };
//     ndt.startTest();

//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.status === "minificationCompleted") {
//             testResultsDiv.innerText = "Minification completed!";
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const testResultsDiv = document.getElementById("testResults");

//     // First, fetch the network speed from our server
//     fetch('http://localhost:9999/get-speed')
//         .then(response => response.json())
//         .then(data => {
//             const speed = data.speed;
//             testResultsDiv.innerText = `Download speed: ${speed.toFixed(2)} Mbps`;

//             if (speed < 1000) {  // Set your threshold here
//                 testResultsDiv.innerText += "\nAttempting to minify...";

//                 // Send a message to the contentScript to initiate minification
//                 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                     chrome.tabs.sendMessage(tabs[0].id, { action: "minifyContent" });
//                 });
//             } else {
//                 testResultsDiv.innerText += "\nNetwork speed is Fast!\nNo need to minify";
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             testResultsDiv.innerText = "Error measuring speed.";
//         });

//     // Listen for a message from contentScript that minification is done
//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.status === "minificationCompleted") {
//             testResultsDiv.innerText = "Minification completed!";
//         }
//     });
// });
