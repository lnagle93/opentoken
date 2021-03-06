"use strict";

module.exports = () => {
    var middleware, middlewareFactory;

    middleware = jasmine.createSpy("links-middleware-mock-middleware").andCallFake((req, res, next) => {
        next();
    });

    // This factory only returns the same middleware over and over.
    middlewareFactory = jasmine.createSpy("links-middleware-mock-factory").andReturn(middleware);

    return middlewareFactory;
};
