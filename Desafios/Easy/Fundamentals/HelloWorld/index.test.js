import HelloWorld from "."

describe("teste Console.log", ()=>{
  it(`deve aparecer um console.log retornando "Hello, World!"`, ()=>{
   expect(HelloWorld("Hello, World!")).toBe("Hello, World!")
  })
})