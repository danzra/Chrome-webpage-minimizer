// // const express = require('express');
// // let fetch;

// // (async () => {
// //     fetch = await import('node-fetch').then(module => module.default);
// // })();

// // const cors = require('cors'); // <-- Add this line

// // const app = express();

// // app.use(cors()); // <-- Add this line to enable CORS for all routes

// // const PORT = 5000;
// // const MINIFIER_URL = 'https://html-minifier.com/raw';
// // // const express = require('express');
// // const bodyParser = require('body-parser');
// // // const app = express();

// // // Increase the limit for the payload
// // app.use(bodyParser.text({ limit: '50mb' })); 
// // // app.use(express.text({ type: '*/*' }));  // Middleware to parse plain text bodies

// // app.post('/minify', async (req, res) => {
// //     try {
// //         const response = await fetch(MINIFIER_URL, {
// //             method: 'POST',
// //             body: `input=${encodeURIComponent(req.body)}`
// //         });

// //         const minifiedContent = await response.text();

// //         res.send(minifiedContent);
// //     } catch (error) {
// //         res.status(500).send('Error processing request.');
// //     }
// // });

// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });
// // app.get('/test', (req, res) => res.send('Server is working!'));


// const express = require('express');
// let fetch;

// (async () => {
//     fetch = await import('node-fetch').then(module => module.default);
// })();

// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(bodyParser.text({ limit: '50mb' })); 

// const PORT = 5000;
// const MINIFIER_URL = 'https://htmlcompressor.com/api/';

// app.post('/minify', async (req, res) => {
//     try {
//         const formData = new URLSearchParams();
//         formData.append('input', req.body);

//         const response = await fetch(MINIFIER_URL, {
//             method: 'POST',
//             body: formData
//         });

//         const minifiedContent = await response.text();

//         if (response.ok) {
//             res.send(minifiedContent);
//         } else {
//             console.error(minifiedContent);
//             res.status(500).send('Error processing request.');
//         }
//     } catch (error) {
//         res.status(500).send('Error processing request.');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.get('/test', (req, res) => res.send('Server is working!'));



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const minify = require('html-minifier').minify;

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.text({ limit: '50mb' }));

// app.post('/minify', (req, res) => {
//     try {
//         const minifiedContent = minify(req.body, {
//             removeAttributeQuotes: true,
//             collapseWhitespace: true,
//             collapseBooleanAttributes: true,       // Omit attribute values from boolean attributes
//             removeComments: true,
//             removeEmptyAttributes: true,           // Remove all attributes with whitespace-only values
//             removeOptionalTags: true,              // Remove optional tags
//             removeRedundantAttributes: true,       // Remove attributes when value matches default
//             removeScriptTypeAttributes: true,      // Remove type="text/javascript" from script tags. Other type attribute values are left intact
//             removeStyleLinkTypeAttributes: true,   // Remove type="text/css" from style and link tags. Other type attribute values are left intact
//             useShortDoctype: true,                 // Replaces the doctype with the short (HTML5) doctype
//             minifyCSS: true,                       // Minify CSS in style elements and style attributes
//             minifyJS: true,                        // Minify JavaScript in script elements and event attributes
//             minifyURLs: true                       // Minify URLs in various attributes (uses relateurl)
//         });

//         res.send(minifiedContent);
//     } catch (error) {
//         console.error("Error during minification:", error);
//         res.status(500).send('Error processing request.');
//     }
// });

// app.get('/test', (req, res) => res.send('Server is working!'));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const minify = require('html-minifier').minify;
const CleanCSS = require('clean-css');
const Terser = require("terser"); 
const app = express();
//const execa = require('execa');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.text({ limit: '50mb' }));



app.post('/minify-html', (req, res) => {
    try {
        const minifiedContent = minify(req.body, {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,           // Remove all attributes with whitespace-only values
            removeOptionalTags: true,              // Remove optional tags
            // removeRedundantAttributes: true,       // Remove attributes when value matches default
            // removeScriptTypeAttributes: true,      // Remove type="text/javascript" from script tags. Other type attribute values are left intact
            // removeStyleLinkTypeAttributes: true,   // Remove type="text/css" from style and link tags. Other type attribute values are left intact
            useShortDoctype: true,                 // Replaces the doctype with the short (HTML5) doctype
                               
            minifyURLs: true,                       // Minify URLs in various attributes (uses relateurl)
            minifyCSS: true,
            minifyJS: true
        });

        res.send(minifiedContent);
    } catch (error) {
        console.error("Error during HTML minification:", error);
        res.status(500).send('Error processing request.');
    }
});

app.post('/minify-css', (req, res) => {
    try {
        const cleanCSS = new CleanCSS({
            level: 1, // Set to 2 for deep optimization/compression
        });
        const minifiedCSS = cleanCSS.minify(req.body);
        
        if (minifiedCSS.errors.length) {
            // If there are any errors in the CSS, return them
            return res.status(400).send({ errors: minifiedCSS.errors });
        }

        res.send(minifiedCSS.styles);
    } catch (error) {
        console.error("Error during CSS minification:", error);
        res.status(500).send('Error processing request.');
    }
});

app.get('/test', (req, res) => res.send('Server is working!'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { minify } from 'html-minifier';
// import CleanCSS from 'clean-css';
// //import Terser from 'terser';

// const app = express();
// const PORT = 9999;

// app.use(cors());
// app.use(bodyParser.text({ limit: '50mb' }));

// let execaFunction = null;

// import('execa').then(module => {
//     execaFunction = module.default;
// }).catch(err => {
//     console.error("Failed to load execa:", err);
// });

// app.get('/get-speed', async (req, res) => {
//     if (!execaFunction) {
//         return res.status(500).json({ error: "Server configuration error. Cannot measure speed." });
//     }

//     try {
//         // Use the local path to the fast-cli binary
//         const {stdout} = await execaFunction('./node_modules/.bin/fast');
//         const speed = parseFloat(stdout.split(' ')[0]);
//         console.log({ speed: speed });
//         res.json({ speed: speed });
//     } catch (error) {
//         console.error("Error measuring speed:", error);
//         res.status(500).json({ error: error.message || "Failed to measure speed" });
//     }
// });


// app.post('/minify-html', (req, res) => {
//     try {
//         const minifiedContent = minify(req.body, {
//             removeAttributeQuotes: true,
//             collapseWhitespace: true,
//             removeComments: true,
//             removeEmptyAttributes: true,
//             removeOptionalTags: true,
//             useShortDoctype: true,
//             minifyURLs: true,
//             minifyCSS: true,
//             minifyJS: true
//         });

//         res.send(minifiedContent);
//     } catch (error) {
//         console.error("Error during HTML minification:", error);
//         res.status(500).send('Error processing request.');
//     }
// });

// app.post('/minify-css', (req, res) => {
//     try {
//         const cleanCSS = new CleanCSS({
//             level: 1,
//         });
//         const minifiedCSS = cleanCSS.minify(req.body);
        
//         if (minifiedCSS.errors.length) {
//             return res.status(400).send({ errors: minifiedCSS.errors });
//         }

//         res.send(minifiedCSS.styles);
//     } catch (error) {
//         console.error("Error during CSS minification:", error);
//         res.status(500).send('Error processing request.');
//     }
// });

// app.get('/test', (req, res) => res.send('Server is working!'));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
