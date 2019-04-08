const { Hashtag } = require("./hashtag");

describe("Hashtag", () => {
  describe("#generate", () => {
    describe("when the input is an empty string", () => {
      test("should return false", () => {
        const expected = false;
        const input = "";

        const actual = new Hashtag(input).generate();
        expect(actual).toEqual(expected);
      });
    });

    describe("when the input is a really long empty string", () => {
      test("should return false ", () => {
        const expected = false;
        const input = "".repeat(200);

        const actual = new Hashtag(input).generate();
        expect(actual).toEqual(expected);
      });
    });

    describe("when the input is a single word", () => {
      test("the result should return the word with a hashtag", () => {
        const input = "Depot";

        const actual = new Hashtag(input).generate();

        expect(actual).toEqual("#Depot");
      });
    });

    describe("when the input is a sentence", () => {
      test("the result should start with an octothorpe", () => {
        const input = "Do We Have A    Hashtag";

        const actual = new Hashtag(input).generate();

        const shouldBeOctothorpe = actual[0];

        expect(shouldBeOctothorpe).toEqual("#");
      });

      test("the result should not have spaces", () => {
        const input = "Please Get Rid Of These Spaces";

        const actual = new Hashtag(input).generate();

        for (const char of actual) {
          expect(char).not.toEqual(" ");
        }
      });

      test("the result should capitalize each word", () => {
        const input = "Please have Some Capital Letters";

        const actual = new Hashtag(input).generate();

        expect(actual).toContain("PleaseHaveSomeCapitalLetters");
      });

      // test("should uppercase the first character if there are no leading spaces", () => {
      //   const expected = "#HomeDepot"
      //   const input = "home" + " ".repeat(140) + "depot";

      //   const actual = new Hashtag(input).generate();

      //   expect(actual).toContain(expected);

      // })

      // test("should return false if the final word is over 140 characters", () => {
      //   const expected = false;
      //   const input = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat";

      //   const actual = new Hashtag(input).generate();

      //   expect(actual).toEqual(expected);
      // });

      //  test("should return an output if the final word is equal to 140 characters and uppercase the first character", () => {
      //   const input = "a".repeat(139);
      //   const ouput = "#A" + "a".repeat(138);

      //   const actual = new Hashtag(input).generate();

      //   expect(actual).toEqual(output);
      // });

      //  test("should return false Too Long if the final word is over to 140 characters", () => {
      //  const error = false;
      //  const expected = error + ", Too Long";
      //  const input = "a".repeat(140);

      //  const actual = new Hashtag(input).generate();

      //  expect(actual).toEqual(expected);
      // });
    });
  });
});
