function addFiles(files) {
    let totalSize = 0;
    let currentFile = "";
    let isLast = false;

    files.forEach(file => {
        if (isLast && file.isDirectory()) {
            // Directory, save to directory
            const outputDir = "/tmp/" + dateutil.tz.datetime_tzconv(file.name).replace(" ", "-") + ".json";
            fs.mkdirSync(outputDir);
            console.log(`Directory ${outputDir} created`);
        } else if (file.isFile() && file.size > totalSize) {
            // File, save to file
            currentFile = file.name;
            isLast = true;
            totalSize += file.size;
        }
    });

    if (!isLast) {
        // Directory or files are not the last one
        const outputDir = "/tmp/" + dateutil.tz.datetime_tzconv(files[files.length - 1].name).replace(" ", "-") + ".json";
        fs.writeFileSync(outputDir, `{"totalSize":${totalSize},"currentFile":${currentFile}}`);
    }
}

dateutil is a JavaScript library for parsing and formatting dates.
isLast is a boolean flag indicating whether we are processing the last file or not.
file.isFile() checks if it's an object representing a file.
file.size returns the size in bytes of the file.
directoryName is used to generate a unique filename from the file name.
dateutil.tz.datetime_tzconv converts a date string (without time) to UTC timestamp.
