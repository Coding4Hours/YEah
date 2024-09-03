/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/ultraviolet/',
    bare: "https://gointerstellar.app/ov/",
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: '/ultraviolet/uv.handler.js',
    client: '/ultraviolet/uv.client.js',
    bundle: '/ultraviolet/uv.bundle.js',
    config: '/ultraviolet/uv.config.js',
    sw: '/ultraviolet/uv.sw.js',
};
