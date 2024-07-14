import { get }  from "../index";



test('get one floor', () => {
    const result = get({a :10}, "a");
    expect(result).toBe(10);
});

test('is undifined', () => {
    const result = get(undefined!, "a");
    expect(result).toBe(undefined);
});
test('get function', () => {
    const result = get({a :10, b :{z :1}}, "b.z");
    expect(result).toBe(1);
});