export function LogMethod(_target, propertyName, propertyDesciptor) {
    const originalMethod = propertyDesciptor.value;
    propertyDesciptor.value = function (...args) {
        console.log(`${propertyName} metódus hívva az argumentumokkal: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return propertyDesciptor;
}
