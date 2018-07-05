factorialN :: (Int -> Int) -> Int -> Int
factorialN f 1 = 1
factorialN f n = n * f(n - 1)
factorial1 = factorialN (const 1)
factorial2 = factorialN factorial1
factorial3 = factorialN factorial2
factorial4 = factorialN factorial3

y f = f (y f)
factorial = y factorialN