import findShort from ".";

    describe('FindShort', ()=>{
    it("deve retornar a palavra com menor comprimento", ()=>{
        expect(findShort("bom dia, amigo!")).toEqual(3);
        expect(findShort("este é um ótimo dia.")).toEqual(1);
        expect(findShort("fale-me sobre você.")).toEqual(5);

    })
})