const fs = require('fs')
const path = require('path')

const patterns = [/(.*?)[. -][Ss]([0-9]{1,2})[Ee]([0-9]{1,2})(.*)/, /(.*?)[.]([0-9]{1,2})([0-9]{2})(.*)/, /(.*?)[.]?([0-9]{1,2})x([0-9]{1,2})(.*)/];
const extensions = [".mp4", ".avi", ".mkv", ".srt"];

function isExtensionOK(ext) {
    return extensions.includes(ext);
}

function isSampleFile(filename) {
    const regex = /sample/
    return regex.test(filename)
}

function ensureTwoDigitSeason(season) {
    return season.length < 2 ? "0"+season : season
}

function newSeriePath(serie) {
    let filename = path.basename(serie)
    for (let i = 0 ; i < patterns.length; i ++) {
        const re = new RegExp(patterns[i])
        if (re.test(filename)) {
            const [, name, season, episode, version] = re.exec(filename)
            return `${name}/season${ensureTwoDigitSeason(season)}/${filename}`.toLowerCase()
        }
    }
    return `1#ATrier/${filename}`
}

exports.isExtensionOK = isExtensionOK;
exports.isSampleFile = isSampleFile;
exports.newSeriePath = newSeriePath;