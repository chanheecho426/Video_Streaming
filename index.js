const express =require("express");
const app =express();
const fs = require("fs");

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html");
});
app.get("/video_2160", function(req,res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range headear");
    }

    const videoPath = "video_2160.mp4";
    const videoSize = fs.statSync("video_2160.mp4").size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type":"video/mp4",
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath, {start,end});
        

    videoStream.pipe(res);
});

app.get("/video_1440", function(req,res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range headear");
    }

    const videoPath = "video_1440.mp4";
    const videoSize = fs.statSync("video_1440.mp4").size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type":"video/mp4",
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath, {start,end});
        

    videoStream.pipe(res);
});

app.get("/video_1080", function(req,res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range headear");
    }

    const videoPath = "video_1080.mp4";
    const videoSize = fs.statSync("video_1080.mp4").size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type":"video/mp4",
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath, {start,end});
        

    videoStream.pipe(res);
});

app.get("/video_720", function(req,res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range headear");
    }

    const videoPath = "video_720.mp4";
    const videoSize = fs.statSync("video_720.mp4").size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type":"video/mp4",
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath, {start,end});
        

    videoStream.pipe(res);
});

app.get("/video_360", function(req,res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range headear");
    }

    const videoPath = "video_360.mp4";
    const videoSize = fs.statSync("video_360.mp4").size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type":"video/mp4",
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath, {start,end});
        

    videoStream.pipe(res);
});

app.listen(8000, function() {
    console.log("listening 8000");
});