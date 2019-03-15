const { Hashtag } = require('../lib/hashtag')

describe('Hashtag', () => {
    describe('#generate', () => {
        describe('when the input is an empty string', () => {
            test('should return false', () => {
                const expected = false;
                const input = ''

                const actual = new Hashtag(input).generate()
                expect(actual).toEqual(expected)
            })
        })

        describe('when the input is a really long empty string', () => {
            test('should return false ', () => {
                const expected = false;
                const input = ''.repeat(200)

                const actual = new Hashtag(input).generate()
                expect(actual).toEqual(expected)
            })
        })

        describe('when the input is a single word', () => {
            test('the result should return the word with a hashtag', () => {
                const input = 'Depot'

                const actual = new Hashtag(input).generate();

                expect(actual).toEqual('#Depot');
                
            })
        })

        describe('when the input is a sentence', () => {
            test('the result should start with an octothorpe', () => {
                const input = 'Do We Have A Hashtag'

                const actual = new Hashtag(input).generate()

                const shouldBeOctothorpe = actual[0]

                expect(shouldBeOctothorpe).toEqual('#')
            })

            test('the result should not have spaces', () => {
                const input = 'Please Get Rid Of These Spaces'

                const actual = new Hashtag(input).generate()

                for (const char of actual) {
                    expect(char).not.toEqual(' ')
                }
            })
            
            test('the result should capitalize each word', () => {
                const input = 'Please Have Some Capital Letters'

                const actual = new Hashtag(input).generate()

                expect(actual).toContain('PleaseHaveSomeCapitalLetters')
            })


        })
    });
});

// Test.assertEquals(new HashTag("Do We Have A Hashtag").generate(), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// Test.assertEquals(new HashTag("Uppercase word Hashtag").generate(), "#UppercaseWordHashtag", "Expected a Hashtag (#) at the beginning.")
// Test.assertEquals(new HashTag("Codewars").generate(), "#Codewars", "Should handle a single word.")
// // Test.assertEquals(new HashTag("Codewars Is Nice").generate(), "#CodewarsIsNice", "Should remove spaces.")
// // Test.assertEquals(new HashTag("Codewars is nice").generate(), "#CodewarsIsNice", "Should capitalize first letters of words.")
// // Test.assertEquals(new HashTag("code" + " ".repeat(140) + "wars").generate(), "#CodeWars")
// // Test.assertEquals(new HashTag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat").generate(), false, "Should return false if the final word is longer than 140 chars.")
// // Test.assertEquals(new HashTag("a".repeat(139)).generate(), "#A" + "a".repeat(138), "Should work")
// // Test.assertEquals(new HashTag("a".repeat(140)).generate(), false, "Too long")
