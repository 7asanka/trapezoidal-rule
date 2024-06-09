// Define the function to be integrated
function f(x) {
    return x^2; // Example function: sin(x)
}

// Trapezoidal rule for numerical integration
function trapezoidalRule(a, b, n) {
    let h = (b - a) / n; // Calculate the width of each trapezoid
    let sum = 0; // Initialize sum to 0

    // Calculate the sum of the function values at the interval points
    for (let i = 0; i <= n; i++) {
        let x = a + i * h; // Calculate the current x value
        if (i == 0 || i == n) { // If it's the first or last point
            sum += f(x); // Add f(x) to the sum
        } else {
            sum += 2 * f(x); // Add 2*f(x) to the sum
        }
    }

    // Calculate the final approximation using the trapezoidal rule formula
    let integral = (b - a) * sum / (2 * n);
    return integral;
}


// Define the interval [a, b] and the number of trapezoids (n)
let a = 0; // Start point
let b = Math.PI; // End point (π)
let n = 1000; // Number of trapezoids

// Calculate the numerical approximation of the integral
let result = trapezoidalRule(a, b, n);

// Output the result to the console
console.log(`Numerical approximation of the integral of sin(x) from ${a} to ${b} using ${n} trapezoids: ${result}`);
