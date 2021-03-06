const { opentracing, stalk } = require('../../');
const sleep = (duration) => new Promise(resolve => setTimeout(resolve, duration));

const stalkTracer = new stalk.Tracer();
opentracing.initGlobalTracer(stalkTracer);
const globalTracer = opentracing.globalTracer();

// Let's create a zipkin reporter
const zipkinReporter = new stalk.reporters.ZipkinReporter({
    // Zipkin backend url
    zipkinBaseUrl: 'http://localhost:9411',

    localEndpoint: {
        serviceName: 'my-awesome-service',
        // Some optionals
        // ipv4: '0.0.0.0',
        // port: 8080
    },

    // Optional tags to be added all the spans
    tags: {
        tag1: 'value1',
        tag2: 'value2'
    },

    // If you're on node.js use `node-fetch` package
    fetch: require('node-fetch'),

    // Extra http headers
    // requestHeaders: {},

    // Should convert logs to annotations (true by default)
    // convertLogsToAnnotations: false
});

// Add this reporter to stalk.Tracer
stalkTracer.addReporter(zipkinReporter);

// You can remove it anytime you want
// stalkTracer.removeReporter(zipkinReporter);

async function main() {
    const span = globalTracer.startSpan('main()');
    span.addTags({
        tag1: 'value1',
        tag2: 'value2'
    });

    span.log({ message: 'Will wait 1 second' });
    await sleep(1000);
    await printHello(span);
    span.finish();
}


async function printHello(parentSpan) {
    const span = globalTracer.startSpan('printHello()', { childOf: parentSpan });
    span.log({ message: 'Will wait 500ms more, because I can' });
    await sleep(500);
    console.log('Hello world!');
    span.finish();
}

main().then(async () => {
    try {
        await zipkinReporter.report();
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
