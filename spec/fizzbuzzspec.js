
describe("Fizzbuzz", function() {
  var fizzbuzz

   beforeEach(function() {
     fizzbuzz = new FizzBuzz();
   });

    it('says fizz when divisible by 3', function() {
      expect(fizzbuzz.convert(3)).toEqual('fizz')
    });

    it('says buzz when divisible by 5', function() {
      expect(fizzbuzz.convert(5)).toEqual('buzz')
    });

    it('says fizzbuzz when divisible by 3 & 5', function() {
      expect(fizzbuzz.convert(15)).toEqual('fizzbuzz')
    });
});
