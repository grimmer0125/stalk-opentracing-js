import * as opentracing from '../opentracing/index';
/**
 * Some types
 */
declare type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
declare type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;
declare type CustomRelationHandler = (span: opentracing.Span, ...args: any[]) => Partial<opentracing.SpanOptions>;
declare type PredefinedRelations = 'childOf' | 'followsFrom' | 'newTrace';
declare type OpenTracingTracerGetter = () => opentracing.Tracer;
/**
 * Main `@Trace()` decorator for class methods to be traced. Due to typescript decorator
 * restrictions, we cannot apply this decorator to normal functions :/
 * So, every traced function must be a class method.
 *
 * THERE IS JUST ONE SIMPLE RULE TO USE `@Trace()` DECORATOR:
 * All the `Trace()`d methods must take an `opentracing.Span` instance as first parameter.
 * Type definition for this rule is already set, so it shouldn't be a problem.
 *
 * Sample usage:
 * ```ts
 * class Calculator {
 *      @Trace({ operationName: 'multiply', relation: 'newTrace', autoFinish: true })
 *      multiply(span, a, b) {
 *          // `span` is automatically created from opentracing's global tracer
 *          // with it's operation name set, you can use standart `opentracing.Span` methods.
 *          span.addTags({ a, b });
 *
 *          let acc = 0;
 *          for (let i = 0; i < b; i++) {
 *              acc = this.sum(span, acc, a); // Call with current span
 *          }
 *
 *          return acc;
 *      }
 *
 *
 *      @Trace({ relation: 'childOf', autoFinish: true }) // operationName can be omitted, method name is used by default
 *      sum(span, a, b) {
 *          span.log({ level: 'info', message: `Sum is called with ${a} and ${b}` });
 *          return a + b;
 *      }
 * }
 *
 * const calculator = new Calculator();
 * calculator.multiply(null, 4, 6); // There is no span passed!
 * // Because `multiply` method's trace relation is set to `newTrace`
 * ```
 *
 * `relation` must be set to a string. It can be one of pre-defined some relations: `childOf`,
 * `followsFrom`, `newTrace`, or it can be `custom`. If `custom` is selected, you should
 * pass another `handler` option which is a function takes the same arguments with the decorated function.
 * It will called before original method and it must be return some part of span options
 * (`opentracing.SpanOptions`) that defines the relation to other spans.
 * If you want to extract span context from some sort of external communication,
 * you should set your custom relation handler.
 *
 * If `autoFinish` is set true, return value of the method will be checked. If it is promise-like
 * object, we will wait until it settles. If it's resolved, current span will be finished normally. If it's
 * rejected, current span's `error` tag will be set true and an error log will be added automatically, then
 * it will finish current span.
 *
 * If it returns not promise, we assume it's a sync method and will finish automatically.
 * So, if your method is async with callback-style control flow, you must set `autoFinish` to `false`,
 * and call `span.finish()` manually.
 *
 * If `autoFinish` is set false, return value of the method is not checked, it will be return immediately.
 * Therefore it's implementor's responsibility to call `span.finish()` to finish current span.
 * Sample usage:
 * ```ts
 * @Trace({ relation: 'childOf', autoFinish: false })
 * getSomethingFromDatabase(span, id) {
 *      // ...
 *      db.get(id, (err, result) => {
 *          if (err) {
 *              span.setTag('error', true);
 *              span.log({ level: 'error', event: 'error', message: err.message, stack: err.stack, 'error.kind': err.name });
 *          }
 *
 *          span.finish();
 *      });
 * }
 * ```
 */
export declare function Trace<T extends CustomRelationHandler>(options: {
    operationName?: string;
    relation: PredefinedRelations;
    autoFinish: boolean;
    getTracer?: OpenTracingTracerGetter;
} | {
    operationName?: string;
    relation: 'custom';
    handler: T;
    autoFinish: boolean;
    getTracer?: OpenTracingTracerGetter;
}): (target: any, propertyName: string, propertyDesciptor: TypedPropertyDescriptor<ReplaceReturnType<T, any>>) => TypedPropertyDescriptor<ReplaceReturnType<T, any>>;
export default Trace;
/**
 * Syntactic sugar `@TraceAsync` decorator for async functions. You can
 * omit `autoFinish` option, it's enabled by default. Also type checking is set,
 * if method is not returning promise, compiler will give error.
 */
export declare function TraceAsync<T extends CustomRelationHandler>(options: {
    operationName?: string;
    relation: PredefinedRelations;
    getTracer?: OpenTracingTracerGetter;
} | {
    operationName?: string;
    relation: 'custom';
    handler: T;
    getTracer?: OpenTracingTracerGetter;
}): (target: any, propertyName: string, propertyDesciptor: TypedPropertyDescriptor<ReplaceReturnType<T, Promise<any>>>) => TypedPropertyDescriptor<ReplaceReturnType<T, Promise<any>>>;
export declare function ChildOfRelationHandler(parentSpan: opentracing.Span, ...args: any[]): Partial<opentracing.SpanOptions>;
export declare function FollowFromRelationHandler(parentSpan: opentracing.Span, ...args: any[]): Partial<opentracing.SpanOptions>;
export declare function NewTraceRelationHandler(parentSpan: opentracing.Span, ...args: any[]): Partial<opentracing.SpanOptions>;
