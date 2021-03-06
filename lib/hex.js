"use strict";

module.exports = () => {
    /**
     * Decode data from hex.
     *
     * @param {(Buffer|string)} data
     * @return {Buffer} decoded
     */
    function decode(data) {
        if (typeof data !== "string") {
            data = data.toString("binary");
        }

        data = data.replace(/[^a-fA-F0-9]/g, "");

        return new Buffer(data, "hex");
    }


    /**
     * Encode data into hex.
     *
     * @param {(Buffer|string)} data
     * @return {string} encoded
     */
    function encode(data) {
        if (!Buffer.isBuffer(data)) {
            data = new Buffer(data, "binary");
        }

        return data.toString("hex");
    }


    return {
        decode,
        encode
    };
};
