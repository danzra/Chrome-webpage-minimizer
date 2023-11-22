// chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "minifyContent") {
//         minimizeContent();
//     }
// });

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;
    
//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Minification successful");
//         document.open();
//         document.documentElement.outerHTML = minifiedHTML;

//         document.close();
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;
    
//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Received minified HTML:", minifiedHTML);
//         console.log("Minification successful");
        
//         // Parse the minifiedHTML and extract the content inside the <body> tag
//         let tempDiv = document.createElement('div');
//         tempDiv.innerHTML = minifiedHTML;
//         let minifiedBodyContent = tempDiv.querySelector('body').innerHTML;

//         // Replace the current page's body content with the minified body content
//         document.body.innerHTML = minifiedBodyContent;
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "minifyContent") {
//         minimizeContent();
//     }
// });

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;
    
//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Minification successful");
        
//         // Parse the minifiedHTML and extract the content inside the <body> tag
//         let tempDiv = document.createElement('div');
//         tempDiv.innerHTML = minifiedHTML;
//         let minifiedBodyContent = tempDiv.querySelector('body').innerHTML;

//         // Replace the current page's body content with the minified body content
//         document.body.innerHTML = minifiedBodyContent;
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }





// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;

//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Minification successful");
//         console.log(minifiedHTML)

//         // Parse the minifiedHTML and extract the content inside the <body> tag
//         let tempDiv = document.createElement('div');
//         tempDiv.innerHTML = minifiedHTML;
//         let minifiedBody = tempDiv.querySelector('body');

//         if (minifiedBody) {
//             // Replace the current page's body content with the minified body content
//             document.body.innerHTML = minifiedBody.innerHTML;
//         } else {
//             console.warn("Minified HTML does not contain a <body> tag. Skipping content replacement.");
//         }
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "minifyContent") {
//         minimizeContent();
//     }
// });

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;

//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Minification successful");
//         console.log(minifiedHTML);  // Log the minified HTML to the console

//         // Parse the minifiedHTML directly using DOMParser
//         let parser = new DOMParser();
//         let doc = parser.parseFromString(minifiedHTML, 'text/html');
//         let minifiedBody = doc.body;

//         if (minifiedBody) {
//             // Replace the current page's body content with the minified body content
//             document.body.innerHTML = minifiedBody.innerHTML;
//         } else {
//             console.warn("Minified HTML does not contain a <body> tag. Skipping content replacement.");
//         }
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });                                             
// }

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "minifyContent") {
//         minimizeContent();
//     }
// });

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;

//     fetch('http://localhost:5000/minify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("Minification successful");
//         console.log(minifiedHTML);  // Log the minified HTML to the console

//         // Add a unique identifiable comment to the minified content
//         minifiedHTML = "<!-- Minified using our Chrome Extension -->" + minifiedHTML;

//         // Replace the entire document's HTML without using document.write
//         const newDoc = document.implementation.createHTMLDocument("");
//         newDoc.documentElement.innerHTML = minifiedHTML;
//         while (document.firstChild) {
//             document.removeChild(document.firstChild);
//         }
//         document.appendChild(document.importNode(newDoc.documentElement, true));
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "minifyContent") {
//         minimizeContent();
//     }
// });

// function minimizeContent() {
//     const pageHTML = document.documentElement.outerHTML;

//     fetch('http://localhost:5000/minify-html', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: pageHTML
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedHTML => {
//         console.log("HTML Minification successful");
//         console.log(minifiedHTML);  // Log the minified HTML to the console

//         // Add a unique identifiable comment to the minified content
//         minifiedHTML = "<!-- Minified using our Chrome Extension -->" + minifiedHTML;

//         // Replace the entire document's HTML without using document.write
//         const newDoc = document.implementation.createHTMLDocument("");
//         newDoc.documentElement.innerHTML = minifiedHTML;
//         while (document.firstChild) {
//             document.removeChild(document.firstChild);
//         }
//         document.appendChild(document.importNode(newDoc.documentElement, true));

//         // Proceed with CSS minification
//         return minimizeCSS();
//     })
//     .then(() => {
//         console.log("CSS Minification successful");
//     })
//     .catch(error => {
//         console.error("Error during minification:", error);
//     });
// }

// function minimizeCSS() {
//     let cssText = '';

//     // Gather all styles from the page
//     const stylesheets = Array.from(document.styleSheets);
//     stylesheets.forEach(sheet => {
//         Array.from(sheet.cssRules || []).forEach(rule => {
//             cssText += rule.cssText;
//         });
//     });

//     // Minify the gathered CSS
//     return fetch('http://localhost:5000/minify-css', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: cssText
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedCSS => {
//         console.log("/* Minified CSS using our Chrome Extension */");
//         console.log(minifiedCSS);  // Log the minified CSS to the console

//         // Remove all original styles from the page
//         stylesheets.forEach(sheet => {
//             let ownerNode = sheet.ownerNode;
//             ownerNode.parentNode.removeChild(ownerNode);
//         });

//         // Add the minified CSS to the page
//         let styleNode = document.createElement("style");
//         styleNode.type = "text/css";
//         styleNode.textContent = "/* Minified CSS using our Chrome Extension */" + minifiedCSS;
//         document.head.appendChild(styleNode);
//     });
// }


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "minifyContent") {
        minimizeContent(message.networkSpeed);  // Pass the networkSpeed from the message
    }
});

function minimizeContent(speed) {
    const pageHTML = document.documentElement.outerHTML;

    fetch('http://localhost:5000/minify-html', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: pageHTML
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
    })
    .then(minifiedHTML => {
        console.log("HTML Minification successful");
        console.log(minifiedHTML);  // Log the minified HTML to the console

        // Add a unique identifiable comment to the minified content
        minifiedHTML = "<!-- Minified using our Chrome Extension -->" + minifiedHTML;

        // Replace the entire document's HTML without using document.write
        const newDoc = document.implementation.createHTMLDocument("");
        newDoc.documentElement.innerHTML = minifiedHTML;
        while (document.firstChild) {
            document.removeChild(document.firstChild);
        }
        document.appendChild(document.importNode(newDoc.documentElement, true));

        // Proceed with CSS minification
        return minimizeCSS();
    })
    .then(() => {
        console.log("CSS Minification successful");
        
        // Send a message to the popup indicating minification is done
        console.log(`Minification happened because network speed is: ${parseFloat(speed).toFixed(2)} Mbps`);

        chrome.runtime.sendMessage({status: "minificationCompleted"});

    })
    
    .catch(error => {
        console.error("Error during minification:", error);
    });
    //chrome.runtime.sendMessage({status: "completed"});

}

// ... [keep the minimizeCSS() function as is]
// function minimizeCSS() {
//     let cssText = '';

//     // Gather all styles from the page
//     const stylesheets = Array.from(document.styleSheets);
//     stylesheets.forEach(sheet => {
//         try {
//             Array.from(sheet.cssRules || []).forEach(rule => {
//                 cssText += rule.cssText;
//             });
//         } catch (e) {
//             console.warn("Could not access cssRules for a stylesheet. It might be cross-origin.", e);
//         }
//     });

//     // Minify the gathered CSS
//     return fetch('http://localhost:5000/minify-css', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: cssText
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedCSS => {
//         console.log("/* Minified CSS using our Chrome Extension */");
//         console.log(minifiedCSS);  // Log the minified CSS to the console

//         // Remove all original styles from the page
//         stylesheets.forEach(sheet => {
//             let ownerNode = sheet.ownerNode;
//             if (ownerNode) {
//                 ownerNode.parentNode.removeChild(ownerNode);
//             }
//         });

//         // Add the minified CSS to the page
//         let styleNode = document.createElement("style");
//         styleNode.type = "text/css";
//         styleNode.textContent = "/* Minified CSS using our Chrome Extension */" + minifiedCSS;
//         document.head.appendChild(styleNode);
//     });
// }


function minimizeCSS() {
    let promises = [];

    // Minify internal CSS from style tags
    const styleElements = Array.from(document.querySelectorAll('style'));
    styleElements.forEach(style => {
        const cssText = style.innerHTML;
        promises.push(
            fetch('http://localhost:5000/minify-css', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: cssText
            })
            .then(response => response.text())
            .then(minifiedCSS => {
                style.innerHTML = minifiedCSS;
            })
        );
    });

    // Minify external CSS from link tags
    const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    linkElements.forEach(link => {
        const href = link.href;
        promises.push(
            fetch(href)
            .then(response => response.text())
            .then(cssText => {
                return fetch('http://localhost:5000/minify-css', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: cssText
                });
            })
            .then(response => response.text())
            .then(minifiedCSS => {
                const blob = new Blob([minifiedCSS], { type: 'text/css' });
                const blobURL = URL.createObjectURL(blob);
                link.href = blobURL;
            })
        );
    });

    return Promise.all(promises);
}


// function minimizeJS() {
//     let jsText = '';

//     // Gather all scripts from the page
//     const scripts = Array.from(document.scripts);
//     scripts.forEach(script => {
//         if (script.src) {
//             // If the script has a src attribute, it's an external script.
//             // For simplicity, we're ignoring external scripts in this implementation.
//             return;
//         }
//         jsText += script.textContent;
//     });

//     // Minify the gathered JS
//     return fetch('http://localhost:5000/minify-js', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: jsText
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.text();
//     })
//     .then(minifiedJS => {
//         console.log("// Minified JS using our Chrome Extension");
//         console.log(minifiedJS);  // Log the minified JS to the console

//         // Remove all original inline scripts from the page
//         scripts.forEach(script => {
//             if (!script.src) {  // Only remove inline scripts
//                 script.parentNode.removeChild(script);
//             }
//         });

//         // Add the minified JS to the page
//         let scriptNode = document.createElement("script");
//         scriptNode.textContent = "// Minified JS using our Chrome Extension\n" + minifiedJS;
//         document.body.appendChild(scriptNode);
//     });
// }

