import HelloWorld from "."

describe("teste Console.log", ()=>{
  it(`deve aparecer um console.log retornando "Hello, World!"`, ()=>{
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    HelloWorld();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');
    consoleSpy.mockRestore();
  })
})