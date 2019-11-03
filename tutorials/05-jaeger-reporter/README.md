# 05-jaeger-reporter

Stalk can directly send spans to jaeger collectors which only accepts data in [jaeger.thrift](https://github.com/jaegertracing/jaeger-idl/blob/master/thrift/jaeger.thrift) binary format. Stalk has partially-implemented thrift binary protocol by using built-in Javascript APIs, so this works both on node.js and browsers. However, this reporter uses ArrayBuffer, DataView, BigInt APIs for thrift binary encoding. So your target platform must support these APIs or they must be polyfilled. BigInt is currently supported by just `Chrome >=67` in browsers, and node.js got its BigInt support on `v10.4.0`.

Another sad thing is jaeger collector does not allow CORS, so this reporter will stuck CORS error on browsers. This is no problem for node.js and electron platforms. A some kind of proxy server can be used as a workaround for this issue. Or you disable web security settings from chrome with starting it `--disable-web-security` flag.

Let's create a jaeger reporter

```js
const jaegerReporter = new stalk.reporters.JaegerReporter({
    // Jaeger collector base url
    jaegerBaseUrl: 'http://localhost:14268',

    process: {
        serviceName: 'my-awesome-service',
        // Optional process tags
        tags: {
            tag1: 'value1',
            tag2: 'value2'
        }
    },

    // If you're on node.js use `node-fetch` package
    fetch: require('node-fetch')

    // Extra http headers
    // requestHeaders: {},
});

// Add this reporter to stalk.Tracer
stalkTracer.addReporter(jaegerReporter);

// You can remove it anytime you want
// stalkTracer.removeReporter(jaegerReporter);
```

Call the `main()` function and report it

```js
main().then(async () => {
    try {
        await jaegerReporter.report();
        console.log('Reported!');
        process.exit(0);
    } catch (err) {
        console.error(`Could not reported`, err);
        process.exit(1);
    }
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
```

Then go to jaeger ui (http://localhost:16686/) and see the trace we just created.

**[Tutorial 06 - Stalk Collector](../06-stalk-collector/README.md)**