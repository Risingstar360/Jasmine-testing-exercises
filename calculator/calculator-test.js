
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 1000, years: 2, rate: 10};
expect(calculateMonthlyPayment(values)).toEqual('46.14');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 1018.60, years: 2, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('47.00');
  });

/// etc
