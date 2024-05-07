import { contarAte20, dezEmDez, exirNumeroImpar } from "./forLoop";

describe("ForLoop", () => {
  it("Teste 1: contarAte20 - Quando a função for chamada de imprimir os números de 1 a 2o no console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    contarAte20();
    expect(consoleSpy).toBeCalledTimes(21);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 0);
    consoleSpy.mockRestore();
  });
  it("Teste 2: dezEmDez - Quando a função for chamada de imprimir os números de 10 a 100, contando de 10 em 10 no console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    dezEmDez();
    expect(consoleSpy).toBeCalledTimes(10);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 10);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 20);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 30);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 40);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 50);
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 60);
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 70);
    expect(consoleSpy).toHaveBeenNthCalledWith(8, 80);
    expect(consoleSpy).toHaveBeenNthCalledWith(9, 90);
    expect(consoleSpy).toHaveBeenNthCalledWith(10, 100);
    consoleSpy.mockRestore();
  });
  it("Teste 3: exirNumeroImpar - Quando a função for chamada de imprimir os valore de 1 a 20 que forem impar no console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    exirNumeroImpar();
    expect(consoleSpy).toBeCalledTimes(10);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 3);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 5);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 7);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 9);
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 11);
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 13);
    expect(consoleSpy).toHaveBeenNthCalledWith(8, 15);
    expect(consoleSpy).toHaveBeenNthCalledWith(9, 17);
    expect(consoleSpy).toHaveBeenNthCalledWith(10, 19);
    consoleSpy.mockRestore();
  });
});
